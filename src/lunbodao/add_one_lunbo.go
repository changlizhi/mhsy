package lunbodao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_lunbo(lunbo *models.Lunbo) {
	inits.Ormer_global.Insert(lunbo)
}
