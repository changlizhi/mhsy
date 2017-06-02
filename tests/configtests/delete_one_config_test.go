package test

import (
	"mhsy/src/configdao"
	"testing"
)

func TestDelete_config(t *testing.T) {
	id := 5
	configdao.Delete_config(id)
}
