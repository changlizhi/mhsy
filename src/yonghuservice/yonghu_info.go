package yonghuservice

import (
	"log"
	"mhsy/src/utils"
	"mhsy/src/yonghudao"
)

func yanzheng_mima(mima string, dbmima string) bool {
	data_md5 := utils.Md5str(mima)
	ret := (data_md5 == dbmima)
	return ret
}
func Yanzheng_yonghu(mingcheng string, mima string) bool {
	yh := yonghudao.Select_yonghu_mingcheng(mingcheng)
	if len(yh) == 1 {
		pipei := yanzheng_mima(mima, yh[0].Mima)
		return pipei
	}
	log.Println("无数据或相同名称出现多个用户-------")
	return false
}
