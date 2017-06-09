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
	beego.Router("/base", &controllers.Base_controller{})
	beego.Router("/dnamy/:id", &controllers.Wenzhang_controller{})
	beego.Router("/event/:id", &controllers.Wenzhang_controller{})
}
