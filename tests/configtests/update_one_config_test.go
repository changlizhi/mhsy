package test

import (
	"mhsy/models"
	"mhsy/src/configdao"
	"testing"
)

func TestUpdate_config(t *testing.T) {
	config := new(models.Config)
	config.Id = 4
	config.Description = "描述4修改"
	config.Tel = "028-99999999"
	config.Keywords = "关键字4修改"
	config.Title = "标题4修改"
	configdao.Update_config(config)
}
