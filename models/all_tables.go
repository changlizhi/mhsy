package models

type Admin struct {
	Id   int
	User string
	Pwd  string
}
type Category struct {
	Id        int
	Title     string
	Parent_id int
}
type Config struct {
	Id          int
	Title       string
	Keywords    string
	Description string
	Tel         string
}

type Content struct {
	Id      int
	Content string
	Title   string
}

type Links struct {
	Id    int
	Title string
	Url   string
}
type Lunbo struct {
	Id        int
	Title     string
	Pic       string
	Url       string
	Addtime   string
	Daohangid int
}

type News struct {
	Id        int
	Title     string
	Intro     string
	Content   string
	Top_id    int
	Second_id int
	Addtime   string
	Pdf       string
}

type News_pic struct {
	Id        int
	Title     string
	Intro     string
	Content   string
	Top_id    int
	Second_id int
	Addtime   string
	Pic       string
}

type Ziti struct {
	Id  int
	Val int
}
