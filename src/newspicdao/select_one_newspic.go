package newspicdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_newspic(id int) *models.News_pic {
	return read_newspic_by_id(id)
}

func read_newspic_by_id(id int) *models.News_pic {
	newspic := &models.News_pic{Id: id}
	inits.Ormer_global.Read(newspic)
	return newspic
}
