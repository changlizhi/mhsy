package test

import (
	"mhsy/models"
	"mhsy/src/configdao"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_config(t *testing.T) {
	add_one()
}
func TestAdd_config_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	config := new(models.Config)
	config.Id = 4
	config.Title = "标题4"
	config.Description = "描述4"
	config.Keywords = "关键字4"
	config.Tel = "028-55556666"
	configdao.Add_config(config)
}
