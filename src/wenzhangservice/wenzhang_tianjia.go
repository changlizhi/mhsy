package wenzhangservice

import (
	"mhsy/models"
	"mhsy/src/inits"
	"mhsy/src/wenzhangdao"
)

func Tianjia_wenzhang(wz *models.Wenzhang) {
	xinwens := wenzhangdao.Select_shouye_xinwen()
	wz.Fenlei = "SHOUYE_XINWEN"
	if wz.Tupian != "" {
		for _, dbxinwen := range xinwens {
			if dbxinwen.Biaoji == inits.Bgo_json.Xinwen_tupian2 {
				dbxinwen.Biaoji = ""
				dbxinwen.Fenlei = "DNAMY"
				dbxinwen.Moban = ""
				dbxinwen.Shijian= time.Now()
			}
			if dbxinwen.Biaoji == inits.Bgo_json.Xinwen_tupian1 {
				dbxinwen.Biaoji = inits.Bgo_json.Xinwen_tupian2
				dbxinwen.Shijian= time.Now()
			}
			wenzhangdao.Update_wenzhang(&dbxinwen)
		}
		wz.Biaoji = inits.Bgo_json.Xinwen_tupian1
		wz.Moban = "IN"
		wenzhangdao.Add_wenzhang(wz)
		return
	}
	if wz.Tupian == "" {
		for _, dbxinwen := range xinwens {
			if dbxinwen.Biaoji == inits.Bgo_json.Xinwen_wenzi3 {
				dbxinwen.Biaoji = ""
				dbxinwen.Fenlei = "DNAMY"
				dbxinwen.Moban = ""
				dbxinwen.Shijian= time.Now()
			}
			if dbxinwen.Biaoji == inits.Bgo_json.Xinwen_wenzi2 {
				dbxinwen.Biaoji = inits.Bgo_json.Xinwen_wenzi3
				dbxinwen.Shijian= time.Now()
			}
			if dbxinwen.Biaoji == inits.Bgo_json.Xinwen_wenzi1 {
				dbxinwen.Biaoji = inits.Bgo_json.Xinwen_wenzi2
				dbxinwen.Shijian= time.Now()
			}
			wenzhangdao.Update_wenzhang(&dbxinwen)
		}
		wz.Biaoji = inits.Bgo_json.Xinwen_wenzi1
		wz.Moban = "IN"
		wenzhangdao.Add_wenzhang(wz)
		return
	}
}
