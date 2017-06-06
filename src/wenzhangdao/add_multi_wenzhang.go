package wenzhangdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_wenzhang(wenzhangs []models.Wenzhang) {
	//add_all_use_query(linkss)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(wenzhangs), wenzhangs)
}

func add_all_use_query(wenzhangs []models.Wenzhang) {
	inserter, _ := inits.Ormer_global.QueryTable("wenzhang").PrepareInsert()
	for _, wenzhang := range wenzhangs {
		inserter.Insert(&wenzhang)
	}
	inserter.Close()
}
