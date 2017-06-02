package categorydao

import (
	"mhsy/src/inits"
)

func Delete_category(id int) {
	inits.Ormer_global.Delete(read_category_by_id(id))
}
