package yonghudao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_yonghu_all() []models.Yonghu {
	tab := inits.All_cols.Tb_Yonghu

	qs := inits.Ormer_global.QueryTable(tab)
	var yonghu []models.Yonghu

	qs.All(&yonghu)

	return yonghu
}
func Select_yonghu_mingcheng(mingcheng string) []models.Yonghu {
	tab := inits.All_cols.Tb_Yonghu

	qs := inits.Ormer_global.QueryTable(tab).Filter("Mingcheng", mingcheng).RelatedSel()
	var yonghu []models.Yonghu

	qs.All(&yonghu)
	return yonghu
}
