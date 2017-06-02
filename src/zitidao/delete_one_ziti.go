package zitidao

import (
	"mhsy/src/inits"
)

func Delete_ziti(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_ziti_by_id(id))
}
