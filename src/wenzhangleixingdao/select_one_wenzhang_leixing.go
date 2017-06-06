package wenzhangleixingdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_wenzhang_leixing(id int) *models.Wenzhang_leixing {
	return read_wenzhang_leixing_by_id(id)
}

func read_wenzhang_leixing_by_id(id int) *models.Wenzhang_leixing {
	wenzhang_leixing := &models.Wenzhang_leixing{Id: id}
	inits.Ormer_global.Read(wenzhang_leixing)
	return wenzhang_leixing
}
