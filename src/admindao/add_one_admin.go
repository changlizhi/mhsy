package admindao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_admin(admin *models.Admin) {
	inits.Ormer_global.Insert(admin)
}
