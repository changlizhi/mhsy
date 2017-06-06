package wenzhangdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_wenzhang(wenzhang *models.Wenzhang) {
	inits.Ormer_global.Insert(wenzhang)
}
