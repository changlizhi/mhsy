package zitidao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_ziti(zitis []models.Ziti) {
	//add_all_use_query(zitis)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(zitis), zitis)
}

func add_all_use_query(zitis []models.Ziti) {
	inserter, _ := inits.Ormer_global.QueryTable("ziti").PrepareInsert()
	for _, ziti := range zitis {
		inserter.Insert(&ziti)
	}
	inserter.Close()
}
