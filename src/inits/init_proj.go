package inits

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"io/ioutil"
	"log"
	"mhsy/models"
	"strconv"
)

var Ormer_global orm.Ormer
var Bgo_json models.Beego_json

var beego_json_dir = "src/inits/beego.json"
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
	beego.SetStaticPath("/static", "static")
	beego.SetStaticPath("/strategy/static", "static")
}
func load_column() {
	All_cols.All_tables = json_obj["All_tables"]
	All_cols.Id = json_obj["Id"]
	All_cols.Title = json_obj["Title"]
	All_cols.User = json_obj["User"]
	All_cols.Pwd = json_obj["Pwd"]
	All_cols.Parent_id = json_obj["Parent_id"]
	All_cols.Keywords = json_obj["Keywords"]
	All_cols.Description = json_obj["Description"]
	All_cols.Tel = json_obj["Tel"]
	All_cols.Content = json_obj["Content"]
	All_cols.Url = json_obj["Url"]
	All_cols.Pic = json_obj["Pic"]
	All_cols.Addtime = json_obj["Addtime"]
	All_cols.Daohangid = json_obj["Daohangid"]
	All_cols.Instro = json_obj["Instro"]
	All_cols.Top_id = json_obj["Top_id"]
	All_cols.Second_id = json_obj["Second_id"]
	All_cols.Pdf = json_obj["Pdf"]
	All_cols.Val = json_obj["Val"]
	All_cols.Tb_Admin = json_obj["Tb_Admin"]
	All_cols.Tb_Category = json_obj["Tb_Category"]
	All_cols.Tb_Config = json_obj["Tb_Config"]
	All_cols.Tb_Content = json_obj["Tb_Content"]
	All_cols.Tb_Links = json_obj["Tb_Links"]
	All_cols.Tb_Lunbo = json_obj["Tb_Lunbo"]
	All_cols.Tb_News = json_obj["Tb_News"]
	All_cols.Tb_News_pic = json_obj["Tb_News_pic"]
	All_cols.Tb_Ziti = json_obj["Tb_Ziti"]
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
		new(models.Ziti))
	//拼接参数格式
	// orm.RegisterDataBase("default", "mysql", "root:root@tcp(127.0.0.1:3306)/xxx")
	log.Println(Bgo_json.Mao_hao +
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
	orm.RegisterDataBase(
		Bgo_json.Db_using_mhsyen,
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
			Bgo_json.Db_name_mhsy_en,
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
		log.Fatal("读取json失败！")
		panic(err)
	}
	if err := json.Unmarshal(bytes, &ret); err != nil {
		log.Fatal("解析json失败！")
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
