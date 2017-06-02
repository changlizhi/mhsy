package admindao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_admin(id int) *models.Admin {
	return read_admin_by_id(id)
}

func read_admin_by_id(id int) *models.Admin {
	admin := &models.Admin{Id: id}
	inits.Ormer_global.Read(admin)
	return admin
}
