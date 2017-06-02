package test

import (
	"log"
	"mhsy/src/configdao"
	"testing"
)

func TestSelect_config(t *testing.T) {
	config := configdao.Select_config(4)
	log.Println("描述：====", config.Description)
}
