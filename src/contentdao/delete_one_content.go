package contentdao

import (
	"mhsy/src/inits"
)

func Delete_content(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_content_by_id(id))
}
