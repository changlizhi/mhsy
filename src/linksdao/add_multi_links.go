package linksdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_links(linkss []models.Links) {
	//add_all_use_query(linkss)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(linkss), linkss)
}

func add_all_use_query(linkss []models.Links) {
	inserter, _ := inits.Ormer_global.QueryTable("links").PrepareInsert()
	for _, links := range linkss {
		inserter.Insert(&links)
	}
	inserter.Close()
}
