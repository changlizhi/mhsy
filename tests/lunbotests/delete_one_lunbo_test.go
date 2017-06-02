package test

import (
	"mhsy/src/lunbodao"
	"testing"
)

func TestDelete_lunbo(t *testing.T) {
	id := 58
	lunbodao.Delete_lunbo(id)
}
