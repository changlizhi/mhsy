package newsdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_news(news *models.News) {
	inits.Ormer_global.Insert(news)
}
