package configdao

import (
	"mhsy/src/inits"
)

func Delete_config(id int) {
	inits.Ormer_global.Delete(read_config_by_id(id))
}
