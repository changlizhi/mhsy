package wenzhangleixingdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_wenzhang_leixing(wenzhang_leixings []models.Wenzhang_leixing) {
	//add_all_use_query(linkss)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(wenzhang_leixings), wenzhang_leixings)
}

func add_all_use_query(wenzhang_leixings []models.Wenzhang_leixing) {
	inserter, _ := inits.Ormer_global.QueryTable("wenzhang_leixing").PrepareInsert()
	for _, wenzhang_leixing := range wenzhang_leixings {
		inserter.Insert(&wenzhang_leixing)
	}
	inserter.Close()
}
