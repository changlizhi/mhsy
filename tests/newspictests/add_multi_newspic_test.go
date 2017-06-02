package test

import (
	"mhsy/models"
	"mhsy/src/newspicdao"
	"testing"
)

func TestAdd_many_newspic(t *testing.T) {
	var newspics = []models.News_pic{
		models.News_pic{
			Id:        41,
			Title:     "newspic标题41",
			Intro:     "newspic介绍41",
			Content:   "newspic文本41",
			Top_id:    1,
			Second_id: 11,
			Addtime:   "1494728875041",
			Pic:       "src/图片41.jpg",
		},
		models.News_pic{
			Id:        42,
			Title:     "newspic标题42",
			Intro:     "newspic介绍42",
			Content:   "newspic文本42",
			Top_id:    2,
			Second_id: 22,
			Addtime:   "1494728875042",
			Pic:       "src/图片42.jpg",
		},
	}
	newspicdao.Add_many_newspic(newspics)
}
