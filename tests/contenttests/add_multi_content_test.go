package test

import (
	"mhsy/models"
	"mhsy/src/contentdao"
	"testing"
)

func TestAdd_many_content(t *testing.T) {
	var contents = []models.Content{
		models.Content{
			Id:      12,
			Content: "标题12",
			Title:   "标题12",
		},
		models.Content{
			Id:      13,
			Content: "内容13",
			Title:   "标题13",
		},
	}
	contentdao.Add_many_content(contents)
}
