package newspicdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_newspic(newspic *models.News_pic) {
	inits.Ormer_global.Insert(newspic)
}
