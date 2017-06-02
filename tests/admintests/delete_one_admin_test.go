package test

import (
	"mhsy/src/admindao"
	"testing"
)

func TestDelete_admin(t *testing.T) {
	id := 9
	admindao.Delete_admin(id)
}
