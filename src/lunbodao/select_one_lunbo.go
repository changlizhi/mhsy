package lunbodao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_lunbo(id int) *models.Lunbo {
	return read_lunbo_by_id(id)
}

func read_lunbo_by_id(id int) *models.Lunbo {
	lunbo := &models.Lunbo{Id: id}
	inits.Ormer_global.Read(lunbo)
	return lunbo
}
