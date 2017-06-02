package test

import (
	"mhsy/models"
	"mhsy/src/lunbodao"
	"testing"
)

func TestUpdate_lunbo(t *testing.T) {
	lunbo := new(models.Lunbo)
	lunbo.Id = 58
	lunbo.Pic = "src/Lunbo修改图片58.png"
	lunbo.Title = "lunbo修改标题58.png"
	lunbo.Addtime = "1494728875048"
	lunbodao.Update_lunbo(lunbo)
}
