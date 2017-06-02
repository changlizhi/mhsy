package test

import (
	"mhsy/models"
	"mhsy/src/admindao"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_admin(t *testing.T) {
	add_one()
}
func TestAdd_admin_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	admin := new(models.Admin)
	admin.Id = 9
	admin.Pwd = "pwd9"
	admin.User = "user9"
	admindao.Add_admin(admin)
}
