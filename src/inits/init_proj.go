package inits

import (
	"encoding/json"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"io/ioutil"
	"log"
	"mhsy/models"
	"strconv"
)

var Ormer_global orm.Ormer
var Bgo_json models.Beego_json

var beego_json_dir = "conf/beego.json"
var All_cols models.Mhsy_columns
var json_obj map[string]string

func init() {
	//请勿颠倒顺序

	load_json_obj()
	load_beego_json()
	load_orm()
	load_ormer()
	load_column()
	init_beego()
}
func init_beego() {
}
func load_column() {
	All_cols.All_tables = json_obj["All_tables"]
	All_cols.Id = json_obj["Id"]

	All_cols.Mingcheng = json_obj["Mingcheng"]
	All_cols.Fenlei = json_obj["Fenlei"]
	All_cols.Fufenlei = json_obj["Fufenlei"]
	All_cols.Paixu = json_obj["Paixu"]
	All_cols.Wenben = json_obj["Wenben"]
	All_cols.Biaoti = json_obj["Biaoti"]
	All_cols.Guanjianzi = json_obj["Guanjianzi"]
	All_cols.Laiyuan = json_obj["Laiyuan"]
	All_cols.Faburen = json_obj["Faburen"]
	All_cols.Zhaiyao = json_obj["Zhaiyao"]
	All_cols.Zhiding = json_obj["Zhiding"]
	All_cols.Shanchu = json_obj["Shanchu"]
	All_cols.Dianjiliang = json_obj["Dianjiliang"]
	All_cols.Shijian = json_obj["Shijian"]
	All_cols.Tupian = json_obj["Tupian"]
	All_cols.Quanxian = json_obj["Quanxian"]
	All_cols.Yuyan = json_obj["Yuyan"]
	All_cols.Moban = json_obj["Moban"]
	All_cols.Tb_Wenzhang_leixing = json_obj["Tb_Wenzhang_leixing"]
	All_cols.Tb_Wenzhang = json_obj["Tb_Wenzhang"]
}

func Reload_json_and_orm() {
	//请勿颠倒顺序
	load_json_obj()
	load_beego_json()
	load_orm()
}

func load_orm() {
	max_idle := 30
	max_conn := 50
	orm.Debug, _ = strconv.ParseBool(Bgo_json.Orm_debug)
	orm.RegisterModel(
		new(models.Admin),
		new(models.Category),
		new(models.Config),
		new(models.Content),
		new(models.Links),
		new(models.Lunbo),
		new(models.News),
		new(models.News_pic),
		new(models.Ziti),
		new(models.Wenzhang_leixing),
		new(models.Wenzhang))
	//拼接参数格式
	// orm.RegisterDataBase("default", "mysql", "root:root@tcp(127.0.0.1:3306)/xxx")
	log.Println(Bgo_json.Db_user +
		Bgo_json.Mao_hao +
		Bgo_json.Db_password +
		Bgo_json.Quan_a +
		Bgo_json.Db_protocol +
		Bgo_json.Zuo_yuan_kuo +
		Bgo_json.Db_ip +
		Bgo_json.Mao_hao +
		Bgo_json.Db_port +
		Bgo_json.You_yuan_kuo +
		Bgo_json.Xie_xian +
		Bgo_json.Db_name_mhsy)
	orm.RegisterDataBase(
		Bgo_json.Db_using_default,
		Bgo_json.Db_driver_mysql,
		Bgo_json.Db_user+
			Bgo_json.Mao_hao+
			Bgo_json.Db_password+
			Bgo_json.Quan_a+
			Bgo_json.Db_protocol+
			Bgo_json.Zuo_yuan_kuo+
			Bgo_json.Db_ip+
			Bgo_json.Mao_hao+
			Bgo_json.Db_port+
			Bgo_json.You_yuan_kuo+
			Bgo_json.Xie_xian+
			Bgo_json.Db_name_mhsy,
		max_idle,
		max_conn)
}

func load_ormer() {
	Ormer_global = orm.NewOrm()
	Ormer_global.Using(Bgo_json.Db_using_default)
}

