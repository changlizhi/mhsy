package test

import (
	"mhsy/models"
	"mhsy/src/categorydao"
	"testing"
)

func TestAdd_many_category(t *testing.T) {
	var categorys = []models.Category{
		models.Category{
			Id:        55,
			Title:     "标题55",
			Parent_id: 0,
		},
		models.Category{
			Id:        56,
			Title:     "标题56",
			Parent_id: 0,
		},
	}
	categorydao.Add_many_category(categorys)
}
