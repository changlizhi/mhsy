package test

import (
	"mhsy/src/linksdao"
	"testing"
)

func TestDelete_links(t *testing.T) {
	id := 6
	linksdao.Delete_links(id)
}
