package wenzhangleixingdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_wenzhang_leixing_all() ([]models.Wenzhang_leixing) {
	tab := inits.All_cols.Tb_Wenzhang_leixing

	qs := inits.Ormer_global.QueryTable(tab)
	var wenzhang_leixing []models.Wenzhang_leixing

	qs.All(&wenzhang_leixing)

	return wenzhang_leixing
}
