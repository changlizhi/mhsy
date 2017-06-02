package configdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_config(config *models.Config) {
	inits.Ormer_global.Update(config)
}
