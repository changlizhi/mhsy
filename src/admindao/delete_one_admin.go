package admindao

import (
	"mhsy/src/inits"
)

func Delete_admin(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_admin_by_id(id))
}
