package test

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/utils"
	"mhsy/src/wenzhangleixingdao"
	"testing"
)

func TestAdd_wenzhang_leixing(t *testing.T) {
	add_one()
}
func TestAdd_wenzhang_leixing_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	wenzhang_leixing := new(models.Wenzhang_leixing)
	wenzhang_leixing.Id = 3
	wenzhang_leixing.Mingcheng = "名称3"
	wenzhang_leixing.Fenlei = "父类3"
	wenzhang_leixing.Fufenlei = "父类3"
	wenzhang_leixing.Paixu = 1
	wenzhangleixingdao.Add_wenzhang_leixing(wenzhang_leixing)
}
