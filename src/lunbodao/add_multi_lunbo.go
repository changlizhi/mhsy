package lunbodao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_lunbo(lunbos []models.Lunbo) {
	//add_all_use_query(lunbos)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(lunbos), lunbos)
}

func add_all_use_query(lunbos []models.Lunbo) {
	inserter, _ := inits.Ormer_global.QueryTable("lunbo").PrepareInsert()
	for _, lunbo := range lunbos {
		inserter.Insert(&lunbo)
	}
	inserter.Close()
}
