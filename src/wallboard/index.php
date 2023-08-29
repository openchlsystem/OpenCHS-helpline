<html>
<head>
<meta charset=UTF-8>
<title>Helpline</title>
<script>
<?php
include "/var/www/tz_config.php";

echo "var VA_SIP_USER_PREFIX = \"".$VA_SIP_USER_PREFIX."\";\r\n";
echo "var VA_SIP_PASS_PREFIX = \"".$VA_SIP_PASS_PREFIX."\";\r\n";
echo "var VA_SIP_HOST = \"".$VA_SIP_HOST."\";\r\n";
echo "var VA_ICE_HOST = \"".$VA_ICE_HOST."\";\r\n";
echo "var VA_AMI_HOST = \"".$VA_AMI_HOST."\";\r\n";
echo "var VA_ATI_HOST = \"".$VA_ATI_HOST."\";\r\n";
echo "var VA_AMI_HOST_WALLBOARD = \"".$VA_AMI_HOST_WALLBOARD."\";\r\n";

echo "var APP_LOGO = \"".$APP_LOGO."\";\r\n";
echo "var COUNTRY_CODE = \"".$COUNTRY_CODE."\";\r\n";
echo "var CASE_ID_PREFIX = \"".$CASE_ID_PREFIX."\";\r\n";

echo "var CASE_CATEGORY_ROOT_ID = \"".$CASE_CATEGORY_ROOT_ID."\";\r\n";
echo "var CASE_ASSESSMENT_ROOT_ID = \"".$CASE_ASSESSMENT_ROOT_ID."\";\r\n";
echo "var CASE_JUSTICE_ROOT_ID = \"".$CASE_JUSTICE_ROOT_ID."\";\r\n";
echo "var CASE_REFERALS_ROOT_ID = \"".$CASE_REFERALS_ROOT_ID."\";\r\n";
echo "var CASE_SERVICES_ROOT_ID = \"".$CASE_SERVICES_ROOT_ID."\";\r\n";
echo "var CASE_KNOW_ABOUT_116_ROOT_ID = \"".$CASE_KNOW_ABOUT_116_ROOT_ID."\";\r\n";
echo "var DISPOSITION_ROOT_ID = \"".$DISPOSITION_ROOT_ID."\";\r\n";

echo "var AGE_GROUP_ROOT_ID = \"".$AGE_GROUP_ROOT_ID."\";\r\n";
echo "var SEX_ROOT_ID = \"".$SEX_ROOT_ID."\";\r\n";
echo "var LOCATION_ROOT_ID = \"".$LOCATION_ROOT_ID."\";\r\n";
echo "var NATIONALITY_ROOT_ID = \"".$NATIONALITY_ROOT_ID."\";\r\n";
echo "var NATIONAL_ID_TYPE_ROOT_ID = \"".$NATIONAL_ID_TYPE_ROOT_ID."\";\r\n";
echo "var LANGUAGE_ROOT_ID = \"".$LANGUAGE_ROOT_ID."\";\r\n";
echo "var TRIBE_ROOT_ID = \"".$TRIBE_ROOT_ID."\";\r\n";

echo "var RELATIONSHIP_ROOT_ID = \"".$RELATIONSHIP_ROOT_ID."\";\r\n";
echo "var DISABILITY_ROOT_ID = \"".$DISABILITY_ROOT_ID."\";\r\n";
echo "var NOT_IN_SCHOOL_ROOT_ID = \"".$NOT_IN_SCHOOL_ROOT_ID."\";\r\n";
echo "var SHARES_HOME_ROOT_ID = \"".$SHARES_HOME_ROOT_ID."\";\r\n";
echo "var EMPLOYMENT_STATUS_ROOT_ID = \"".$EMPLOYMENT_STATUS_ROOT_ID."\";\r\n";
echo "var HEALTH_STATUS_ROOT_ID = \"".$HEALTH_STATUS_ROOT_ID."\";\r\n";
echo "var SCHOOL_TYPE_ROOT_ID = \"".$SCHOOL_TYPE_ROOT_ID."\";\r\n";
echo "var SCHOOL_LEVEL_ROOT_ID = \"".$SCHOOL_LEVEL_ROOT_ID."\";\r\n";
echo "var HIV_STATUS_ROOT_ID = \"".$HIV_STATUS_ROOT_ID."\";\r\n";
echo "var MARITAL_STATUS_ROOT_ID = \"".$MARITAL_STATUS_ROOT_ID."\";\r\n";
echo "var HOUSEHOLD_TYPE_ROOT_ID = \"".$HOUSEHOLD_TYPE_ROOT_ID."\";\r\n";

echo "var DISPOSITION_ID_COMPLETE = \"".$DISPOSITION_ID_COMPLETE."\";\r\n";
echo "var DISPOSITION_ID_FOLLOWUP = \"".$DISPOSITION_ID_FOLLOWUP."\";\r\n";

echo "var CASE_SERVICES_REFERAL_ID = \"".$CASE_SERVICES_REFERAL_ID."\";\r\n";


?>
</script>

</head>
<body id="vdd" style="height:100%;" onclick='undd(this);' >
<?php
echo "
<style>
";
include "screen.css";
echo "
</style>
<script>
";

echo "var VA_SIP_HOST = \"".$VA_SIP_HOST."\";\r\n";

include "js/te.js";
include "js/sel.js";
include "js/chk.js";
include "js/enum.js";
include "js/cal.js";
include "js/tf.js";
include "js/rpt.js";
include "js/chart.js";

include "app/user.js";
include "app/member.js";
include "app/contact.js";

include "app/phone.js";
include "app/cti.js";
include "app/ati.js";
include "app/call.js";

include "app/activity.js";

include "app/reporter.js";
include "app/perp.js";
include "app/client.js";
include "app/case.js";
include "app/case_activity.js";

include "app/app.js";


echo "</script>
";
?>
<div oncontextmenu=""><div id='vv' style="margin:10px;"></div></div>
<div class='g' id='lds'></div>
</body>
</html>
