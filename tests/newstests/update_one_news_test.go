package test

import (
	"mhsy/models"
	"mhsy/src/newsdao"
	"testing"
)

func TestUpdate_news(t *testing.T) {
	news := new(models.News)
	news.Id = 88
	news.Title = "news标题修改88"
	news.Intro = "news介绍修改88"
	news.Content = "news文本修改88"
	news.Top_id = 8
	news.Second_id = 88
	news.Addtime = "1494728875088"
	news.Pdf = "src/newspdf修改88.pdf"
	newsdao.Update_news(news)
}
