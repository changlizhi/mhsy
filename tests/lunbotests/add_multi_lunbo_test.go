package test

import (
	"mhsy/models"
	"mhsy/src/lunbodao"
	"testing"
)

func TestAdd_many_lunbo(t *testing.T) {
	var lunbos = []models.Lunbo{
		models.Lunbo{
			Id:        56,
			Title:     "Lunbo标题56",
			Pic:       "src/Lunbo图片56.png",
			Url:       "#",
			Addtime:   "1494728875041",
			Daohangid: 1,
		},
		models.Lunbo{
			Id:        57,
			Title:     "Lunbo标题57",
			Pic:       "src/Lunbo标题57.png",
			Url:       "#",
			Addtime:   "1494728875046",
			Daohangid: 1,
		},
	}
	lunbodao.Add_many_lunbo(lunbos)
}
