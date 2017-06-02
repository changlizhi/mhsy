package newsdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_news(id int) *models.News {
	return read_news_by_id(id)
}

func read_news_by_id(id int) *models.News {
	news := &models.News{Id: id}
	inits.Ormer_global.Read(news)
	return news
}
