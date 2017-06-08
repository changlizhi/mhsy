package wenzhangservice

import (
	"mhsy/models"
	"mhsy/src/wenzhangdao"
)

func Huoqu_suoyou_wenzhang() []models.Wenzhang {
	return wenzhangdao.Select_wenzhang_all()
}
func Gengxin_wenzhang(wenzhang *models.Wenzhang) {
	wenzhangdao.Update_wenzhang(wenzhang)
}
