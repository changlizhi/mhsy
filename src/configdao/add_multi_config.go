package configdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_config(configs []models.Config) {
	//add_all_use_query(configs)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(configs), configs)
}

func add_all_use_query(configs []models.Config) {
	inserter, _ := inits.Ormer_global.QueryTable("config").PrepareInsert()
	for _, config := range configs {
		inserter.Insert(&config)
	}
	inserter.Close()
}
