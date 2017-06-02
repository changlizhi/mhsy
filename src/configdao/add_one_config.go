package configdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_config(config *models.Config) {
	inits.Ormer_global.Insert(config)
}
