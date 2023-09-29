<?php
//error_reporting(0);

define('ENVIRONMENT', 'production');
define('THE_DB_USN', 'apache');
define('THE_DB_PASSWD', '');
define('THE_DB_HOST', 'localhost');
define('THE_DB_NAME', 'helpline');
define('THE_APP_ID', 'hlp');
define('DAT', '/home/dat/helpline');

date_default_timezone_set('Africa/Kampala');

$VA_SIP_USER_PREFIX="";
$VA_SIP_PASS_PREFIX="23kdefrtgos09812100";
$VA_SIP_HOST = explode (":",$_SERVER["HTTP_HOST"])[0]; // $_SERVER["HTTP_HOST"];
$VA_ICE_HOST = "stun:192.168.1.22:3479";
$VA_AMI_HOST = "https://".explode (":",$_SERVER["HTTP_HOST"])[0].":8384/ami/"; 
$VA_ATI_HOST = "https://".explode (":",$_SERVER["HTTP_HOST"])[0].":8384/ati/";
$VA_AMI_HOST_WALLBOARD =  "https://".explode (":",$_SERVER["HTTP_HOST"])[0].":8384/ami/";

if (substr ($_SERVER["REMOTE_ADDR"],0,4)!="172.") $VA_ICE_HOST = "stun:stun.l.google.com:19302";

$APP_LOGO = "/helpline/images/sauti-logo.png";
$COUNTRY_CODE = "256";
$CASE_ID_PREFIX = "UCHL -";
$LOCATION_HIERARCHY = '"","Region","District","County","SubCounty","Parish","Village","Constitunecy"';

$API_GATEWAY_AUTH = "https://sauti.mglsd.go.ug/api/token/";
$API_GATEWAY_SEND_MSG = "https://sauti.mglsd.go.ug/api/chat/";
$API_GATEWAY_CLOSE_MSG = "https://sauti.mglsd.go.ug/api/chat/";

// --- CATEGORY ROOT IDs ---
$CASE_CATEGORY_ROOT_ID = "362557";	//
$CASE_ASSESSMENT_ROOT_ID = "236694";	//
$CASE_JUSTICE_ROOT_ID = "236687";	//
$CASE_REFERALS_ROOT_ID = "236707";	//
$CASE_SERVICES_ROOT_ID = "113";		//
$CASE_KNOW_ABOUT_116_ROOT_ID = "236700";//

$AGE_GROUP_ROOT_ID = "101"; 		//
$SEX_ROOT_ID = "120";			//
$LOCATION_ROOT_ID = "88";		//
$NATIONALITY_ROOT_ID = "126";		//
$NATIONAL_ID_TYPE_ROOT_ID = "362409";	//	
$LANGUAGE_ROOT_ID = "123";		//
$TRIBE_ROOT_ID = "133";			//

$RELATIONSHIP_ROOT_ID = "236634";	//
$DISABILITY_ROOT_ID = "236669"; 	//
$NOT_IN_SCHOOL_ROOT_ID = "362466";	//
$SHARES_HOME_ROOT_ID = "236631";	//
$EMPLOYMENT_STATUS_ROOT_ID = "236648"; 	//
$HEALTH_STATUS_ROOT_ID = "236660";	//
$SCHOOL_TYPE_ROOT_ID = "236711"; 	//
$SCHOOL_LEVEL_ROOT_ID = "236712";	//
$HIV_STATUS_ROOT_ID = "105"; 		//
$MARITAL_STATUS_ROOT_ID = "236654"; 	// 
$HOUSEHOLD_TYPE_ROOT_ID = "236674"; 	//

$DISPOSITION_ROOT_ID = "362515";        //

// --- CATEGORY IDs ---

$CASE_CATEGORY_ABUSE_ID = "87";
$CASE_CATEGORY_SEXUAL_ABUSE_ID = "362271";
$CASE_CATEGORY_PHYSICAL_N_SEXUAL_ABUSE_ID = "362263,362271";
$CASE_SERVICE_REFERAL_ID = "117";
$CASE_SERVICE_POLICE_ID = "362036";
$CASE_SERVICE_OTHER_ID = "362042";
$CASE_REFERAL_OTHER_ID = "362009";

$MARITAL_STATUS_WITH_SPOUSE_ID = "362019,236657,236658,362020,236656";

$DISPOSITION_ID_DEFAULT = "362527";  
$DISPOSITION_ID_COMPLETE = "362527";
$DISPOSITION_ID_FOLLOWUP = "362556";
$DISPOSITION_ID_EDIT = "362556";

?>
