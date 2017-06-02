package admindao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_admin(admins []models.Admin) {
	//add_all_use_query(admins)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	//inits.Ormer_global.InsertMulti(len(admins), admins)
	add_all_use_query(admins)
}

func add_all_use_query(admins []models.Admin) {
	table := inits.All_cols.Tb_Admin
	inserter, _ := inits.Ormer_global.QueryTable(table).PrepareInsert()
	for _, admin := range admins {
		inserter.Insert(&admin)
	}
	inserter.Close()
}