func read_beego_json() (map[string]string, error) {
	ret := map[string]string{}
	bytes, err := ioutil.ReadFile(beego_json_dir)
	if err != nil {
		log.Println("读取json失败！")
		panic(err)
	}
	if err := json.Unmarshal(bytes, &ret); err != nil {
		log.Println("解析json失败！")
		panic(err)
	}
	return ret, nil
}

func load_json_obj() {
	log.Println("初始化beego.json")
	json_obj, _ = read_beego_json()
}

func load_beego_json() {
	Bgo_json.Orm_debug = json_obj["Orm_debug"]
	Bgo_json.Db_name_mhsy = json_obj["Db_name_mhsy"]
	Bgo_json.Db_name_mhsy_en = json_obj["Db_name_mhsy_en"]
	Bgo_json.Db_driver_mysql = json_obj["Db_driver_mysql"]
	Bgo_json.Db_using_default = json_obj["Db_using_default"]
	Bgo_json.Db_using_mhsyen = json_obj["Db_using_mhsyen"]
	Bgo_json.Db_user = json_obj["Db_user"]
	Bgo_json.Db_password = json_obj["Db_password"]
	Bgo_json.Db_protocol = json_obj["Db_protocol"]
	Bgo_json.Db_ip = json_obj["Db_ip"]
	Bgo_json.Db_port = json_obj["Db_port"]
	Bgo_json.Bo_lang = json_obj["Bo_lang"]
	Bgo_json.Base_dir = json_obj["Base_dir"]
	Bgo_json.Proj_dir = json_obj["Proj_dir"]
	Bgo_json.Web_url = json_obj["Web_url"]
	Bgo_json.Gan_tan = json_obj["Gan_tan"]
	Bgo_json.Quan_a = json_obj["Quan_a"]
	Bgo_json.Jing_hao = json_obj["Jing_hao"]
	Bgo_json.Mei_yuan = json_obj["Mei_yuan"]
	Bgo_json.Bai_fen = json_obj["Bai_fen"]
	Bgo_json.Cheng_fang = json_obj["Cheng_fang"]
	Bgo_json.Bing_qie = json_obj["Bing_qie"]
	Bgo_json.Xing_hao = json_obj["Xing_hao"]
	Bgo_json.Zuo_yuan_kuo = json_obj["Zuo_yuan_kuo"]
	Bgo_json.You_yuan_kuo = json_obj["You_yuan_kuo"]
	Bgo_json.Xia_hua = json_obj["Xia_hua"]
	Bgo_json.Jia_hao = json_obj["Jia_hao"]
	Bgo_json.Zuo_da_kuo = json_obj["Zuo_da_kuo"]
	Bgo_json.You_da_kuo = json_obj["You_da_kuo"]
	Bgo_json.Mao_hao = json_obj["Mao_hao"]
	Bgo_json.Shuang_yin = json_obj["Shuang_yin"]
	Bgo_json.Zuo_jian_kuo = json_obj["Zuo_jian_kuo"]
	Bgo_json.You_jian_kuo = json_obj["You_jian_kuo"]
	Bgo_json.Wen_hao = json_obj["Wen_hao"]
	Bgo_json.Shu_xian = json_obj["Shu_xian"]
	Bgo_json.Tilde = json_obj["Tilde"]
	Bgo_json.Jian_hao = json_obj["Jian_hao"]
	Bgo_json.Deng_hao = json_obj["Deng_hao"]
	Bgo_json.Zuo_fang_kuo = json_obj["Zuo_fang_kuo"]
	Bgo_json.You_fang_kuo = json_obj["You_fang_kuo"]
	Bgo_json.Fan_xie_xian = json_obj["Fan_xie_xian"]
	Bgo_json.Dan_yin = json_obj["Dan_yin"]
	Bgo_json.Fen_hao = json_obj["Fen_hao"]
	Bgo_json.Xie_xian = json_obj["Xie_xian"]
	Bgo_json.Ju_hao = json_obj["Ju_hao"]
	Bgo_json.Dou_hao = json_obj["Dou_hao"]
	Bgo_json.Pager_size = json_obj["Pager_size"]
}
