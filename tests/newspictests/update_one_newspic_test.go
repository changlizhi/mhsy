package test

import (
	"mhsy/models"
	"mhsy/src/newspicdao"
	"testing"
)

func TestUpdate_newspic(t *testing.T) {
	newspic := new(models.News_pic)
	newspic.Id = 43
	newspic.Title = "newspic标题修改43"
	newspic.Intro = "newspic介绍修改43"
	newspic.Content = "newspic文本修改43"
	newspic.Top_id = 3
	newspic.Second_id = 33
	newspic.Addtime = "1494728875043"
	newspic.Pic = "src/图片修改43.jpg"
	newspicdao.Update_newspic(newspic)
}
