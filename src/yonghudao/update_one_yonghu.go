package yonghudao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Update_yonghu(yonghu *models.Yonghu) {
	inits.Ormer_global.Update(yonghu)
}
