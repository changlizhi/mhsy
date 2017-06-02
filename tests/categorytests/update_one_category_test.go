package test

import (
	"mhsy/models"
	"mhsy/src/categorydao"
	"testing"
)

func TestUpdate_category(t *testing.T) {
	category := new(models.Category)
	category.Id = 57
	category.Title = "标题修改57"
	category.Parent_id = 0
	categorydao.Update_category(category)
}
