package test

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/lunbodao"
	"mhsy/src/utils"
	"testing"
)

func TestAdd_lunbo(t *testing.T) {
	add_one()
}
func TestAdd_lunbo_en(t *testing.T) {
	utils.Set_db_using(inits.Bgo_json.Db_using_mhsyen)
	add_one()
}
func add_one() {
	lunbo := new(models.Lunbo)
	lunbo.Id = 58
	lunbo.Title = "Lunbo标题58"
	lunbo.Pic = "src/Lunbo标题58.png"
	lunbo.Url = "#"
	lunbo.Addtime = "1494728875048"
	lunbo.Daohangid = 1

	lunbodao.Add_lunbo(lunbo)
}
