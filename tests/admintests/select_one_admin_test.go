package test

import (
	"log"
	"mhsy/src/admindao"
	"testing"
)

func TestSelect_admin(t *testing.T) {
	admin := admindao.Select_admin(9)
	log.Println("admin9：====", admin.User)
}
