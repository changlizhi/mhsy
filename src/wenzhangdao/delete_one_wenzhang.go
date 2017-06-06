package wenzhangleixingdao

import (
	"mhsy/src/inits"
)

func Delete_Wenzhang(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_wenzhang_by_id(id))
}
