package models

type Mhsy_columns struct {
	//除All_tables外每一个字段的值都必须按照格式来组织分割
	//name,type,length,comment,table_name[,table_names]
	All_tables  string
	Id          string
	Title       string
	User        string
	Pwd         string
	Parent_id   string
	Keywords    string
	Description string
	Tel         string
	Content     string
	Url         string
	Pic         string
	Addtime     string
	Daohangid   string
	Instro      string
	Top_id      string
	Second_id   string
	Pdf         string
	Val         string

	Tb_Admin    string
	Tb_Category string
	Tb_Config   string
	Tb_Content  string
	Tb_Links    string
	Tb_Lunbo    string
	Tb_News     string
	Tb_News_pic string
	Tb_Ziti     string
}
