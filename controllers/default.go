package controllers

import (
	"github.com/astaxie/beego"
	"log"
	"mhsy/models"
	"mhsy/src/adminservice"
	"mhsy/src/newsservice"
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
func (c *Toeditor_controller) Get() {
	requrl := c.Ctx.Request.URL.Path
	c.Data["requrl"] = strings.Replace(requrl, "/toeditor", "", 1)
	c.TplName = "toeditor.html"
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
	content := sy.GetString("content")
	log.Println(content)
	requrl := sy.GetString("requrl")
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

	sy.TplName = "dnamy.html"
}
func (sy *Event_controller) Get() {

	sy.TplName = "event.html"
}
