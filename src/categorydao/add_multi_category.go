package categorydao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_category(categorys []models.Category) {
	//add_all_use_query(categorys)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(categorys), categorys)
}

func add_all_use_query(categorys []models.Category) {
	inserter, _ := inits.Ormer_global.QueryTable("category").PrepareInsert()
	for _, category := range categorys {
		inserter.Insert(&category)
	}
	inserter.Close()
}
