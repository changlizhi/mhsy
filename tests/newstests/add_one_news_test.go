package test

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/newsdao"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_news(t *testing.T) {
	add_one()
}
func TestAdd_news_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	news := new(models.News)
	news.Id = 88
	news.Title = "news标题88"
	news.Intro = "news介绍88"
	news.Content = "news文本88"
	news.Top_id = 8
	news.Second_id = 88
	news.Addtime = "1494728875088"
	news.Pdf = "src/newspdf88.pdf"
	newsdao.Add_news(news)
}
