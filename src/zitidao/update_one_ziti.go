package zitidao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_ziti(ziti *models.Ziti) {
	inits.Ormer_global.Update(ziti)
}
