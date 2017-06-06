package test

import (
	"mhsy/models"
	"mhsy/src/wenzhangleixingdao"
	"testing"
)

func TestUpdate_wenzhangleixing(t *testing.T) {
	wenzhangleixing := new(models.Wenzhang_leixing)
	wenzhangleixing.Id = 3
	wenzhangleixing.Mingcheng = "名称修改3"
	wenzhangleixingdao.Update_wenzhang_leixing(wenzhangleixing)
}
