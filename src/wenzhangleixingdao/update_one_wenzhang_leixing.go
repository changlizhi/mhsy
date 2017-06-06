package wenzhangleixingdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_wenzhang_leixing(wenzhang_leixing *models.Wenzhang_leixing) {
	inits.Ormer_global.Update(wenzhang_leixing)
}
