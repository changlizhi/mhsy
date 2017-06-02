package categorydao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_category(category *models.Category) {
	inits.Ormer_global.Update(category)
}
