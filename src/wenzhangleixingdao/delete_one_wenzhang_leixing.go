package wenzhangleixingdao

import (
	"mhsy/src/inits"
)

func Delete_Wenzhang_leixing(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_wenzhang_leixing_by_id(id))
}
