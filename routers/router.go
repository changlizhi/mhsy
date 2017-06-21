package routers

import (
	"github.com/astaxie/beego"
	"mhsy/controllers"
)

func init() {
	beego.ErrorController(&controllers.Error_controller{})
	beego.Router("/", &controllers.Shou_ye_controller{})
	beego.Router("/mhsy", &controllers.Shou_ye_controller{})
	beego.Router("/seltpl", &controllers.Seltpl_controller{})
	beego.Router("/dnamylist", &controllers.Dnamylist_controller{})
	beego.Router("/toeditor/*", &controllers.Toeditor_controller{})

	beego.Router("/denglu", &controllers.Denglu_controller{})
	beego.Router("/uploadimg", &controllers.Imgupload_controller{})
	beego.Router("/richeditor", &controllers.Richeditor_controller{})
	beego.Router("/base", &controllers.Base_controller{})
	beego.Router("/wenzhanglist", &controllers.Wenzhanglist_controller{})
	beego.Router("/doc/:id", &controllers.Wenzhang_controller{})
}
