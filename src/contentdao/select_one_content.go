package contentdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_content(id int) *models.Content {
	return read_content_by_id(id)
}

func read_content_by_id(id int) *models.Content {
	content := &models.Content{Id: id}
	inits.Ormer_global.Read(content)
	return content
}
