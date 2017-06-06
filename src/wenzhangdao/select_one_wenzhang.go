package wenzhangleixingdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_wenzhang(id int) *models.Wenzhang {
	return read_wenzhang_by_id(id)
}

func read_wenzhang_by_id(id int) *models.Wenzhang {
	wenzhang := &models.Wenzhang{Id: id}
	inits.Ormer_global.Read(wenzhang)
	return wenzhang
}
