package categorydao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_category(id int) *models.Category {
	return read_category_by_id(id)
}

func read_category_by_id(id int) *models.Category {
	category := &models.Category{Id: id}
	inits.Ormer_global.Read(category)
	return category
}
