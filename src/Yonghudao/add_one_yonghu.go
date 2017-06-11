package yonghudao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_yonghu(yonghu *models.Yonghu) {
	inits.Ormer_global.Insert(yonghu)
}
