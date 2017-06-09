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

}
