{{define "footer"}}
<div id="footer"
     class="winwin-footer"
     style="top: initial;">
    <div class="container">
        <div class="top">
            <div class="row">
                <div class="col-md-8 col-sm-12 hidden-xs">
                    <div class="left">
                        <div class="left_inner row">
                            <div class="col-sm-3">
                                <ul>
                                    <li>
                                        <a href="http://118.123.15.189:8055/mhsy_web/api/login/login.html"
                                           target="_blank">
                                            个人用户
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/base">
                                            企业用户
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/base">
                                            销售商
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/base"
                                           target="_parent">
                                            合作伙伴
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/base"
                                           target="_blank">
                                            供应商
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/87">
                                            求职者
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-3">
                                <ul>
                                    <li>
                                        <a href="/event/89"
                                           target="_blank">
                                            公司简介
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/91"
                                           target="_blank">
                                            公司治理
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/92"
                                           target="_blank">
                                            公司愿景
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/93"
                                           target="_blank">
                                            管理理念
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/88"
                                           target="_blank">
                                            大事记
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-3">
                                <ul>
                                    <li>
                                        <a href="/dnamy/1"
                                           target="_parent">
                                            迪恩摩音
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dnamy/2"
                                           target="_parent">
                                            迪音治疗床
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dnamy/3"
                                           target="_parent">
                                            个性化定制
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/base"
                                           target="_parent">
                                            商 城
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/event/94"
                                           target="_parent">
                                            购买与售后
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-sm-3">
                                <ul>
                                    <li>
                                        <a href="/event/95"
                                           target="_blank">
                                            医学研究中心
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/96">
                                            健康管理中心
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/97"
                                           target="_blank">
                                            数据AI中心
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/event/98"
                                           target="_blank">
                                            数码医学理论
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="col-md-4 col-sm-12 col-xs-12 win-foot-border-top">
                    <div class="footer-icon-top">
                        <label>
                            关注我们
                        </label>
                    </div>

                    <div class="QR-code clearfix row mt10 hidden-xs hidden-sm">
                        <div class="col-xs-4">
                            <img alt=""
                                 src="/static/img/wx.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="hw1_hr">
    <div class="container">
        <div class="bottom">
            <div class="row">
                <div class="col-sm-7 col-md-5 hidden-xs hidden-sm">
                    <div class="bottom_left">
                        <span id="indexfooter_2_tCopyRight">
                            <a onclick='location.href="/denglu"'
                               style='text-decoration:none'>©</a>
                            2017 美华尚医（成都）生物科技有限公司
                            <a onclick='self.location = "/toeditor/update" + window.location.pathname'
                               style='text-decoration:none'>&nbsp;&nbsp;</a>
                            <a href="/base"
                               target="_blank">蜀备20044005</a>
                        </span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <div class="bottom_right">
                        <ul>
                            <li class="editPageButtom">
                                <a href="/event/99"
                                   target="_parent">
                                    法律声明
                                </a>
                            </li>
                            <li class="editPageButtom">
                                <a href="/event/100"
                                   target="_parent">
                                    隐私保护
                                </a>
                            </li>
                            <li class="editPageButtom">
                                <a href="/event/101"
                                   target="_parent">
                                    联系我们
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--设置个性化脚本-->
<script type="text/javascript">var digitalData = {};</script>
<script type="text/javascript"
        src="/static/js/index.min.js"></script>
<script src="/static/js/script.js"></script>
<script type="text/javascript">
  $(document).on("vclick", ".js-feedback-btn", function (e) {
    clickNewsVerify();
    return false;
  })
</script>
<script type="text/javascript">
  function callTealium(fileName, fileUrl, materialNumber) {
    if (typeof(utag) != "undefined" && typeof(utag.link) != "undefined") {
      utag.link({
        "download_file_name": fileName,//Required
        "download_file_url": fileUrl,  //Required
        "download_material_number": materialNumber//Required
      });
    }
  }
</script>
</div>
</body>
</html>
{{end}}