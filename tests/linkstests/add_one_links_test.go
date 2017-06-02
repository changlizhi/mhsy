package test

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/linksdao"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_links(t *testing.T) {
	add_one()
}
func TestAdd_links_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	links := new(models.Links)
	links.Id = 6
	links.Title = "Links标题Title6"
	links.Url = "Links链接Url6"
	linksdao.Add_links(links)
}
