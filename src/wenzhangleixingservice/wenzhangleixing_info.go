package wenzhangleixingservice

import (
	"mhsy/models"
	"mhsy/src/wenzhangleixingdao"
)

func Huoqu_suoyou_leixing() []models.Wenzhang_leixing {
	return wenzhangleixingdao.Select_wenzhang_leixing_all()
}
