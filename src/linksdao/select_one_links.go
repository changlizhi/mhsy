package linksdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_links(id int) *models.Links {
	return read_links_by_id(id)
}

func read_links_by_id(id int) *models.Links {
	links := &models.Links{Id: id}
	inits.Ormer_global.Read(links)
	return links
}
