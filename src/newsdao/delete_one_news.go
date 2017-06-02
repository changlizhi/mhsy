package newsdao

import (
	"mhsy/src/inits"
)

func Delete_news(id int) {
	delete_one(id)
}
func delete_one(id int) {
	inits.Ormer_global.Delete(read_news_by_id(id))
}
