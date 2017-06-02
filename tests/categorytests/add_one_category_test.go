package test

import (
	"mhsy/models"
	"mhsy/src/categorydao"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_category(t *testing.T) {
	add_one()
}
func TestAdd_category_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	category := new(models.Category)
	category.Id = 57
	category.Title = "标题57"
	category.Parent_id = 0
	categorydao.Add_category(category)
}
