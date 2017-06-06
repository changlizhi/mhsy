package models

//用以接收json数据定义
//xxx_name用于创建model文件。或查询时不用填写字符串
//xxx_type用于创建model文件。为了方便生成go文件，直接用go的对应类型
//xxx_length用于验证用户输入信息
//xxx_nullable用于验证用户输入
type Table_admin struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Usr_name     string
	Usr_type     string
	Usr_length   int
	Usr_nullable bool
	Usr_comment  string

	Pwd_name     string
	Pwd_type     string
	Pwd_length   int
	Pwd_nullable bool
	Pwd_comment  string
}

type Table_category struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Parent_id_name     string
	Parent_id_type     string
	Parent_id_length   int
	Parent_id_nullable bool
	Parent_id_comment  string
}

type Table_config struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Keywords_name     string
	Keywords_type     string
	Keywords_length   int
	Keywords_nullable bool
	Keywords_comment  string

	Description_name     string
	Description_type     string
	Description_length   int
	Description_nullable bool
	Description_comment  string

	Tel_name     string
	Tel_type     string
	Tel_length   int
	Tel_nullable bool
	Tel_comment  string
}

type Table_content struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Content_name     string
	Content_type     string
	Content_length   int
	Content_nullable bool
	Content_comment  string
}

type Table_links struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Url_name     string
	Url_type     string
	Url_length   int
	Url_nullable bool
	Url_comment  string
}

type Table_lunbo struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Pic_name     string
	Pic_type     string
	Pic_length   int
	Pic_nullable bool
	Pic_comment  string

	Url_name     string
	Url_type     string
	Url_length   int
	Url_nullable bool
	Url_comment  string

	Addtime_name     string
	Addtime_type     string
	Addtime_length   int
	Addtime_nullable bool
	Addtime_comment  string

	Daohangid_name     string
	Daohangid_type     string
	Daohangid_length   int
	Daohangid_nullable bool
	Daohangid_comment  string
}

type Table_news struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Intro_name     string
	Intro_type     string
	Intro_length   int
	Intro_nullable bool
	Intro_comment  string

	Content_name     string
	Content_type     string
	Content_length   int
	Content_nullable bool
	Content_comment  string

	Top_id_name     string
	Top_id_type     string
	Top_id_length   int
	Top_id_nullable bool
	Top_id_comment  string

	Second_id_name     string
	Second_id_type     string
	Second_id_length   int
	Second_id_nullable bool
	Second_id_comment  string

	Addtime_name     string
	Addtime_type     string
	Addtime_length   int
	Addtime_nullable bool
	Addtime_comment  string

	Pdf_name     string
	Pdf_type     string
	Pdf_length   int
	Pdf_nullable bool
	Pdf_comment  string
}

type Table_news_pic struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Title_name     string
	Title_type     string
	Title_length   int
	Title_nullable bool
	Title_comment  string

	Intro_name     string
	Intro_type     string
	Intro_length   int
	Intro_nullable bool
	Intro_comment  string

	Content_name     string
	Content_type     string
	Content_length   int
	Content_nullable bool
	Content_comment  string

	Top_id_name     string
	Top_id_type     string
	Top_id_length   int
	Top_id_nullable bool
	Top_id_comment  string

	Second_id_name     string
	Second_id_type     string
	Second_id_length   int
	Second_id_nullable bool
	Second_id_comment  string

	Addtime_name     string
	Addtime_type     string
	Addtime_length   int
	Addtime_nullable bool
	Addtime_comment  string

	Pic_name     string
	Pic_type     string
	Pic_length   int
	Pic_nullable bool
	Pic_comment  string
}

type Table_ziti struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

	Val_name     string
	Val_type     string
	Val_length   int
	Val_nullable bool
	Val_comment  string
}
type Table_Wenzhang_leixing struct {
	Name    string
	Comment string

	Id_name     string
	Id_type     string
	Id_length   int
	Id_nullable bool
	Id_comment  string

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
