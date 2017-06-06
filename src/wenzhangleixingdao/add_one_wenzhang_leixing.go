package wenzhangleixingdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_wenzhang_leixing(wenzhang_leixing *models.Wenzhang_leixing) {
	inits.Ormer_global.Insert(wenzhang_leixing)
}
