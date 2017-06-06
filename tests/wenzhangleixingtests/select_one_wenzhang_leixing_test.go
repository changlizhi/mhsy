package test

import (
	"log"
	"mhsy/src/wenzhangleixingdao"
	"testing"
)

func TestSelect_wenzhangleixing(t *testing.T) {
	wenzhangleixing := wenzhangleixingdao.Select_wenzhang_leixing(3)
	log.Println("链接名为：====", wenzhangleixing.Mingcheng)
}
