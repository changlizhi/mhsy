package linksdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_links(links *models.Links) {
	inits.Ormer_global.Update(links)
}
