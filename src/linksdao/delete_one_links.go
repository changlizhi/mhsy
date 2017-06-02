package linksdao

import (
	"mhsy/src/inits"
)

func Delete_links(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_links_by_id(id))
}
