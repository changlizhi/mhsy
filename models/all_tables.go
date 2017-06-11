package models

type Wenzhang_leixing struct {
	Id        int
	Biaoji    string
	Fenlei    string
	Fufenlei  string
	Mingcheng string
	Paixu     int
}
type Wenzhang struct {
	Id          int
	Biaoji      string
	Wenben      string
	Biaoti      string
	Guanjianzi  string
	Laiyuan     string
	Faburen     string
	Zhaiyao     string
	Zhiding     string
	Shanchu     string
	Dianjiliang int
	Shijian     string
	Tupian      string
	Quanxian    string
	Yuyan       string
	Fenlei      string
	Moban       string
}
type Yonghu struct {
	Id        int
	Biaoji    string
	Mingcheng string
	Mima      string
}
type Yonghu_quanxian struct {
	Id         int
	Biaoji     string
	Yonghuid   int
	Quanxianid int
}
