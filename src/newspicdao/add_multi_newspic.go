package newspicdao

import (
	"mhsy/models"
	"mhsy/src/inits"
)

func Add_many_newspic(newspics []models.News_pic) {
	//add_all_use_query(newspics)//此方法采用prepare方式进行添加，未测试插入效率
	//此方法为insert_multi方法，两个方法都不会panic
	inits.Ormer_global.InsertMulti(len(newspics), newspics)
}

func add_all_use_query(newspics []models.News_pic) {
	inserter, _ := inits.Ormer_global.QueryTable("news_pic").PrepareInsert()
	for _, newspic := range newspics {
		inserter.Insert(&newspic)
	}
	inserter.Close()
}
