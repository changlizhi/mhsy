package test

import (
	"mhsy/src/newsdao"
	"testing"
)

func TestDelete_news(t *testing.T) {
	id := 88
	newsdao.Delete_news(id)
}
