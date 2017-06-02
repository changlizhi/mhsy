package test

import (
	"mhsy/models"
	"mhsy/src/linksdao"
	"testing"
)

func TestAdd_many_links(t *testing.T) {
	var linkss = []models.Links{
		models.Links{
			Id:    7,
			Title: "Links标题title7",
			Url:   "Links链接url7",
		},
		models.Links{
			Id:    8,
			Title: "Links标题title8",
			Url:   "Links链接url8",
		},
	}
	linksdao.Add_many_links(linkss)
}
