package newspicdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_newspic(newspic *models.News_pic) {
	inits.Ormer_global.Update(newspic)
}
