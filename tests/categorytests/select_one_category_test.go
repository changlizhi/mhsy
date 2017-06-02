package test

import (
	"log"
	"mhsy/src/categorydao"
	"testing"
)

func TestSelect_category(t *testing.T) {
	category := categorydao.Select_category(57)
	log.Println("title57为：====", category.Title)
}
