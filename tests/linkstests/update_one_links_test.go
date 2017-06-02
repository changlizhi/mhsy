package test

import (
	"mhsy/models"
	"mhsy/src/linksdao"
	"testing"
)

func TestUpdate_links(t *testing.T) {
	links := new(models.Links)
	links.Id = 6
	links.Title = "Links标题Title6"
	links.Url = "Links链接修改Url6"
	linksdao.Update_links(links)
}
