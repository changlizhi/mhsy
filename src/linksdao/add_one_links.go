package linksdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_links(links *models.Links) {
	inits.Ormer_global.Insert(links)
}
