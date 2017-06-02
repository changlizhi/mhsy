package test

import (
	"log"
	"mhsy/src/admindao"
	"testing"
)

func TestSelect_admin_by_user(t *testing.T) {
	admin := admindao.Select_admin_by_user("clz")
	log.Println(admin)
}

func TestSelect_admin_pager(t *testing.T) {
	page_no := int64(4)
	curr_page := int64(0)
	admin, cnt := admindao.Select_admin_pager(curr_page, page_no)
	max_page := (cnt + page_no - 1) / page_no

	log.Println(admin, cnt, max_page)
}
