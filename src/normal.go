package src

import (
	"log"
	"strings"
)

func String_split() {
	vals := "Id,int,11,主键,Admin,Category,Config,Content,Links,Lunbo,News,News_pic,Ziti"
	val_arr := strings.Split(vals, ",")
	after_three := val_arr[4:]
	for index, val := range after_three {
		log.Println(index, val)
	}
}
