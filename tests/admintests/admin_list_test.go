package test

import (
	"log"
	"mhsy/src/adminservice"
	"testing"
)

func TestFind_admin_pager(t *testing.T) {
	pager := adminservice.Find_admin_pager(2)
	log.Println(pager.Shu_ju)
}
