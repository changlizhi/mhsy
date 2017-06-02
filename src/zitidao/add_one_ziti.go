package zitidao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_ziti(ziti *models.Ziti) {
	inits.Ormer_global.Insert(ziti)
}
