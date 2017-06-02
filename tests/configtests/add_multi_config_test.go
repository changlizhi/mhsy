package test

import (
	"mhsy/models"
	"mhsy/src/configdao"
	"testing"
)

func TestAdd_many_config(t *testing.T) {
	var configs = []models.Config{
		models.Config{
			Id:          2,
			Title:       "标题2",
			Keywords:    "关键字2",
			Description: "描述2",
			Tel:         "028-33334444",
		},
		models.Config{
			Id:          3,
			Title:       "标题3",
			Keywords:    "关键字3",
			Description: "描述3",
			Tel:         "028-44445555",
		},
	}
	configdao.Add_many_config(configs)
}
