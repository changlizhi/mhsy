package contentdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_content(content *models.Content) {
	inits.Ormer_global.Update(content)
}
