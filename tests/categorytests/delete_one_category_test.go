package test

import (
	"mhsy/src/categorydao"
	"testing"
)

func TestDelete_category(t *testing.T) {
	id := 57
	categorydao.Delete_category(id)
}
