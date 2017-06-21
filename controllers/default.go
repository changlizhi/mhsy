package controllers

import (
	"github.com/astaxie/beego"
	jwt "github.com/dgrijalva/jwt-go"
	"log"
	"mhsy/src/inits"
	"mhsy/src/wenzhangdao"
	"mhsy/src/wenzhangleixingservice"
	"mhsy/src/yonghuservice"
	"strconv"
	"strings"
	"time"
)

type Error_controller struct {
	beego.Controller
}
type Richeditor_controller struct {
	beego.Controller
}
type Imgupload_controller struct {
	beego.Controller
}
type Toeditor_controller struct {
	beego.Controller
}
type Seltpl_controller struct {
	beego.Controller
}
type Base_controller struct {
	beego.Controller
}
type Shou_ye_controller struct {
	beego.Controller
}
type Wenzhanglist_controller struct {
	beego.Controller
}
type Wenzhang_controller struct {
	beego.Controller
}
type Denglu_controller struct {
	beego.Controller
}

type Dnamylist_controller struct {
	beego.Controller
}

func (c *Error_controller) Error404() {
	c.TplName = "error.html"
}

func (c *Imgupload_controller) Post() {
	f, h, _ := c.GetFile("upload")
	path := "static/img/upload/" + h.Filename
	err := c.SaveToFile("upload", path)
	if err != nil {
		log.Println("ckeditor上传文件错误！")
	}
	f.Close()
	c.Ctx.WriteString("{'url':'" + path + "','state':'SUCCESS'}")
	return
}

// 获取到的路径为/toeditor/update[或add]/:type/:id
func (c *Toeditor_controller) Get() {
	requrl := c.Ctx.Request.URL.Path
	removepre := strings.Replace(requrl, "/toeditor", "", -1)
	if strings.Contains(removepre, "/update") {
		removetype := strings.Replace(removepre, "/update", "", -1)
		splitstr := strings.Split(removetype, inits.Bgo_json.Xie_xian)
		if len(splitstr) != 4 {
			log.Println("模块的restful请求路径错误")
			c.TplName = "error.html"
			return
		}
		lingpai := splitstr[3]
		tongguo, claims := Yanzheng_lingpai(lingpai)
		if !tongguo {
			log.Println("验证失败了，claims为null")
			c.TplName = "autherror.html"
			return
		}
		log.Println("自定义参数----------", claims.User)
		suoyou_fenlei := wenzhangleixingservice.Huoqu_suoyou_leixing()
		for i := 0; i < len(suoyou_fenlei); i++ {
			if suoyou_fenlei[i].Fenlei == splitstr[1] {
				id, err := strconv.ParseInt(splitstr[2], 10, 10)
				if err != nil {
					log.Println("需要修改的模块id无法转换为数字")
					c.TplName = "error.html"
					return
				}
				wenzhang := wenzhangdao.Select_wenzhang(int(id))
				c.Data["wenzhang"] = wenzhang
				requrl := inits.Bgo_json.Xie_xian + splitstr[1] + inits.Bgo_json.Xie_xian + splitstr[2]
				c.Data["requrl"] = requrl
				c.Data["editorflag"] = "update"
				c.TplName = "toeditor.html"
				return
			}
		}
	}
	if strings.Contains(removepre, "/add") {
		splitstr := strings.Split(removepre, inits.Bgo_json.Xie_xian)
		lingpai := splitstr[2]
		tongguo, claims := Yanzheng_lingpai(lingpai)
		if !tongguo {
			log.Println("验证失败了，claims为null")
			c.TplName = "autherror.html"
			return
		}
		log.Println("自定义参数----------", claims.User)
		c.Data["requrl"] = "wenzhanglist"
		c.Data["editorflag"] = "add"
		c.TplName="toeditor_new.html"
		return
	}
	log.Println("需要修改的模块在数据库没有提供支持")
	c.TplName = "error.html"
}
func (c *Seltpl_controller) Get() {
	c.TplName = "seltpl.html"
}
func (c *Base_controller) Get() {
	c.TplName = "base.html"
}
func Yanzheng_lingpai(lingpai string) (bool, *Yanzheng_claims) {
	token, err := jwt.ParseWithClaims(lingpai, &Yanzheng_claims{}, func(token *jwt.Token) (interface{}, error) {
		key := []byte(inits.Bgo_json.Jwt_mima + inits.Bgo_json.Jwt_yan)
		return key, nil
	})
	if err != nil {
		log.Println(err)
		log.Println("解析token失败")
		return false, nil
	}
	if claims, ok := token.Claims.(*Yanzheng_claims); ok && token.Valid {
		return true, claims
	}
	return false, nil
}
func (sy *Dnamylist_controller) Get() {
	lingpai := sy.GetString("lingpai")
	log.Println(lingpai)
	sy.TplName = "dnamylist.html"
}
func (sy *Denglu_controller) Get() {
	sy.TplName = "denglu.html"
}

