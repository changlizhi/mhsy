package contentdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_content(content *models.Content) {
	inits.Ormer_global.Insert(content)
}
