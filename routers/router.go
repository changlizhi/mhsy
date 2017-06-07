package routers

import (
	"github.com/astaxie/beego"
	"mhsy/controllers"
)

func init() {
	beego.Router("/", &controllers.Shou_ye_controller{})
	beego.Router("/mhsy", &controllers.Shou_ye_controller{})
	beego.Router("/toeditor/*", &controllers.Toeditor_controller{})

	beego.Router("/denglu", &controllers.Denglu_controller{})
	beego.Router("/uploadimg", &controllers.Imgupload_controller{})
	beego.Router("/richeditor", &controllers.Richeditor_controller{})
	beego.Router("/strategy/:id", &controllers.Strategy_controller{})
	beego.Router("/base", &controllers.Base_controller{})
	beego.Router("/dnamy/:id", &controllers.Dnamy_controller{})
	beego.Router("/event/:id", &controllers.Event_controller{})
	beego.Router("/api/GetUserTag", &controllers.Shou_ye_controller{})
}
