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

//"Table_admin": {
//"Name": "管理员表",
//"Comment": "管理员建立的基本信息",
//"Id_name": "id",
//"Id_type": "int",
//"Id_length": 11,
//"Id_nullable": false,
//"Id_comment": "主键",
//"Usr_name": "user",
//"Usr_type": "string",
//"Usr_length": 255,
//"Usr_nullable": true,
//"Usr_comment": "用户名",
//"Pwd_name": "pwd",
//"Pwd_type": "string",
//"Pwd_length": 32,
//"Pwd_nullable": true,
//"Pwd_comment": "密码"
//},
//"Table_category": {
//"Name": "category",
//"Comment": "头部导航",
//"Id_name": "id",
//"Id_type": "int",
//"Id_length": 11,
//"Id_nullable": false,
//"Id_comment": "主键",
//"Title_name": "title",
//"Title_type": "string",
//"Title_length": "100",
//"Title_nullable": true,
//"Title_comment": "标题",
//"Parent_id_name": "parent_id",
//"Parent_id_type": "int",
//"Parent_id_length": 4,
//"Parent_id_nullable": true,
//"Parent_id_comment": "父主键"
//},
//"Table_config": {
//"Name": "config",
//"Comment": "配置表",
//"Id_name": "id",
//"Id_type": "int",
//"Id_length": 11,
//"Id_nullable": false,
//"Id_comment": "主键",
//"Title_name": "title",
//"Title_type": "string",
//"Title_length": 255,
//"Title_nullable": true,
//"Title_comment": "标题",
//"Keywords_name": "keywords",
//"Keywords_type": "string",
//"Keywords_length": 255,
//"Keywords_nullable": true,
//"Keywords_comment": "关键字",
//"Description_name": "description",
//"Description_type": "string",
//"Description_length": 255,
//"Description_nullable": true,
//"Description_comment": "描述",
//"Tel_name": "tel",
//"Tel_type": "string",
//"Tel_length": 32,
//"Tel_nullable": true,
//"Tel_comment": "电话"
//},
//"Table_content": {
//"Name": "content",
//"Comment": "文章表",
//"Id_name": "id",
//"Id_type": "int",
//"Id_length": 11,
//"Id_nullable": false,
//"Id_comment": "主键",
//"Title_name": "title",
//"Title_type": "string",
//"Title_length": 100,
//"Title_nullable": true,
//"Title_comment": "标题",
//"Content_name": "content",
//"Content_type": "string",
//"Content_length": 65535,
//"Content_nullable": "true",
//"Content_comment": "文章内容"
//},
//"Table_links": {
//"Name": "links",
//"Comment": "链接表",
//"Id_name": "id",
//"Id_type": "int",
//"Id_length": 11,
//"Id_nullable": false,
//"Id_comment": "主键",
//"Title_name": "title",
//"Title_type": "string",
//"Title_length": 100,
//"Title_nullable": true,
//"Title_comment": "标题",
//"Url_name": "url",
//"Url_type": "string",
//"Url_length": 255,
//"Url_nullable": true,
//"Url_comment": "链接地址"
//},
//"Table_lunbo": {
//"Name": "lunbo",
//"Comment": "轮播表",
//"Id_name": "id",
//"Id_type": "int",
//"Id_length": 11,
//"Id_nullable": false,
//"Id_comment": "主键",
//"Title_name": "title",
//"Title_type": "string",
//"Title_length": 100,
//"Title_nullable": "true",
//"Title_comment": "标题",
//"Pic_name": "pic",
//"Pic_type": "string",
//"Pic_length": 255,
//"Pic_nullable": true,
//"Pic_comment": "图片名称",
//"Url_name": "url",
//"Url_type": "string",
//"Url_length": 255,
//"Url_nullable": true,
//"Url_comment": "图片地址",
//"Addtime_name": "addtime",
//"Addtime_type": "string",
//"Addtime_length": 32,
//"Addtime_nullable": true,
//"Addtime_comment": "添加时间",
//"Daohangid_name": "daohangid",
//"Daohangid_type": "int",
//"Daohangid_length": 2,
//"Daohangid_nullable": true,
//"Daohangid_comment": "导航主键"
//}
