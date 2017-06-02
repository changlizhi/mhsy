package test

import (
	"mhsy/models"
	"mhsy/src/admindao"
	"testing"
)

func TestUpdate_admin(t *testing.T) {
	admin := new(models.Admin)
	admin.Id = 9
	admin.Pwd = "pwd9change"
	admin.User = "user9修改"
	admindao.Update_admin(admin)
}
