package models

//用以接收json数据定义
//xxx_name用于创建model文件。或查询时不用填写字符串
//xxx_type用于创建model文件。为了方便生成go文件，直接用go的对应类型
//xxx_length用于验证用户输入信息
//xxx_nullable用于验证用户输入
type Table_Yonghu_quanxian struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Biaoji_name     string
	Biaoji_type     string
	Biaoji_length   int
	Biaoji_nullable bool
	Biaoji_comment  string

	Yonghuid_name     string
	Yonghuid_type     string
	Yonghuid_length   int
	Yonghuid_nullable bool
	Yonghuid_comment  string

	QUanxianid_name     string
	QUanxianid_type     string
	QUanxianid_length   int
	QUanxianid_nullable bool
	QUanxianid_comment  string
}
type Table_Yonghu struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Biaoji_name     string
	Biaoji_type     string
	Biaoji_length   int
	Biaoji_nullable bool
	Biaoji_comment  string

	Mingcheng_name     string
	Mingcheng_type     string
	Mingcheng_length   int
	Mingcheng_nullable bool
	Mingcheng_comment  string

	Mima_name     string
	Mima_type     string
	Mima_length   int
	Mima_nullable bool
	Mima_comment  string
}
type Table_Wenzhang_leixing struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Biaoji_name     string
	Biaoji_type     string
	Biaoji_length   int
	Biaoji_nullable bool
	Biaoji_comment  string

	Fenlei_name     string
	Fenlei_type     string
	Fenlei_length   int
	Fenlei_nullable bool
	Fenlei_comment  string

	Mingcheng_name     string
	Mingcheng_type     string
	Mingcheng_length   int
	Mingcheng_nullable bool
	Mingcheng_comment  string

	Fufenlei_name     string
	Fufenlei_type     string
	Fufenlei_length   int
	Fufenlei_nullable bool
	Fufenlei_comment  string

	Paixu_name     string
	Paixu_type     string
	Paixu_length   int
	Paixu_nullable bool
	Paixu_comment  string
}
type Table_Wenzhang struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Biaoji_name     string
	Biaoji_type     string
	Biaoji_length   int
	Biaoji_nullable bool
	Biaoji_comment  string

	Fenlei_name     string
	Fenlei_type     string
	Fenlei_length   int
	Fenlei_nullable bool
	Fenlei_comment  string

	Wenben_name     string
	Wenben_type     string
	Wenben_length   int
	Wenben_nullable bool
	Wenben_comment  string

	Biaoti_name     string
	Biaoti_type     string
	Biaoti_length   int
	Biaoti_nullable bool
	Biaoti_comment  string

	Guanjianzi_name     string
	Guanjianzi_type     string
	Guanjianzi_length   int
	Guanjianzi_nullable bool
	Guanjianzi_comment  string

	Laiyuan_name     string
	Laiyuan_type     string
	Laiyuan_length   int
	Laiyuan_nullable bool
	Laiyuan_comment  string

	Faburen_name     string
	Faburen_type     string
	Faburen_length   int
	Faburen_nullable bool
	Faburen_comment  string

	Zhaiyao_name     string
	Zhaiyao_type     string
	Zhaiyao_length   int
	Zhaiyao_nullable bool
	Zhaiyao_comment  string

	Zhiding_name     string
	Zhiding_type     string
	Zhiding_length   int
	Zhiding_nullable bool
	Zhiding_comment  string

	Shanchu_name     string
	Shanchu_type     string
	Shanchu_length   int
	Shanchu_nullable bool
	Shanchu_comment  string

	Dianjiliang_name     string
	Dianjiliang_type     string
	Dianjiliang_length   int
	Dianjiliang_nullable bool
	Dianjiliang_comment  string

	Shijian_name     string
	Shijian_type     string
	Shijian_length   int
	Shijian_nullable bool
	Shijian_comment  string

	Tupian_name     string
	Tupian_type     string
	Tupian_length   int
	Tupian_nullable bool
	Tupian_comment  string

	Quanxian_name     string
	Quanxian_type     string
	Quanxian_length   int
	Quanxian_nullable bool
	Quanxian_comment  string

	Yuyan_name     string
	Yuyan_type     string
	Yuyan_length   int
	Yuyan_nullable bool
	Yuyan_comment  string

	Moban_name     string
	Moban_type     string
	Moban_length   int
	Moban_nullable bool
	Moban_comment  string
}
