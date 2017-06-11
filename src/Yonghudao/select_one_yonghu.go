package yonghudao

import (
	"log"
	"mhsy/models"
	"mhsy/src/inits"
)

func Select_yonghu(id int) *models.Yonghu {

	return read_yonghu_by_id(id)
}

func read_yonghu_by_id(id int) *models.Yonghu {
	yonghu := &models.Yonghu{Id: id}
	log.Println("yonghu------byid:", yonghu)
	inits.Ormer_global.Read(yonghu)
	return yonghu
}
