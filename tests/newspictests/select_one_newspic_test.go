package test

import (
	"log"
	"mhsy/src/newspicdao"
	"testing"
)

func TestSelect_newspic(t *testing.T) {
	newspic := newspicdao.Select_newspic(43)
	log.Println("Content为：====", newspic.Content)
}
