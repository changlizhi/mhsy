package test

import (
	"mhsy/src/wenzhangleixingdao"
	"testing"
)

func TestDelete_wenzhang_leixing(t *testing.T) {
	id := 3
	wenzhangleixingdao.Delete_Wenzhang_leixing(id)
}
