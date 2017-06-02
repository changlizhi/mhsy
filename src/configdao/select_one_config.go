package configdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_config(id int) *models.Config {
	return read_config_by_id(id)
}

func read_config_by_id(id int) *models.Config {
	config := &models.Config{Id: id}
	inits.Ormer_global.Read(config)
	return config
}
