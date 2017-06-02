package test

import (
	"log"
	"mhsy/src/linksdao"
	"testing"
)

func TestSelect_links(t *testing.T) {
	links := linksdao.Select_links(6)
	log.Println("链接名为：====", links.Title)
}
