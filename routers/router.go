package routers

import (
	"github.com/astaxie/beego"
	"mhsy/controllers"
)

func init() {
	beego.Router("/", &controllers.Shou_ye_controller{})
	beego.Router("/mhsy", &controllers.Shou_ye_controller{})

	beego.Router("/denglu", &controllers.Denglu_controller{})
	beego.Router("/ckupload", &controllers.Ckeditor_controller{})
	beego.Router("/strategy/:id", &controllers.Strategy_controller{})
	beego.Router("/base", &controllers.Base_controller{})
	beego.Router("/dnamy", &controllers.Dnamy_controller{})
	beego.Router("/event", &controllers.Event_controller{})
	beego.Router("/api/GetUserTag", &controllers.Shou_ye_controller{})
}