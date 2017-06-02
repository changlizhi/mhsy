package test

import (
	"log"
	"mhsy/src/newsdao"
	"testing"
)

func TestSelect_news(t *testing.T) {
	news := newsdao.Select_news(88)
	log.Println("Content：====", news.Content)
}
