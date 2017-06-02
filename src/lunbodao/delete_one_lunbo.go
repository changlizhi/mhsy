package lunbodao

import (
	"mhsy/src/inits"
)

func Delete_lunbo(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_lunbo_by_id(id))
}
