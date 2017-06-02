package newsdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_news(news *models.News) {
	inits.Ormer_global.Update(news)
}
