package test

import (
	"mhsy/models"
	"mhsy/src/contentdao"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_content(t *testing.T) {
	add_one()
}
func TestAdd_content_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	content := new(models.Content)
	content.Id = 11
	content.Content = "内容11"
	content.Title = "标题11"
	contentdao.Add_content(content)
}
