package modelsdef

import (
	"mhsy/models"
	"mhsy/src/inits"
	"strconv"
	"strings"
)

var Admin_id models.Column_props
var Admin_user models.Column_props
var Admin_pwd models.Column_props

func init() {
	init_admin()
}
func init_admin() {

	props_id := strings.Split(inits.All_cols.Id, ",")
	Admin_id.Name = props_id[0]
	Admin_id.Type = props_id[1]
	Admin_id.Length, _ = strconv.ParseInt(props_id[2], 10, 0)
	Admin_id.Comment = props_id[3]
	Admin_id.Tables = props_id[4:]

	props_user := strings.Split(inits.All_cols.User, ",")
	Admin_user.Name = props_user[0]
	Admin_user.Type = props_user[1]
	Admin_user.Length, _ = strconv.ParseInt(props_id[2], 10, 0)
	Admin_user.Comment = props_user[3]
	Admin_user.Tables = props_user[4:]

	props_pwd := strings.Split(inits.All_cols.Pwd, ",")
	Admin_pwd.Name = props_pwd[0]
	Admin_pwd.Type = props_pwd[1]
	Admin_pwd.Length, _ = strconv.ParseInt(props_id[2], 10, 0)
	Admin_pwd.Comment = props_pwd[3]
	Admin_pwd.Tables = props_pwd[4:]
}
