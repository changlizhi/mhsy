package yonghudao

import (
	"mhsy/src/inits"
)

func Delete_Yonghu(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_yonghu_by_id(id))
}
