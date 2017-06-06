package test

import (
	"mhsy/models"
	"mhsy/src/wenzhangleixingdao"
	"testing"
)

func TestAdd_many__wenzhang_leixing(t *testing.T) {
	var wenzhang_leixings = []models.Wenzhang_leixing{
		models.Wenzhang_leixing{
			Id:    1,
			Mingcheng:"类型名称1",
			Fenlei:"分类1",
			Fufenlei:"父分类1",
			Paixu:1,
		},
		models.Wenzhang_leixing{
			Id:    2,
			Mingcheng:"类型名称2",
			Fenlei:"分类2",
			Fufenlei:"父分类2",
			Paixu:2,
		},
	}
	wenzhangleixingdao.Add_many_wenzhang_leixing(wenzhang_leixings)
}
