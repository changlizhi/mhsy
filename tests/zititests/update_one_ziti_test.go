package test

import (
	"mhsy/models"
	"mhsy/src/zitidao"
	"testing"
)

func TestUpdate_ziti(t *testing.T) {
	ziti := new(models.Ziti)
	ziti.Id = 2
	ziti.Val = 22
	zitidao.Update_ziti(ziti)
}
