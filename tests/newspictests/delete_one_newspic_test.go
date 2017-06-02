package test

import (
	"mhsy/src/newspicdao"
	"testing"
)

func TestDelete_newspic(t *testing.T) {
	id := 43
	newspicdao.Delete_newspic(id)
}
