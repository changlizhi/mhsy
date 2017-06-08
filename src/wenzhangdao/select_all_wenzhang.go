package wenzhangdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_wenzhang_all() []models.Wenzhang {
	tab := inits.All_cols.Tb_Wenzhang

	qs := inits.Ormer_global.QueryTable(tab)
	var wenzhang []models.Wenzhang

	qs.All(&wenzhang)

	return wenzhang
}
