package controllers

import (
	"github.com/astaxie/beego"
	"log"
	"mhsy/models"
	"mhsy/src/adminservice"
	"mhsy/src/inits"
	"mhsy/src/newsservice"
	"mhsy/src/wenzhangdao"
	"mhsy/src/wenzhangleixingservice"
	"strconv"
	"strings"
)

type Richeditor_controller struct {
	beego.Controller
}
type Imgupload_controller struct {
	beego.Controller
}
type Toeditor_controller struct {
	beego.Controller
}
type Base_controller struct {
	beego.Controller
}
type Shou_ye_controller struct {
	beego.Controller
}
type Strategy_controller struct {
	beego.Controller
}
type Event_controller struct {
	beego.Controller
}
type Dnamy_controller struct {
	beego.Controller
}
type Denglu_controller struct {
	beego.Controller
}
type Static_controller struct {
	beego.Controller
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
		if len(splitstr) != 3 {
			log.Println("模块的restful请求路径错误")
			c.TplName = "error.html"
			return
		}
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
				c.Data["requrl"] = removetype
				c.Data["editorflag"] = "update"
				c.TplName = "toeditor.html"
				return
			}
		}
	}
	log.Println("需要修改的模块在数据库没有提供支持")
	c.TplName = "error.html"
}
func (c *Base_controller) Get() {
	c.TplName = "base.html"
}
func (sy *Denglu_controller) Get() {
	sy.TplName = "denglu.html"
}
func (sy *Denglu_controller) Post() {
	sy.TplName = "seltpl.html"
}
func (sy *Richeditor_controller) Post() {
	requrl := sy.GetString("requrl")
	content := sy.GetString("content")
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
	sy.TplName = "mhsy.html"
}
func (sy *Shou_ye_controller) Post() {
	datas := adminservice.Find_admin_pager(1).Shu_ju
	admins, ok := datas.([]models.Admin)
	if ok {
		sy.Data["Admins"] = admins
	}
	sy.TplName = "post.tpl"
}

func (sy *Strategy_controller) Get() {

	id := sy.Ctx.Input.Param(":id")
	idint, _ := strconv.ParseInt(id, 10, 10)
	newsinfo := newsservice.Get_news_info(int(idint))
	sy.Data["News"] = newsinfo
	sy.TplName = "strategy.html"
}
func (sy *Dnamy_controller) Get() {
	idstr := sy.GetString(":id")
	id, err := strconv.ParseInt(idstr, 10, 10)
	if err != nil {
		log.Println("参数id错误")
		sy.TplName = "error.html"
		return
	}
	if id == 0 {
		sy.TplName = "dnamylist.html"
		return
	}
	wenzhang := wenzhangdao.Select_wenzhang(int(id))
	sy.Data["wenzhang"] = wenzhang
	sy.TplName = "dnamy.html"

}
func (sy *Event_controller) Get() {

	sy.TplName = "event.html"
}
