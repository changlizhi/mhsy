package test

import (
	"log"
	"mhsy/src/lunbodao"
	"testing"
)

func TestSelect_lunbo(t *testing.T) {
	lunbo := lunbodao.Select_lunbo(58)
	log.Println("Pic为：====", lunbo.Pic)
}
