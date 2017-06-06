package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"mhsy/src/wenzhangdao"
	"mhsy/src/wenzhangleixingdao"
	"os"
	"path/filepath"
	"strings"
)

func String_split() {
	vals := "Id,int,11,主键,Admin,Category,Config,Content,Links,Lunbo,News,News_pic,Ziti"
	val_arr := strings.Split(vals, ",")
	after_three := val_arr[4:]
	for index, val := range after_three {
		log.Println(index, val)
	}
}

func Use_path() {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		panic(err)
	}
	log.Println(dir)
}

func Get_json_path() {
	pathjson := "conf/beego.json"
	ret := map[string]string{}
	bytes, err := ioutil.ReadFile(pathjson)
	if err != nil {
		log.Println("读取json失败！")
		panic(err)
	}
	if err := json.Unmarshal(bytes, &ret); err != nil {
		log.Println("解析json失败！")
		panic(err)
	}
	log.Println(ret)
}

func TestAdd_multi() {
	var wenzhang_leixings = []models.Wenzhang_leixing{
		models.Wenzhang_leixing{
			Id:        1,
			Mingcheng: "类型名称1",
			Fenlei:    "分类1",
			Fufenlei:  "父分类1",
			Paixu:     1,
		},
		models.Wenzhang_leixing{
			Id:        2,
			Mingcheng: "类型名称2",
			Fenlei:    "分类2",
			Fufenlei:  "父分类2",
			Paixu:     2,
		},
	}
	wenzhangleixingdao.Add_many_wenzhang_leixing(wenzhang_leixings)
}
func TestAdd_wenzhang_leixing() {
	add_one()
}
func TestAdd_wenzhang_leixing_en() {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	wenzhang_leixing := new(models.Wenzhang_leixing)
	wenzhang_leixing.Id = 3
	wenzhang_leixing.Mingcheng = "名称3"
	wenzhang_leixing.Fenlei = "父类3"
	wenzhang_leixing.Fufenlei = "父类3"
	wenzhang_leixing.Paixu = 1
	wenzhangleixingdao.Add_wenzhang_leixing(wenzhang_leixing)
}
func TestSelect_links() {
	wenzhangleixing := wenzhangleixingdao.Select_wenzhang_leixing(3)
	log.Println("链接名为：====", wenzhangleixing.Mingcheng)
}

func TestUpdate_wenzhangleixing() {
	wenzhangleixing := new(models.Wenzhang_leixing)
	wenzhangleixing.Id = 3
	wenzhangleixing.Mingcheng = "名称修改3"
	wenzhangleixingdao.Update_wenzhang_leixing(wenzhangleixing)
}

func TestAdd_one_wenzhang() {
	wenzhang := new(models.Wenzhang)
	wenzhang.Id = 1
	wenzhang.Wenben = "文本内容1"
	wenzhang.Biaoti = "标题1"
	wenzhang.Guanjianzi = "关键字1"
	wenzhang.Laiyuan = "转发1"
	wenzhang.Faburen = "管理员发布1"
	wenzhang.Zhaiyao = "摘要1"
	wenzhang.Zhiding = "1"
	wenzhang.Shanchu = "0"
	wenzhang.Dianjiliang = 10
	wenzhang.Shijian = "2017-06-06"
	wenzhang.Tupian = "/static/logo.png"
	wenzhang.Quanxian = "ROLE_ADMIN"
	wenzhang.Yuyan = "zh_CN"
	wenzhang.Fenlei = "新闻"
	wenzhang.Moban = "模板1"
	wenzhangdao.Add_wenzhang(wenzhang)
}

func main() {
	TestAdd_one_wenzhang()
}
