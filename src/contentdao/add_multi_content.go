package contentdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_content(contents []models.Content) {
	//add_all_use_query(contents)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(contents), contents)
}

func add_all_use_query(contents []models.Content) {
	inserter, _ := inits.Ormer_global.QueryTable("content").PrepareInsert()
	for _, content := range contents {
		inserter.Insert(&content)
	}
	inserter.Close()
}
