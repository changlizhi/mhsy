package newspicdao

import (
	"mhsy/src/inits"
)

func Delete_newspic(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_newspic_by_id(id))
}