type Yanzheng_claims struct {
	User string
	jwt.StandardClaims
}

func shengcheng_lingpai(user string) (string, error) {
	key := []byte(inits.Bgo_json.Jwt_mima + inits.Bgo_json.Jwt_yan)
	claims := Yanzheng_claims{
		user,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(key)
}
func (sy *Denglu_controller) Post() {
	name := sy.GetString("Name")
	passwd := sy.GetString("Password")
	chenggong := yonghuservice.Yanzheng_yonghu(name, passwd)
	if !chenggong {
		sy.Data["error"] = "用户名或密码错误！"
		sy.TplName = "denglu.html"
		return
	}
	lingpai, err := shengcheng_lingpai("{\"ok\":\"01010\"}")
	if err != nil {
		sy.Data["error"] = "生成令牌失败"
		sy.TplName = "denglu.html"
		return
	}
	sy.Data["lingpai"] = lingpai
	sy.TplName = "fortoken.html"

}

func (sy *Richeditor_controller) Post() {
	lingpai := strings.Split(sy.Ctx.Input.Header("Authorization"), " ")[1]
	tongguo, claims := Yanzheng_lingpai(lingpai)
	if !tongguo {
		log.Println("验证失败了，claims为null")
		sy.TplName = "autherror.html"
		return
	}
	log.Println("自定义参数----------", claims.User)
	requrl := sy.GetString("requrl")
	contentpre := sy.GetString("content")
	content := strings.Replace(contentpre, "&nbsp;", " ", -1)
	editorflag := sy.GetString("editorflag")
	biaoti := sy.GetString("Biaoti")
	zhaiyao := sy.GetString("Zhaiyao")
	guanjianzi := sy.GetString("Guanjianzi")
	faburen := sy.GetString("Faburen")
	if editorflag == "update" {
		idstr := sy.GetString("Id")
		id, _ := strconv.ParseInt(idstr, 10, 10)
		wenzhang_db := wenzhangdao.Select_wenzhang(int(id))
		wenzhang_db.Wenben = content
		wenzhang_db.Biaoti = biaoti
		wenzhang_db.Zhaiyao = zhaiyao
		wenzhang_db.Guanjianzi = guanjianzi
		wenzhang_db.Faburen = faburen
		wenzhangdao.Update_wenzhang(wenzhang_db)
	}

	sy.Data["json"] = map[string]interface{}{"state": 0, "content": requrl}
	sy.ServeJSON()
	return
}
func (sy *Shou_ye_controller) Get() {
	wenzhang_xinxis := wenzhangdao.Select_shouye_xinxi()
	wenzhang_xinwens := wenzhangdao.Select_shouye_xinwen()
	if len(wenzhang_xinxis) != 6 || len(wenzhang_xinwens) != 5 {
		log.Println("首页信息数据有误，请修改数据库！")
		sy.TplName = "innererror.html"
		return
	}
	for _, xinxi := range wenzhang_xinwens {
		sy.Data[xinxi.Biaoji] = xinxi
	}
	for _, xinxi := range wenzhang_xinxis {
		sy.Data[xinxi.Biaoji] = xinxi
	}
	sy.TplName = "mhsy.html"
}

func (sy *Wenzhanglist_controller) Get() {
	dnamys:= wenzhangdao.Select_dnamy(int64(120))
	sy.Data["Dnamy"] = dnamys
	sy.TplName = "wenzhanglist.html"
	return
}

func (sy *Wenzhang_controller) Get() {
	idstr := sy.GetString(":id")
	id, err := strconv.ParseInt(idstr, 10, 10)
	if err != nil {
		log.Println("参数id错误")
		sy.TplName = "error.html"
		return
	}
	if id == 0 {
		sy.TplName = "error.html"
		return
	}
	wenzhang := wenzhangdao.Select_wenzhang(int(id))
	if wenzhang != nil {
		sy.Data["wenzhang"] = wenzhang
		sy.TplName = "wenzhang.html"
		return
	}
	sy.TplName = "error.html"
	return
}
