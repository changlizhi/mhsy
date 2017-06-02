package test

import (
	"mhsy/models"
	"mhsy/src/contentdao"
	"testing"
)

func TestUpdate_content(t *testing.T) {
	content := new(models.Content)
	content.Id = 11
	content.Content = "内容11修改"
	content.Title = "标题11修改"
	contentdao.Update_content(content)
}
