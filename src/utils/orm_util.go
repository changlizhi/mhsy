package utils

import (
	"mhsy/src/inits"
)

func Set_db_using(db_using string) {
	inits.Ormer_global.Using(db_using)
}
