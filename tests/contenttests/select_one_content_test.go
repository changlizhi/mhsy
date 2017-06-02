package test

import (
	"log"
	"mhsy/src/contentdao"
	"testing"
)

func TestSelect_content(t *testing.T) {
	content := contentdao.Select_content(11)
	log.Println("内容：====", content.Content)
}
