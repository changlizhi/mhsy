package test

import (
	"log"
	"mhsy/src/zitidao"
	"testing"
)

func TestSelect_ziti(t *testing.T) {
	ziti := zitidao.Select_ziti(3)
	log.Println("Val：====", ziti.Val)
}
