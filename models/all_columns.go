package models

type Mhsy_columns struct {
	//除All_tables外每一个字段的值都必须按照格式来组织分割
	//name,type,length,comment,table_name[,table_names]
	All_tables string
	Id         string

	Mingcheng   string
	Fenlei      string
	Fufenlei    string
	Paixu       string
	Wenben      string
	Biaoti      string
	Guanjianzi  string
	Laiyuan     string
	Faburen     string
	Zhaiyao     string
	Zhiding     string
	Shanchu     string
	Dianjiliang string
	Shijian     string
	Tupian      string
	Quanxian    string
	Yuyan       string
	Moban       string
	Biaoji      string
	Mima        string
	Yonghuid    string
	Quanxianid  string

	Tb_Wenzhang         string
	Tb_Wenzhang_leixing string
	Tb_Yonghu           string
	Tb_Yonghu_quanxian  string
}
