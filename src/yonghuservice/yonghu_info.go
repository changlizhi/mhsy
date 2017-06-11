package yonghuservice

import (
	"log"
	"mhsy/src/utils"
	"mhsy/src/yonghudao"
)

func yanzheng_mima(mima string, dbmima string) bool {
	log.Println("mima---------" + mima)
	log.Println("dbmima--------" + dbmima)

	data_md5 := utils.Md5str(mima)
	log.Println("data_md5-------" + data_md5)
	ret := (data_md5 == dbmima)
	return ret
}
func Yanzheng_yonghu(mingcheng string, mima string) {
	yh := yonghudao.Select_yonghu_mingcheng(mingcheng)
	if len(yh) == 1 {
		pipei := yanzheng_mima(mima, yh[0].Mima)
		log.Println("pipei----------", pipei)
	}
	log.Println("无数据")
}
