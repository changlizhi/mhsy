package admindao

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/modelsdef"
)

func Select_admin_by_user(user string) []models.Admin {
	tab := inits.All_cols.Tb_Admin
	filter := modelsdef.Admin_user.Name

	qs := inits.Ormer_global.QueryTable(tab)
	var admins []models.Admin

	qs.Filter(filter, user).All(&admins)
	return admins
}

func Select_admin_pager(curr_page int64, page_size int64) ([]models.Admin, int64) {
	tab := inits.All_cols.Tb_Admin

	qs := inits.Ormer_global.QueryTable(tab)
	var admins []models.Admin

	qs.Offset((curr_page - 1) * page_size).Limit(page_size).All(&admins)
	cnt, _ := qs.Count()
	return admins, cnt
}
