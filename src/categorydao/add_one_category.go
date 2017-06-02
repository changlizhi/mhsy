package categorydao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_category(category *models.Category) {
	inits.Ormer_global.Insert(category)
}
