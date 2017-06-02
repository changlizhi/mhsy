package test

import (
	"mhsy/models"
	"mhsy/src/admindao"
	"testing"
)

func TestAdd_many_admin(t *testing.T) {
	var admins = []models.Admin{
		models.Admin{
			Id:   7,
			User: "user7",
			Pwd:  "pwd7",
		},
		models.Admin{
			Id:   8,
			User: "user8",
			Pwd:  "pwd8",
		},
	}
	admindao.Add_many_admin(admins)
}
