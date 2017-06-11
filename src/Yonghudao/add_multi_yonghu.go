package yonghudao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_yonghu(yonghus []models.Yonghu) {
	//add_all_use_query(linkss)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(yonghus), yonghus)
}

func add_all_use_query(yonghus []models.Yonghu) {
	inserter, _ := inits.Ormer_global.QueryTable(inits.All_cols.Tb_Yonghu).PrepareInsert()
	for _, yonghu := range yonghus {
		inserter.Insert(&yonghu)
	}
	inserter.Close()
}
