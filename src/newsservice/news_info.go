package newsservice

import (
	"mhsy/models"
	"mhsy/src/newsdao"
)

func Get_news_info(id int) *models.News {
	return newsdao.Select_news(id)
}
