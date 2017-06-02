package adminservice

import (
	"mhsy/models"
	"mhsy/src/admindao"
	"mhsy/src/inits"
	"strconv"
)

func Find_admin_pager(curr_page int64) models.Pager {
	page_size, _ := strconv.ParseInt(inits.Bgo_json.Pager_size, 10, 0)
	admins, cnt := admindao.Select_admin_pager(curr_page, page_size)
	max_page := (cnt + curr_page - 1) / curr_page
	var pager models.Pager
	pager.Shou_ye = false //榛樿false
	pager.Wei_ye = false  //榛樿false
	pager.Dang_qian_ye = curr_page
	pager.Mei_ye_shu = page_size
	if max_page == curr_page {
		pager.Wei_ye = true
	}
	if curr_page == 0 {
		pager.Shou_ye = true
	}
	pager.Zong_ye_shu = max_page
	pager.Zont_tiao_shu = cnt
	pager.Shu_ju = admins
	return pager
}
