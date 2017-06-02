package newsdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_news(newss []models.News) {
	//add_all_use_query(newss)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(newss), newss)
}

func add_all_use_query(newss []models.News) {
	inserter, _ := inits.Ormer_global.QueryTable("news").PrepareInsert()
	for _, news := range newss {
		inserter.Insert(&news)
	}
	inserter.Close()
}
