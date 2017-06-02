package test

import (
	"mhsy/models"
	"mhsy/src/zitidao"
	"testing"
)

func TestAdd_many_ziti(t *testing.T) {
	var zitis = []models.Ziti{
		models.Ziti{
			Id:  2,
			Val: 2,
		},
		models.Ziti{
			Id:  3,
			Val: 3,
		},
	}
	zitidao.Add_many_ziti(zitis)
}
