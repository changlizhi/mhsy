package test

import (
	"mhsy/src/contentdao"
	"testing"
)

func TestDelete_content(t *testing.T) {
	id := 11
	contentdao.Delete_content(id)
}
