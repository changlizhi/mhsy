package wenzhangdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_wenzhang(wenzhang *models.Wenzhang) {
	inits.Ormer_global.Update(wenzhang)
}
