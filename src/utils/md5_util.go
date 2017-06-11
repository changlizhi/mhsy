package utils

import (
	"bytes"
	"crypto/md5"
	"strconv"
)

func Md5str(str string) string {
	data := []byte(str)
	md5_data := md5.Sum(data)
	buffer := new(bytes.Buffer)
	for _, b := range md5_data {
		s := strconv.FormatInt(int64(b), 16)
		if len(s) == 1 {
			buffer.WriteString("0")
		}
		buffer.WriteString(s)
	}
	return buffer.String()
}
