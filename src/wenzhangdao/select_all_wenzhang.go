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
func Select_shouye_xinwen() []models.Wenzhang {
	return select_by_fenlei_moban("SHOUYE_XINWEN", "IN")
}
func Select_shouye_xinxi() []models.Wenzhang {
	return select_by_fenlei_moban("SHOUYE_XINXI", "IN")
}
func Select_shouye_chanpin() []models.Wenzhang {
	return select_by_fenlei_moban("CHANPIN_LIST", "IN")
}
func Select_dnamy(limit int64) []models.Wenzhang{
	return select_by_fenlei_yuyan("DNAMY","CN",limit)
}
func select_by_fenlei_moban(fenlei string, moban string) []models.Wenzhang {
	tab := inits.All_cols.Tb_Wenzhang
	qs := inits.Ormer_global.QueryTable(tab).Filter("Fenlei", fenlei).Filter("Moban", moban)
	ret := []models.Wenzhang{}
	qs.All(&ret)
	return ret
}
func select_by_fenlei_yuyan(fenlei string,yuyan string,limit int64)[]models.Wenzhang{
	tab := inits.All_cols.Tb_Wenzhang
	qs := inits.Ormer_global.QueryTable(tab).Filter("Fenlei",fenlei).Filter("Yuyan",yuyan).Limit(limit)
	ret := []models.Wenzhang{}
	qs.All(&ret)
	return ret
}
