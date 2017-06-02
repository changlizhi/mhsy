package test

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/newspicdao"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_newspic(t *testing.T) {
	add_one()
}
func TestAdd_newspic_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	newspic := new(models.News_pic)
	newspic.Id = 43
	newspic.Title = "newspic标题43"
	newspic.Intro = "newspic介绍43"
	newspic.Content = "newspic文本43"
	newspic.Top_id = 3
	newspic.Second_id = 33
	newspic.Addtime = "1494728875043"
	newspic.Pic = "src/图片43.jpg"
	newspicdao.Add_newspic(newspic)
}
