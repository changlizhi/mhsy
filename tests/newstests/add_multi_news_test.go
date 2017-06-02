package test

import (
	"mhsy/models"
	"mhsy/src/newsdao"
	"testing"
)

func TestAdd_many_news(t *testing.T) {
	var newss = []models.News{
		models.News{
			Id:        86,
			Title:     "news标题86",
			Intro:     "news介绍86",
			Content:   "news文本86",
			Top_id:    8,
			Second_id: 86,
			Addtime:   "1494728875086",
			Pdf:       "src/newspdf87.pdf",
		},
		models.News{
			Id:        87,
			Title:     "news标题87",
			Intro:     "news介绍87",
			Content:   "news文本87",
			Top_id:    8,
			Second_id: 87,
			Addtime:   "1494728875087",
			Pdf:       "src/newspdf87.pdf",
		},
	}
	newsdao.Add_many_news(newss)
}
