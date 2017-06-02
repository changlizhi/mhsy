package admindao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_admin(admin *models.Admin) {
	inits.Ormer_global.Update(admin)
}
