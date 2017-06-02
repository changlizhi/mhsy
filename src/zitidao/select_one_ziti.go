package zitidao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_ziti(id int) *models.Ziti {
	return read_ziti_by_id(id)
}

func read_ziti_by_id(id int) *models.Ziti {
	ziti := &models.Ziti{Id: id}
	inits.Ormer_global.Read(ziti)
	return ziti
}
