package test

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"mhsy/src/zitidao"
	"testing"
)

func TestAdd_ziti(t *testing.T) {
	add_one()
}
func TestAdd_ziti_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	ziti := new(models.Ziti)
	ziti.Id = 4
	ziti.Val = 4
	zitidao.Add_ziti(ziti)
}
