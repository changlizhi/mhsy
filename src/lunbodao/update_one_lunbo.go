package lunbodao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_lunbo(lunbo *models.Lunbo) {
	inits.Ormer_global.Update(lunbo)
}
