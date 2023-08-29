
var APIPATH = "/helpline/api/";  

var UU = 
{
"login":{ 201:[["loadphone","ss"],["main","ss","vv"]], 401:[["login","user_","vv"]] },
"logout":{ 401:[["unloadphone","user_"],["login","user_","vv"]] },
"change_passwd":{ 202:[["change_passwd_vw","user_","vp"]], 412:[["nb","errors","v","nb"]] },
"reset_passwd":{ 202:[["nb","auth_nb","v","nb"]], 412:[["nb","errors","v","nb"]] },

"dash":{ 200:[["dash","dash"]] },
"dash_rpt_pie":{ 200:[["dash_rpt_pie","cases_rpt"]] },
"dash_rpt_line":{ 200:[["dash_rpt_line","cases_rpt"]] },
"dash_case_priority":{ 200:[["dash_case_priority","cases_rpt"]] },
"dash_calls_rpt_vw":{ 200:[["dash_calls_rpt_vw","calls_rpt"]] },
"dash_agent_name":{ 200:[["dash_agent_name","users"]] },

"wallonly":{ 200:[["wallonly","user_"]] },
"wall_rpt_vw":{ 200:[["wall_rpt_vw","calls_rpt"]] },
"wall_rpt_vw_sum":{ 200:[["wall_rpt_vw_sum","calls_rpt"]] },

"today":{ 200:[["today","user_"]] },

"chan_agent_stats":{ 200:[["chan_agent_stats","stats"]] },
"chan_agent_cid_name":{ 200:[["chan_agent_cid_name","users"]] },
"chan_add_ld":{ "203":[["chan_add_ld","action"]] },
"call_add_ld":{ "203":[["call_add_ld","action"]] },

"user_ed":{ 200:[["user_ed","users"]], 202:[["user_vw_id","users","vp"]], 412:[["nb","errors","v","nb"]] },
"user_new":{ 201:[["user_vw_id","users","vp"]], 412:[["nb","errors","v","nb"]] },
"user_vw_id":{ 200:[["user_vw_id","users"]] },
"user_la":{ 200:[["user_la","users_ctx"]] },
"user_lc":{ 200:[["user_lc","users_ctx"]] },
"user_lc_main":{ 200:[["user_lc_main","users_ctx"]] },
"user_ls":{ 200:[["user_ls","users_ctx"]] },
"user_list":{ 200:[["user_list","users_ctx"]] },
"users":{ 200:[["users","users_ctx"]] },

"contact_ed":{ 200:[["contact_ed","contacts"]], 202:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_new":{ 201:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_vw_id":{ 200:[["contact_vw_id","contacts"]] },
"contact_lc":{ 200:[["contact_lc","contacts_ctx"]] },
"contact_ls":{ 200:[["contact_ls","contacts_ctx"]] },
"contact_list":{ 200:[["contact_list","contacts_ctx"]] },
"contacts":{ 200:[["contacts","contacts_ctx"]] },

"qa_form":{ 201:[["qa_vw_id","qas","vp"]], 412:[["nb","errors","","nb"]] },
"qa_vw_id":{ 200:[["qa_vw_id","qas"]] },
"qa_list":{ 200:[["qa_list","qas_ctx"]] },
"qa_main":{ 200:[["qa_main","qas_ctx"]] },
"qas":{ 200:[["qas","qas_ctx"]], 201:[["qas","qas_ctx"]] },

"call_rpt_vw":{ 200:[["rpt_vw","calls_rpt"]] },
"call_rpt_count":{ 200:[["call_rpt_count","calls_rpt"]] },
"call_rpt":{ 200:[["call_rpt","rpts"]] },
"call_dispositioned":{ 201:[["call_dispositioned","activities","vp"]], 202:[["call_dispositioned","activities","vp"]], 412:[["nb","errors","v","nb"]] },
"call_case":{ 200:[["call_case","cases_ctx"]] },
"call_vw_id":{ 200:[["call_vw_id","calls"]] },
"call_lst":{ 200:[["call_lst","calls_ctx"]] },
"call_list":{ 200:[["call_list","calls_ctx"]] },
"call_main":{ 200:[["call_main","calls_ctx"]] },
"calls":{ 200:[["calls","calls_ctx"]], 201:[["calls","calls_ctx"]] },

"activity_message_send":{ 201:[["activity_message_send_ufn","messages","","sended"]] },
"activity_messages":{ 200:[["activity_messages_ufn","messages_ctx"]] },
"activity_call":{ 201:[["activity_call","activities"]], 202:[["activity_call","activities"]], 412:[["nb","errors","","nb"]] },
"activity_disposition":
{ 
	200:[["activity_disposition","subcategories_ctx"]], 
	201:[["uvpfn","activities","vp"]], 
	202:[["uvpfn","activities","vp"]], 
	412:[["nb","errors","","nb"]],
},
"activity_reporter": // on select contact
{ 
	201:[["activity_reporter","reporters"],["activity_case_tab_ufn","reporters","","nb"]], 
	202:[["activity_reporter","reporters"],["activity_case_tab_ufn","reporters","","nb"]], 
	412:[["nb","errors","","nb"]] 
}, 
"activity_case_list":{ 200:[["activity_case_list","cases_ctx"]] },
"activity_cases":{ 200:[["activity_cases","cases_ctx"]] },
"activity_contact_list":{ 200:[["activity_contact_list","contacts_ctx"]] },
"activity_contacts":{ 200:[["activity_contacts","contacts_ctx"]] },
"activity_match":
{ 
	200:[["activity_contacts","contacts_ctx","vfvw","vftab_reporter"], 
	     ["activity_cases","cases_ctx","vfvw","vftab_case"], 
	     ["activity_dispositions","dispositions_ctx","vfvw","vdispo"],
	     ["activity_dispositions_match","activities","vfvw","vdisposition"],
	     ["activity_src","activities","vfvw","vwsrc"],  
	     ["activity_match","activities"]] 
},
"activity_vw_id":{ 200:[["activity_vw_id","activities"]] },
"activity_lst":{ 200:[["activity_lst","activities_ctx"]] },


// ---


"case_history":{ 200:[["case_history","case_activities_ctx"]] },

"client_referal_del":{ 202:[["case_notif_del","client_referals"]], 412:[["nb","errors","v","nb"]] },
"referal_del":{ 202:[["case_notif_del","referals"]], 412:[["nb","errors","v","nb"]] },
"service_del":{ 202:[["case_notif_del","services"]], 412:[["nb","errors","v","nb"]] },

"case_attachment":{ 201:[["case_attachment","attachments"]] },
"case_attachment_new":{ 201:[["ufn_attach","files","va","nb"]], 412:[["nb","errors","","nb"]] },

"perpetrator_del":{ 202:[["case_notif_del","perpetrators"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_ed":{ 202:[["uvpfn","perpetrators","vp"]], 200:[["case_perpetrator_ed","perpetrators","vp"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_new":{ 201:[["uvpfn","perpetrators","vp"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_vw_id":{ 200:[["case_perpetrator_vw_id","perpetrators"]] },

"client_del":{ 202:[["case_notif_del","clients"]], 412:[["nb","errors","v","nb"]] },
"client_ed":{ 202:[["uvpfn","clients","vp"]], 200:[["case_client_ed","clients","vp"]], 412:[["nb","errors","v","nb"]] },
"client_new":{ 201:[["uvpfn","clients","vp"]], 412:[["nb","errors","v","nb"]] },
"client_vw_id":{ 200:[["case_client_vw_id","clients"]] },

"reporter_is_client":{ 201:[["case_reporter_is_client_ufn","clients"]], 412:[["nb","errors","v","nb"]] },
"reporter_ed":{ 200:[["case_reporter_ed","reporters","vp"]], 202:[["uvpfn","reporters","vp"]], 412:[["nb","errors","v","nb"]] },
"reporter_new":
{ 
	201:[["uvpfn","reporters","vp"]], 
	202:[["uvpfn","reporters","vp"]], 
	412:[["nb","errors","v","nb"]] 
},
"reporter_vw_id":{ 200:[["case_reporter_vw_id","reporters"]] },

"followup_update":
{ 
	200:[["followup_update","cases"]], 
	202:[["uvpfn","cases","vp"]], 
	412:[["nb","errors","v","nb"]]  
},
"followup_ed":
{ 
	200:[["followup_ed","cases"]],
	202:[["case_disposition_ufn","cases"],["followup_vw_id","cases","vftab"]], 
	412:[["nb","errors","v","nb"]]  
},
"followup_vw_id":{ 200:[["followup_vw_id","cases"]] },

"case_rpt_vw":{ 200:[["rpt_vw","cases_rpt"]] },
"case_rpt_count":{ 200:[["case_rpt_count","cases_rpt"]] },
"case_update":
{ 
	200:[["case_update","cases"]], 
	202:[["uvpfn","cases","vp"]], 
	412:[["nb","errors","v","nb"]]  
},
"case_ed":
{ 
	200:[["case_ed","cases"]], 
	202:[["case_vw","cases","vftab"]], 
	412:[["nb","errors","v","nb"]]  
},
"case_form":
{ 
	200:[["case_ed","cases"]], 
	201:[["activity_end","cases","vw"]], 
	202:[["activity_end","cases","vw"]], 
	412:[["nb","errors","v","nb"]]  
},
"case_vw_id":{ 200:[["case_vw_id","cases"]] },
"case_vw":{ 200:[["case_vw","cases"]] },
"case_list":{ 200:[["case_list","cases_ctx"]] },
"case_main":{ 200:[["case_main","cases_ctx"]] },
"cases":{ 200:[["cases","cases_ctx"]] },

// ---------------

"case_disability_lc_main":{ 200:[["case_disability_lc_main","subcategories_ctx"]] },
"case_disposition_lc_main":{ 200:[["case_disposition_lc_main","subcategories_ctx"]] },
"case_relationship_lc_main":{ 200:[["case_relationship_lc_main","subcategories_ctx"]] },
"case_justice_lc_main":{ 200:[["case_justice_lc_main","subcategories_ctx"]] },
"case_assessment_lc_main":{ 200:[["case_assessment_lc_main","subcategories_ctx"]] },
"case_referal_lc_main":{ 200:[["case_referal_lc_main","subcategories_ctx"]] },
"case_service_lc_main":{ 200:[["case_service_lc_main","subcategories_ctx"]] },
"case_sex_lc_main":{ 200:[["case_sex_lc_main","subcategories_ctx"]] },
"case_age_group_lc_main":{ 200:[["case_age_group_lc_main","subcategories_ctx"]] },
"case_location_lc_main":{ 200:[["case_location_lc_main","subcategories_ctx"]] },
"case_category_lc_main":{ 200:[["case_category_lc_main","subcategories_ctx"]] },


"subcategory_list":{ 200:[["subcategory_list","subcategories_ctx"]] },

"category_ed":{ 200:[["category_ed","categories"]], 202:[["category_vw_id","subcategories","vp"]], 412:[["nb","errors","v","nb"]] },
"category_new":{ 201:[["category_r","subcategories","va"]], 412:[["nb","errors","v","nb"]] },
"category_vw_id":{ 200:[["category_vw_id","categories"]] },
"category_lc":{ 200:[["category_lc","subcategories_ctx"]] },
"category_lsh":{ 200:[["category_lsh","subcategories_ctx"]] },
"category_lsh_root":{ 200:[["category_lsh_root","subcategories_ctx"]] },
"case_category_lsh_root":{ 200:[["case_category_lsh_root","subcategories_ctx"]] },
"category_ls":{ 200:[["category_ls","subcategories_ctx"]] },
"category_rr":{ 200:[["category_rr","subcategories_ctx"]] },
"category_list":{ 200:[["category_list","subcategories_ctx"]] },
"category_main":{ 200:[["category_main","subcategories_ctx"]] },

// --------

"messages":{ 200:[["messages","messages_ctx"]] },

"campaign_lc":{ 200:[["campaign_lc","campaigns_ctx"]] },
"campaigns":{ 200:[["campaigns","inbound_ctx"]] },

"inbound_ed":{ 200:[["inbound_ed","inbound"]], 202:[["campaign_vw_id","inbound","vp"]], 412:[["nb","errors","v","nb"]] },
"inbound_new":{ 201:[["campaign_vw_id","inbound","vp"]], 412:[["nb","errors","v","nb"]] },
"inbound_vw_id":{ 200:[["campaign_vw_id","inbound"]] },
"inbound_list":{ 200:[["inbound_list","inbound_ctx"]] },
"inbound_main":{ 200:[["inbound_main","inbound_ctx"]] },

"outbound_ed":{ 200:[["outbound_ed","outbound"]], 202:[["campaign_vw_id","outbound","vp"]], 412:[["nb","errors","v","nb"]] },
"outbound_new":{ 201:[["campaign_vw_id","outbound","vp"]], 412:[["nb","errors","v","nb"]] },
"outbound_vw_id":{ 200:[["campaign_vw_id","outbound"]] },
"outbound_list":{ 200:[["outbound_list","outbound_ctx"]] },
"outbound_main":{ 200:[["outbound_main","outbound_ctx"]] },

"shift_new":{ 201:[["shift_list","shifts_ctx","vv","vt_shift_list"],["vpclose","user_"]] },
"shift_list":{ 200:[["shift_list","shifts_ctx"]] },
"shift_main":{ 200:[["shift_main","shifts_ctx"]] },

"member_del":{202:[["noop","noop"]]},
"member_lst":{ 200:[["member_lst","members_ctx"]], 202:[["member_lst","members_ctx"]] },

"workinghour_ed":{ 200:[["workinghour_ed","workinghours"]], 202:[["workinghour_vw_r","workinghours","va"]], 412:[["nb","errors","v","nb"]] },
"workinghour_new":{ 201:[["workinghour_vw_r","workinghours","va"]], 412:[["nb","errors","v","nb"]] },
"workinghour_lst":{ 200:[["workinghour_lst","workinghours_ctx"]] },

"ooohour_ed":{ 200:[["ooohour_ed","ooohours"]], 202:[["ooohour_vw_r","ooohours","va"]], 412:[["nb","errors","v","nb"]] },
"ooohour_new":{ 201:[["ooohour_vw_r","ooohours","va"]], 412:[["nb","errors","v","nb"]] },
"ooohour_lst":{ 200:[["ooohour_lst","ooohours_ctx"]] },

"voicemap_del":{ 202:[["voicemap_del","voiceumaps","va"]], 412:[["nb","errors","v","nb"]] },
"voicemap_ed":{ 200:[["voicemap_ed","voicemaps"]], 202:[["voicemap_r","voicemaps","va"]], 412:[["nb","errors","v","nb"]] },
"voicemap_new":{ 201:[["voicemap_r","voicemaps","va"]], 412:[["nb","errors","v","nb"]] },
"voicemap_vw_r":{ 200:[["voicemap_vw_r","voicemaps"]] },
"voicemap_rr":{ 200:[["voicemap_rr","voicemaps_ctx"]] },

"voiceprompt_ed":{ 200:[["voiceprompt_ed","voiceprompts"]], 202:[["voiceprompt_vw_id","voiceprompts","vp"]], 412:[["nb","errors","v","nb"]] },
"voiceprompt_new":{ 201:[["voiceprompt_vw_id","voiceprompts","vp"]], 412:[["nb","errors","v","nb"]] },
"voiceprompt_vw_r":{ 200:[["voiceprompt_vw_r","voiceprompts"]] },
"voiceprompt_vw_id":{ 200:[["voiceprompt_vw_id","voiceprompts"]] },
"voiceprompt_ls":{ 200:[["voiceprompt_ls","voiceprompts_ctx"]] },
"voiceprompt_list":{ 200:[["voiceprompt_list","voiceprompts_ctx"]] },
"voiceprompt_main":{ 200:[["voiceprompt_main","voiceprompts_ctx"]] },

"dst_new":{ 201:[["dst_vw_id","dst","vp"]], 412:[["nb","errors","","nb"]] },
"dst_tag":{ 200:[["dst_tag","dst"]] },
"dst_ls":{ 200:[["dst_ls","voiceprompts_ctx"]] },

"voicefile_new":{ 201:[["voicefile_new","vfiles"]], 412:[["nb","errors","","nb"]] },

"moh_new":{ 201:[["moh_new","vfiles"]], 412:[["nb","errors","","nb"]] },

"vfile_vw_r":{ 404:[["vfile_not_found","user_"]] },

};

re["channels"] = {};
re["peers"] = {};
re["age_groups"] = [];
re["callfile_"] = [["","","","","","","","","","", "","","","","","","","","","", "/helpline/api/calls/","?file=wav"]];
re["vfile_"] = [["","","","","","","","","","", "","","","","","","","","","", "/helpline/api/vfiles/","?file=wav"]];
re["qa_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["activity_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["task_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["call_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["category_"] = [["","","","","","","","","","","","","","","","","","",""]];
re["workinghour_"] = [["","","","","","","","28800","61200","","","","","","","","",""]];
re["campaign_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["shift_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["voicefile_"] = [["","","","","","","","","","","","","","","","","","","","",""]];
re["voicemap_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["voiceprompt_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["user_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["chan_"] = [["","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","" ]];
re["reporter_"] = [["","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","0",  "","","","",""]];
re["r_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
"","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];

re["auth"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["activities_k"] = {};
re["cases_k"] = {};
re["reporters_k"] = {};
re["clients_k"] = {};
re["perpetrators_k"] = {};
re["contacts_k"] = {};
re["messages_k"] = {};
re["actions_k"] = {};

rk["dist"] = ["-","h","dt","wk","mn","yr"];
re["dist"] = 
{
"":["","None"],
"-":["-","Pie Chart"],
"h":["h","Hourly"],
"dt":["dt","Day"],
"wk":["wk","Week"],
"mn":["mn","Month"],
"yr":["yr","Year"],
};
rk["dash_call_dist"] = ["hour","-"];
re["dash_call_dist"] = re["dist"];

rk["sla"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla"] = 
{
"120+":["120+","140+",""],
"120":["120","120-139",""],
"100":["100","100-119",""],
"80":["80","80-99",""],
"60":["60","60-79",""],
"40":["40","40-59",""],
"20":["20","20-39",""],
"0":["0","0-19",""],
};

rk["sla_wait"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla_wait"] = re["sla"];

rk["hangup_reason"] = ["phone","usr","ivr","net"];
re["hangup_reason"] = 
{
"":["","",""],
"phone":["phone","Customer"],
"usr":["usr","Extension"],
"ivr":["ivr","IVR"],
"net":["net","Network"],
};

rk["hangup_status"] = ["answered","abandoned","dump","missed","ivr","noanswer","busy","network-error","voicemail","xfer_consult","xfer_noanswer","xfer_offline","xfer_ok"];
re["hangup_status"] = 
{
"":["","","","",""],
"answered":["answered","Answered","Answered","x y03 gg cw","","#4eb151"],
"abandoned":["abandoned","Abandoned","Abandoned","x y03 go cw","","#ffa500"],
"dump":["dump","Discarded","Dump","x y03 gr cw","","#B22222"],
"ivr":["ivr","IVR","","g","","#1E90FF"],
"missed":["missed","Missed","Missed","x y03 go cw","","#DC143C"],
"no-answer":["no-answer","Beep","No Answer","x y03 go cw","","#FFA07A"],
"noanswer":["noanswer","Beep","No Answer","x y03 go cw","","#ADD8E6"],
"busy":["busy","Busy","Busy","x y03 go cw","","#FF6347"],
"network-error":["network-error","Network Error","Network Error","x y03 gwd cb","","#FF00FF"],
"voicemail":["voicemail","Voicemail","Voicemail","x y03 gr cw","","#90EE90"], 
"xfer_consult":["xfer_consult","Consult","Consult","x y03 gg cw","","#20B2AA"],
"xfer_noanswer":["xfer_noanswer","Transfer No Answer","Transfer No Answer","x y03 go cw","","#20B2AA"],
"xfer_offline":["xfer_offline","Transfer Unavailable","Transfer Unavailable","x y03 go cw","","#20B2AA"],
"xfer_ok":["xfer_ok","Transferred","Transfer Successful","x y03 gg cw","","#20B2AA"],
"SCHED":["SCHED","Sched","Scheduled","x y03 gg cw","","#20B2AA"],
"Reattempt":["Reattempt","Reattempt","Reattempt","x y03 gg cw","","#20B2AA"],
};

rk["hangup_status_txt"] = rk["hangup_status"];
re["hangup_status_txt"] = re["hangup_status"];

rk["lead_status"] = ["answered","busy","dump","no-answer","network-error","voicemail","SCHED","Reattempt"];
re["lead_status"] = re["hangup_status"]; 


rk["vector"] = ["1","2"];
re["vector"] = 
{
"":["","","","","","","","","","","","","","","","","","","","",""],
"0":["0","","","","","","","","","","","","","","","","","","","",""],
"1":["1","Inbound","&#8702","From",  "Outbound","&#8701","To", "g","Outbound Call",,"c w50","c xx y08 bd8 ga cb","x08 y s cd"],
"2":["2","Outbound","&#8701","To",  "Inbound","&#8702","From", "","Inbound Call",,"d w50","d xx y08 bd8 gy cb","x08 y tr s cd"],
};

rk["user_role"] = ["1","2","3","4","5","99"];
re["user_role"] = 
{
"":["","","",""],
"0":["","","",""],
"1":["1","Counsellor","counsellor","2"],
"2":["2","Supervisor","supervisor","3"],
"3":["3","Case Manager","casemanager","4"],
"4":["4","Case Worker","caseworker","0"],
"5":["5","Partner","partner","0"],
"99":["99","Administator","admin","0"],
};

re["onbreak"] = 
{
"":["","Offline"],
"coffee":["coffee","Coffee Break"],
"lunch":["lunch","Lunch Break"],
"FX":["FX","On Break"],
};

rk["voiceprompt_type"] = ["1","2","3","4","5","6","7"];
re["voiceprompt_type"] = 
{
"":["","",			"",		"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],
"0":["0","-",			"-",		"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],
"1":["1","Playback",       	"Playback",  	"voiceprompt_r_branch",		"voicemap_rr_btn","voicemap_r_branch", 	"noop","noop","noop-noop-ve-type"],
"2":["2","Menu",		"Menu",		"voiceprompt_r_branch",		"voicemap_rr_btn","voicemap_r_branch", 	"noop","noop","noop-noop-ve-type"],
"3":["3","Capture Digits",	"DTMF",		"leaf", 	"branch_footer","leaf", 	"voiceprompt_vw_dtmf","voiceprompt_ed_dtmf","voiceprompt_ed_dtmf-voiceprompt_-ve-type"],  
"4":["4","Capture Voice",	"Record",	"leaf",		"branch_footer","leaf", 	"voiceprompt_vw_record","voiceprompt_ed_record","voiceprompt_ed_record-voiceprompt_-ve-type"], 
"5":["5","Dial Extension",	"Exten",	"leaf",		"branch_footer","leaf", 	"voiceprompt_vw_extension","voiceprompt_ed_extension","voiceprompt_ed_extension-voiceprompt_-ve-type"],
"6":["6","Dial Campaign Users",	"Queue",	"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],  
"7":["7","Invoke API",		"API",		"voiceprompt_r_branch", 	"voicemap_rr_btn","voicemap_r_branch", 	"voiceprompt_vw_api","voiceprompt_ed_api","voiceprompt_ed_api-voiceprompt_-ve-type"] 
};

rk["campaign"] = ["1","2"];  // match spefic date first then 
re["campaign"] = 
{
"":["","", "noop", "noop", "noop-noop-ve-type", "noop","", ""],
"1":["1","Inbound", "campaign_vw_inbound", "campaign_ed_inbound", "campaign_ed_inbound-campaign_-ve-type", "campaign_vw_id_menu_inbound","campaign_vw_tabs_inbound", "Inbound Campaign"],
"2":["2","Outbound", "campaign_vw_outbound", "campaign_ed_outbound", "campaign_ed_outbound-campaign_-ve-type", "campaign_vw_id_menu_outbound","campaign_vw_tabs_outbound", "Outbound Campaign"],
};


rk["workinghour_priority"] = ["","0","1","2","3","4","5"];  
re["workinghour_priority"] = 
{
"":["","",""],
"0":["0","Disabled","", "--"],
"1":["1","Out of Office","","OO"],
"2":["2","Working Hours","", "WH"],
"3":["3","Reattempt Hours","","RH"],
"4":["4","Holiday","","HD"],
"5":["5","Event","","EV"],
};

rk["workinghour_priority_inbound"] = ["2","0"];  
re["workinghour_priority_inbound"] = re["workinghour_priority"];

rk["workinghour_priority_outbound"] = ["2","3","0"];  
re["workinghour_priority_outbound"] = re["workinghour_priority"];

rk["ooohour_priority"] = ["1","4","5","0"];  
re["ooohour_priority"] = re["workinghour_priority"];


re["contact_fields"] = 
{
"fname":["fname","First Name"],
"lname":["lname","Last Name"],
"phone":["phone","Phone"],
};

re["dialstatus"] = 
{
"ANSWER":["ANSWER","Answered the call"],
"BUSY":["BUSY","is Busy"],
"NOANSWER":["NOANSWER","did Not-Answer"],
"CANCEL":["CANCEL","is Unavailable"],
"CHANUNAVAIL":["CHANUNAVAIL","is Unavailable"],
"DONTCALL":["DONTCALL","is Unavailable"],
"DONTCALL":["DONTCALL","is Unavailable"],
"INVALIDARGS":["INVALIDARGS","is Unavailable"]
};

rk["case_priority"] = ["1","2","3"];
re["case_priority"] = 
{
"":["","","",""],
"0":["","","",""],
"1":["1","Low","Low Priority",""],
"2":["2","Medium","Medium Priority",""],
"3":["3","High","High Priority",""],
};

rk["case_status"] = ["1","2","4"]; // case.final_status
re["case_status"] = 
{
"":["","",""],
"0":["","",""],
"1":["1","Ongoing","Ongoing"],
"2":["2","Closed","Closed"],
"3":["3","Escalated","Escalated to"],
"4":["4","Non Intervention","Non Intervention"]
};

rk["case_src"] = ["walkin","call","sms","email","safepal","whatsup","facebook","twitter"];
re["case_src"] = 
{
"":["","",""],
"walkin":["walkin","Walkin","/helpline/images/walkin.png",	"go","Walkin Open"],
"call":["call","Call","/helpline/images/oncall-white.png",	"ba_b bd cb","Call Activity"],
"sms":["sms","SMS","/helpline/images/sms_ico.png",		"go cw","SMS Open"],
"email":["email","Email","/helpline/images/email_ico.png",	"go cw","Email Activity"],
"safepal":["safepal","SafePal","/helpline/images/safepal_ico.png",	"gb cw","Safepal Activity"],
"whatsup":["whatsup","Whatsup","/helpline/images/watsap_ico.png",	"gb cw","Whatup Activity"],
"facebook":["facebook","Facebook","/helpline/images/fb_ico.png",	"gb cw","Facebook Activity"],
"twitter":["twitter","Twitter","/helpline/images/twitter_ico.png",	"gb cw","Twitter Activity"],
};


rk["reporter_action"] = ["newcase","casefollowup","service","info"];
re["reporter_action"] = 
{
"newcase":["newcase","New Case","c w14"],
"casefollowup":["casefollowup","Case Followup","c w14 l"],
"service":["service","Service","c w14"],
"info":["info","Information and Inquiry","c w18"],

}

re["disposition"] = 
{
"":["","",""],
"":["","",""],
"appreciation":["appreciation","Appreciation",""],
"abusive":["abusive","Abusive Call",""],
"adult_related":["adult_related","Adult Related",""],
"counsellor":["counsellor","Counsellor Request",""],
"complaint":["complaint","Complaint",""],
"dropped":["dropped","Dropped",""],
"feedback":["feedback","Feedback",""],
"greeting":["greeting","Greeting",""],
"inquiry":["inquiry","Inquiry",""],
"insuff":["insuff","Insufficient Information",""],
"mistake":["mistake","Mistake",""],
"prank":["prank","Prank",""],
"silent":["silent","Silent Call",""],
"telkom":["telkom","Telkom Support",""],
"testing":["testing","Testing Line",""],
"complete":["complete","Call Completed",""],
};

rk["incomplete_call"] = ["appreciation","abusive","adult_related","counsellor","complaint","dropped","feedback","greeting","inquiry","insuff","mistake","prank","silent","telkom","testing"];
re["incomplete_call"] = re["disposition"];

re["activity_status"] = 
{
"0-1-":["","Network Error"],
"1-1-":["","Busy"],
"2-1-":["","No Answer"],
"3-1-":["","Answered"],
"4-1-":["","Answered"],
"5-1-":["","Answered"],
"6-1-":["","Answered"],
"7-1-":["","Answered"],
"8-1-":["","Answered"],
"0-2-":["","Error"],
"1-2-":["","Busy"],
"2-2-":["","Missed"],
"3-2-":["","Answered"],
"4-2-":["","Answered"],
"5-2-":["","Answered"],
"6-2-":["","Answered"],
"7-2-":["","Answered"],
"8-2-":["","Answered"],
"0-2-0":["","Error"],
"1-2-0":["","Busy"],
"2-2-0":["","Missed"],
"3-2-0":["","Answered"],
"4-2-0":["","Answered"],
"5-2-0":["","Answered"],
"6-2-0":["","Answered"],
"7-2-0":["","Answered"],
"8-2-0":["","Answered"],
"0-2-1":["","Error"],
"1-2-1":["","Busy"],
"2-2-1":["","Missed"],
"3-2-1":["","Answered"],
"4-2-1":["","Answered"],
"5-2-1":["","Answered"],
"6-2-1":["","Answered"],
"7-2-1":["","Answered"],
"8-2-1":["","Answered"],

};

rk["qa_done"] = ["-1","0","1"];
re["qa_done"] = 
{
"":["",""],
"-1":["-1","N/A"],
"0":["0","No"],
"1":["1","Yes"],
};

rk["dash_period"] = ["today","this_week","this_month","last_3_month","last_6_month","last_9_month","this_year","all"];
re["dash_period"] =
{
"today":["today","Today"],
"this_week":["this_week","This Week"],
"this_month":["this_month","This Month"],
"last_3_month":["last_3_month","Last 3 Months"],
"last_6_month":["last_6_month","Last 6 Months"],
"last_9_month":["last_9_month","Last 9 Months"],
"this_year":["this_year","This Year"],
"all":["all","All"],
};

rk["dash_gbv"] = ["both","vac","gbv"];
re["dash_gbv"] = 
{
"both":["both","Both VAC & GBV"],
"vac":["vac","VAC Only"],
"gbv":["gbv","GBV Only"]
};

rk["dash_src"] = ["all","call","sms","social","email","walkin"];
re["dash_src"] = 
{
"all":["all","Total","go", "/helpline/images/case.png", ":k:case_source:total:1"],
"call":["call","Calls","", "/helpline/images/bxs-phone-call.png", ":k:case_source:call:1"],
"sms":["sms","SMS","", "/helpline/images/sms.png", ":k:case_source:sms:1"],
"social":["social","Social Media", "", "/helpline/images/chat.png", ":k:case_source:socialmedia:1"],
"email":["email","Email", "", "/helpline/images/envelope-fill.png", ":k:case_source:email:1"],
"walkin":["walkin","Walkin", "gg", "/helpline/images/walkin.png", ":k:case_source:walkin:1"],
};

rk["case_type"]	= ["87","361944","362305"];
re["case_type"]	=
{
"":["","","noop","noop", 					"","","noop", "noop-r_-va-sub"],
"0":["","","noop","noop", 					"","","noop", "noop-r_-va-sub"],
"87":["87","Abuse","case_vw_justice","case_ed_sub_justice",  	"CASE","Abuse Case","case_abuse_enum", 		"case_ed_sub_type-r_-va-sub"],
"361944":["361944","Counseling","noop","noop", 			"COUNSELING","Counseling","case_counseling_enum", "case_ed_sub_type-r_-va-sub"],
"362305":["362305","Information Inquiry","noop","noop", 	"INQUIRY","Inquiry","case_inquiry_enum", 	"case_ed_sub_type-r_-va-sub"],
};

re["case_activity"] =
{
"1":["1","Case Created"],
"2":["2","Case Update"],
"3":["3","Case Edit"],
"4":["4","Case Change Type"],
"6":["6","Client Added"],
"7":["7","Perpetrator Added"],
"8":["8","Attachment Added"],
"9":["9","Reporter Updated"],
"10":["10","Client Updated"],
"11":["11","Perpetrator Updated"],
"12":["12","Attachment Updated"],
"13":["13","Client Deleted"],
"14":["14","Perpetrator Deleted"],
"15":["15","Attachment Deleted"]	
};


re["reporter_is_client"] = 
{
"":["","No","Is Not","","","",""],
"0":["0","No","Is Not","","","",""],
"1":["1","Yes","Is","is_reporter","x cd","Reporter","1"],
};

rz["location"] = ["","Region","District","Ward","Village"];


re["metrics"] = 
{
"case_count":["case_count", "Case Count","Case Count","",			"cases","","case_count", 		"","",,"", "0","","",""], 
"call_count":["call_count", "Call Count","Call Count","",			"calls","","call_count", 		"","",,"", "0","","",""], 
};
// -------------------------------------------------------------------

te["unloadphone"] = { ufn:["unloadphone"] };

te["loadphone"] = { ufn:["loadphone"] };

// -------------------------------------------------------------------

te["vp_apply"] = { div:["x20 tt b20"], c: // 
[
	{ div:["d x20"], c:[ { ac:["ag btn w06",null,"_applyf","x y04 w05 gb cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
	{ div:["d x","va"], ac:["ay","","_uvp","x y03 w05 ba tc cd","Cancel"] },
	{ div:["e"] }
]};

te["vp_sav"] = { div:["t30"], c:
[
	{ div:["d l20"], c:[ { ac:["ag btn",null,"_postj","x15 y gb cw tc",null] }, { s:["y b savl",null] } ] },
	{ div:["d","va"], ac:["ay",null,null,"x y04 w05 ba tc gw cd",""], c:
	[
		{ s:["","Cancel"] },
		{ p:["g","o"], arg:["",".id","%0"] }
	]},
	{ div:["e"] }
]};

te["vp_save"] = { div:["t30"], c:
[
	{ div:["d"], s:[null,""], c:
	[
		{ ac:["ao btn",null,"_postj","y gb cw tc",null] },
		{ s:["y b savl",null] }
	]},
	{ div:["d x20","va"], ac:["ay",null,null,"x y04 w05 ba tc gw cd",""], c:
	[
		{ s:["","Cancel"] },
		{ p:["g","o"], arg:["",".id","%0"] }
	]},
	{ div:["e"] }
]};

// -----------------------------------------------------------------

te["tabi"] = { div:[null], c: 	
[
	{ input:["g","",null,null,"radio",null] },
	{ li:["y ba cb tc tabi",null], ev:[null], c:
	[
		{ s:["",null] },
		{ arg:["",".id","%0"] }
	]},
]};

te["tab"] = { c:
[
	{ arg:["","",""] }, // ts
	{ input:["g","",null,null,"radio",null] },
	{ li:[null,null], ev:["_tab"], c:
	[
		//{ div:["c"], c:[ { img:["","",null,"20"] } ] },
		{ s:[null,null] },
		{ div:["e"] } // , arg:["_c","","30"] }
	]},
]};

// --------------------------------------------------------------------

te["change_passwd_vw"] = { div:["w45 ma bd sh__ gw","vddvw"], ev:["_undd"], c:
[
	{ div:["xx y"], c:
	[
		{ s:["c xx yy b cg","Password Changed Successful"] },
		{ ac:["d w03 ay y","","_uvp","x y tc h3 cbl bd","&Cross;"] },
		{ div:["e"] }
	]},
]};

te["change_passwd"] = { div:["w50 ma bd sh__ gw"], c:
[
	{ s:["x20 y15 b","Change Password"] },
	{ div:["","ve"], s:["x25 b20 gw",""], c:
	[
		{ div:[], c:[ { p:["c w40","nb"], u:["nb","users_nb"] }, { div:["e"] } ] },
		{ p:["","o"], c:
		[
			{ div:["t15"], c:
			[
				{ s:["c w15 y","Current Password"] }, { passwd:["d w25 gw ba","w25 x y","","pass0",""] }, { div:["e"] }
			]},
			{ div:["t15"], c:
			[
				{ s:["c w15 y","New Password"] }, { passwd:["d w25 gw ba","w25 x y","","pass1",""] }, { div:["e"] }
			]},
			{ div:["t15"], c:
			[
				{ s:["c w15 y","Confirm Password"] }, { passwd:["d w25 gw ba","w25 x y","","pass2",""] }, { div:["e"] }
			]},
		]},
		{ vp_save:["w15","change_passwd-changeAuth","Change Password","Saving...","myprofile-user_","_vp"] }
	]}
]};

te["myprofile"] = { div:["w70 ma bd sh__ gw","vddvw"], ev:["_undd"], c:
[

	{ div:["x15 y15"], c:
	[
		{ s:["x yy b cb h2","My Profile"] },
		{ ac:["","change_passwd-user_","_vp","x y",""], c:
		[
			{ s:["","Change Password"] },
			{ div:[] }
		]},
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c xx yy w40 gw mb mr10 g"], c:
		[
			{ s:["x yy","Active Campaigns"] },
		]},
		{ div:["c xx yy w40 gw mb mr10"], c:
		[
			{ s:["x y","Availability"] },
			{ s:["x y","Answered Calls"] },
			{ s:["x y","Missed Calls"] },
			{ s:["x y","Average Talk Time"] },
			{ s:["x y","Max Talk Time"] },
			{ s:["x y","Average Hold Time"] },
			{ s:["x y","Max Hold Time"] },
			{ s:["x y","Total Break Time Today"] },
			{ s:["x y","Average "] },
		]},
		{ div:["e"] }
	]},
	{ div:["x15 yy g"], c:
	[
		{ s:["x yy c b","Availability History"] }

	]}


]};

// -------------------------------------------------------------------

te["dash_agent_name"] = { s:["",":v:users:usn"] };

te["dash_agent"] = { p:["bb_ bl_ br_",":v:users:exten"], c:
[ 
	{ div:["abs w35_"] }, // ami chan
	{ arg:["","",":v:users:usn"] },
	{ input:["g","optc","chvw0","%2","radio",""] }, 
	{ li:["x y02 cd"], c:			
	[
		{ div:["c w12"], c:[ { s:["c x y",":v:users:exten"] }, { s:["c x y",":v:users:usn"] } ] },
		{ s:["c x y g",""] },
		{ s:["c x y g",""] },	// vector
		{ s:["c x y",""] },		// cid2
		{ s:["d x y",""] },		// status-duration
		{ arg:["ts","",":v:users:last_break_ts"] }, 		// status-ts
		{ s:["d x y s",":v:users:last_break"] }, 		// status-text
		{ div:["e"] }
	]},
	{ div:[] }
]};

te["dash_agent_count"] = { s:["d y","%2"] };

// ----------------------------------------------------------------

rk["dash_inbound_metrics"] = ["in_calls","in_uniq","in_attempts","in_sla","in_avg_wait","in_avg_talk","in_avg_hold","in_occupied","in_available","disposition"];
re["dash_inbound_metrics"] = re["metrics"] ;
te["wall_inbound_args"] = { arg:["","vector","1"] };

te["dash_rpt_distf_r"] = { div:[], c:
[
        { input:["g","","distf","%0","radio","%9"] },
        { li:["opta x y tr cb","","%1"], ev:["_rpt_opt"] }
]};

te["dash_rpt_metric_r"] = { div:["c r15"], c:
[
        { input:["g","","rpt","%0","radio","%9"] },
        { li:["optt x03 y tc cd s"], ev:["_rpt_opt"], c:
        [
                { s:["c","%2"] },
                { s:["c l","%3"] },
                { div:["e"] }
        ]}
]};

te["dash_rpt_stats_r"] = { div:["c r15"], c:
[
        { input:["g","","rpt","stats","radio","1"] },
        { li:["optt x03 y tc cd s"], ev:["_rpt_opt"], c:
        [
                { s:["c","Stats"] },
                { s:["c l",""] },
                { div:["e"] }
        ]}
]};

te["dash_rpt_type_r"] = { div:[], c:
[
        { input:["g","","type","%0","radio","%9"] },
        { ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
        [
                { div:["c w02 t"], s:["opt",""] },
                { s:["c w10 y ","%1"] },
                { div:["e"] }
        ]}
]};

te["wall_vw_chart"] = { div:["y30"], c:[ { canvas:["","","",""], uchart:[] } ] };

te["wall_rpt_vw"] = { c:
[
	{ pivot:[] },
	{ div:[], usummary:[] },
	//{ div:["y30"], c:[ { canvas:["","","",""], uchart:[] } ] }
	{ ufn:["wall_stats_ufn"] }
]};

te["wall_rpt"] = {  c:
[
        { form:["","vrpt"], c:
	[
		{ s:["g x15 y h3",null] },
		{ arg:["","type",null] }, 
		{ arg:["","stacked",null] },
		{ arg:["","xaxis",null] },
		{ arg:["","yaxis",null] },
		//{ arg:["","metrics",null] },
		{ input:["g","","rpt",null,"checkbox","1"] },
		{ u:[null] }
	]},
	{ div:["",null], urpt:[] } 	
]};

te["wall_case_stat"] = { div:[null], c:
[ 
	{ s:["w15 yy",""], c:
	[
		{ s:["y tc hh b",null] },
		{ s:["y tc tu h03",null] }
	]},

	{ ucolor:[null] }
]};

te["wall_case_stats"] = { c:
[
	{ div:["tt"], c:
	[
		{ wall_case_stat:["c cw bd mr mb",":k:stats:responsive_calls_today","Today's Responsive Calls","rgba(0,115,183,1)"] },
                { wall_case_stat:["c cw bd mr mb",":k:stats:cases_today","Today's Cases","rgba(255,165,0,1)"] },
		{ div:["e"] }
	]},
	{ div:[], c:
        [
                { wall_case_stat:["c  cw bd mr mb",":k:stats:cases_ongoing_total","Ongoing Cases","rgba(221,75,57,1)"] },
                { wall_case_stat:["c  cw bd mr mb",":k:stats:cases_closed_this_month","Month Closed Cases","rgba(78,177,81,1)"] },
                { div:["e"] }
        ]},
	{ div:[], c:
        [
	       { wall_case_stat:["c  cw bd mr mb",":k:stats:has_case_id_1","Responsive Calls","rgba(0,0,0,1)"] },
               { wall_case_stat:["c cw bd mr mb",":k:stats:has_case_id_0","Non Responsive Calls","rgba(0,0,0,1)"] },
               { div:["e"] }
        ]}
]};

/*te["wall_case_stats"] = { c:
[
	{ div:["tt"], c:
	[
		{ wall_case_stat:["c cw bd mr mb","%5","Today's Cases","rgba(0,115,183,1)"] },
                { wall_case_stat:["c cw bd mr mb","%1","Pending Cases","rgba(255,165,0,1)"] },
                //{ wall_case_stat:["c cw bd mr mb","-","Queue Calls","rgba(0,0,0,1)"] },
		{ div:["e"] }
	]},
	{ div:[], c:
        [
                { wall_case_stat:["c  cw bd mr mb","%3","Escalated Cases","rgba(221,75,57,1)"] },
                { wall_case_stat:["c  cw bd mr mb","%2","Closed Cases","rgba(78,177,81,1)"] },
//                { wall_case_stat:["c  cw bd mr mb","%0","All Cases","rgba(0,0,0,1)"] },
                { div:["e"] }
        ]},
	{ div:[], c:
        [
//               { wall_case_stat:["c cw bd mr mb","0","Total Emails","rgba(0,192,239,1)"] },
//               { wall_case_stat:["c cw bd mr mb","0","Total SMS","rgba(0,192,239,1)"] },
	       { wall_case_stat:["c  cw bd mr mb","%0","All Cases","rgba(0,0,0,1)"] },
               { wall_case_stat:["c cw bd mr mb","%4","Totals Calls","rgba(0,0,0,1)"] },
               { div:["e"] }
        ]}
]};*/

te["wall_args_inbound"] = { c:[ { arg:["","vector","1"] } ] };

te["wall_calls"] = { div:["ma x15 y15"], c: // 
[
	
	{ div:[""], c:
        [
		{ p:["","wall_rpt_call"], wall_rpt:["Today's Call Traffic","bar","stacked","hangup_status_txt","h","call_count","wall_args_inbound","wall_rpt_vw-wallonly"] },
        ]},

	{ div:["tt"], s:["ml800 l50",""], c:[ { p:["abs t70 ","wall_case_stats"], wall_case_stats:[] } ] }, // case stats here
	
	{ div:["bt3_bl_"], s:["abs w80 t15",""], c:
	[
		{ div:["x y"], c:
		[
			{ div:["y07 h3 "], c:
			[
				{ s:["c x y","Counsellors Online"] },
				// { u:["dash_agent_count","users_ctx"] },
				// { s:["d x y","of"] },
				{ s:["d x y","0"] },
				{ div:["e"] }
			]},
			{ div:["x y02 b cd "], c:
			[
				{ s:["c w03 x y","Ext."] },
				{ s:["c w11 x y","Name"] },
				{ s:["c w12 x y","Caller"] },
				{ s:["c w08 x y tr","Answered"] },
				{ s:["c w08 x y tr","Missed"] },
				{ s:["c w08 x y tr","Talk Time"] },
				{ s:["d w08 x y tr","Duration"] },
				{ s:["d w10 x y tr","Queue Status"] },
				{ div:["e"] }
			]},
			{ p:["","vagents"], c: // 
			[
				//{ s:["x y s gww" ,"No Agents Available"] },
				// { u:["dash_agent","users","","users"] }
			]},
		]},
		
		{ div:["x t15"], c:
		[
			{ div:["y07 h3 bb_"], c:
			[
				{ s:["c x y","Calls in Queue"] },
				{ s:["d x y","0"] },
				{ div:["e"] }
			]},
			{ p:["mb","vqueued"] },
			{ div:["g y03"], c:
			[
				{ s:["c x y03 s","Queue Max Wait Time"] },
				{ s:["d x y03 s",":k:stats:in_max_wait:h"] },
				{ div:["e"] }
			]},
			{ div:["y02 b g"], c: // 
			[
				{ s:["c x y03 b  ","Inbound Calls"] },
				{ s:["d xx y03","0"] },
				{ div:["e"] }
			]},
			{ p:["mb","vinbound"] },
	
			{ div:["y02 s b g"], c:
			[
				{ s:["c x y03","Active Outbound Calls"] },
				{ s:["d x y03","0"] },
				{ div:["e"] }
			]},
			{ p:["mb g","voutbound"] }, // outbound	
		]},

		{ div:["x y cd"], c:
		[
			{ s:["c x y","Queue Avg Wait Time"] },
			{ s:["d x y",":k:stats:in_avg_wait:h"] },
			{ div:["e"]}			
		]},

		{ div:["t40","wall_vw_chart"] }

	]},
]},

te["wallboard"] = { c:
[
	{ div:[] },
	{ div:[], c:
	[
		{ arg:["","dash_period","today"] }
	]},
	{ div:["gww h100"], c:
	[
		{ div:[], c:[ { input:["g","","tabv","0","radio","1"] }, { p:["tabv mt","vt"], wall_calls:[] } ] },
		{ div:[], c:[ { input:["g","","tabv","1","radio"] }, { p:["tabv","vt"] } ] }, // wall my profile
	]}
]};

te["wallonly"] = { c:
[
        { div:["","vftab"], wallboard:[] },

        { div:["g"], c:
        [
                { arg:["user_cid","","---"] },
                //{ iframe:["","","http://192.168.8.201:8383/ami/"] },
                { iframe:["","",VA_AMI_HOST_WALLBOARD] },
        ]},
]};


// --------------------------------------------------------------------

te["dash_case_priority_vw_r"] = { div:["w50 gws mb1 h03"], c: // 
[
	{ s:["abs w50",""], c:
	[
		{ div:[null] },
		{ div:[null] },
		{ div:[null] },
		{ div:["e"] }
	]},
	{ div:["abs w55 t08 cw"], c:
	[
		{ s:["c xx w48 cw",null] },
		{ s:["d xx cb",""] },
		{ div:["e"] }
	]}
]};

te["dash_case_priority_vw"] = { c:
[
	//{ div:["xx g"], c:
	//[
	//	{ div:["c w17 cd"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gg",""] },
	//		{ s:["c x","Closed Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 go",""] },
	//		{ s:["c x","Ongoing Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gbl",""] },
	//		{ s:["c x","Escalated Cases"] },
	//		{ div:["e"] }
	//	]},
	//				
	//	{ div:["e"] }
	//]},
	
	{ div:[] }, 
				
	{ div:["x"], c:  // 
	[
		{ dash_case_priority_vw_r:["c h02 y gg bb3_y","c h02 y gg bb3_p","c h02 y gg bb3_r","Closed Cases"] },
		{ dash_case_priority_vw_r:["c h02 y go bb3_y","c h02 y go bb3_p","c h02 y go bb3_r","Ongoing Cases"] },
		{ dash_case_priority_vw_r:["c h02 y gbl bb3_y","c h02 y gbl bb3_p","c h02 y gbl bb3_r","Escalated Cases"] },
	]},
				
	{ div:["x y"], c: 
	[
		{ ac:["c w11 ao mr1","","","xx y cb bd gws bb3_y",""], c:[ { s:["y tc n","Low Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_p",""], c:[ { s:["y tc n","Medium Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_r",""], c:[ { s:["y tc n","High Priority"] }, { s:["y b tc h","0"] }] },				
		{ ac:["c w12 ao","","","xx yy gb cw bd ",""], c:[ { s:["tc h3","Total"] }, { s:["y b tc h","0"] }] },
		{ div:["e"]}
	]}
]};		

te["dash_case_priority"] = { c:
[
	{ pivot:[] },
	{ dash_case_priority_vw:[] },
	{ ufn:["case_prio_chart"] }
]};

te["dash_rpt_line"] = { c:
[
	{ pivot:[] }, 
	{ div:["w55"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["w55 yy"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt_pie"] = { c:
[
	{ pivot:[] }, 
	{ div:["c w22"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["d ll"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt"] = { c: // dash_rpt:["Case Categories","bar","stacked","case_category_root_id","-","count","0","dash_rpt_pie-cases"]
[ 
	{ form:["yy","vrpt"], c:
	[
		{ s:["x15 y h3",null] },
		{ arg:["","type",null] }, 
		{ arg:["","stacked",null] },
		{ arg:["","xaxis",null] },
		{ arg:["","yaxis",null] },
		//{ arg:["","metrics",null] },
		{ input:["g","","rpt",null,"checkbox","1"] },
		{ arg:["","sortrpt","1"] }
	]},
	{ div:["xx yy",null], urpt:[] } 
]};

te["dash_src_r"] = { div:[], c:
[
	{ input:["g","","dash_src","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x y bd gw cb mb",""], c:
	[
		{ s:["x y tc","%1"] },
		{ div:["x y w03 ma"], s:["%2",""], c:[ { img:["","","%3","30"] } ] },
		{ s:["x y b tc h3 h02","%4"] }
	]}
]};

te["dash_gbv_r"] = { div:[], c:
[
	{ input:["g","","dash_gbv","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_period_r"] = { div:[], c:
[
	{ input:["g","","dash_period","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_view"] = { c:
[
	{ div:["c wp50"], s:["r05",""], c:
	[
		{ div:["x y bd gw mb","vc"], dash_rpt:["Case Categories","bar","stacked","cat_0","-","case_count","dash_rpt_pie-cases"] },	
		{ div:["x y bd gw mb","vc"], dash_rpt:["Daily Cases","line","stacked","src","dt","case_count","dash_rpt_line-cases"] }		
	]},
	{ div:["c wp50"], s:["r05",""], c:
	[
		{ div:["x y bd gw mb","vc"], dash_rpt:["Case per Location","bar","stacked","reporter_location_0","-","case_count","dash_rpt_pie-cases"] },
		{ div:["x y bd gw mb","vc"], dash_rpt:["Case Status","bar","stacked","final_status,priority","-","case_count","dash_case_priority-cases"] },			
	]},
	{ div:["e"] }	
]}

te["dash"] = { c:
[
	{ div:[] },
	{ div:["abs w14_ x y","vdf"], c: // filter params
	[
		{ div:["mb"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x bd gw cb",""], c:
			[
				{ s:["c l y","::dash_period:0:1"] },
				{ div:["d w02 t04"], c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] },
				{ s:["x b05 cd s",":d:dmy:3: "] }
			]},
			{ div:["dd w13 y ba gw bd","vdd"], c:
			[
				{ div:["c w13"], c:
				[
					{ uchk:["dash_period_r","%0","dash_period"] }
				]},
				{ div:["e"] }
			]},
		]},
		
		{ div:["mb"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x bd gw cb",""], c:
			[
				{ s:["c l y","::dash_gbv:1:1"] },
				{ div:["d w02 t04"], c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]},
			{ div:["dd w13 y ba gw bd","vdd"], c:
			[
				{ uchk:["dash_gbv_r","%1","dash_gbv"] }
			]},
		]},							 

		{ uchk:["dash_src_r","%2","dash_src"] },
		
		{ arg:["","created_on","%3"] },
		{ arg:["","gbv_related","%4"] },
		{ arg:["","src","%5"] }
		
	]},
	{ div:["ml15 y"], dash_view:[] }
]};

// ------------------------------------------	

te["sbl"] = { div:[null], c: //
[
	{ input:["g","","sbl",null,"radio",null] },
	{ ac:["sbl ao",null,"_tab","yy cw",""], c: // todo: on hover show name
	[
		{ img:["l20","",null,"20"] },
		{ s:[" tc s",null] },
		{ u:[null] }
	]},
]};

te["sbl_case"] = { arg:["","_title","all_cases"] };

te["user_cid"] = { arg:["user_cid","","%7"] }; 

te["user_usn"] = { div:[], c:[ { s:["d xx y cb b","%5"] }, { div:["e"] } ] }; 

te["toolbar_default"] = { div:["ma w12"], c:
[
	{ input:["g","","sbl_","1","radio","1"] },
	{ input:["g","","sbr_","1","radio"] },
	{ ac:["abs mtn45 ao t08 w12","","_activity_vw","xx bd gg cw",""], c:
	[
		{ s:["c y","Walk In"]},
		{ div:["d t"], c:[ { img:["","","/helpline/images/walkin.png", "18"] } ] },
		{ div:["e"], c:[ { arg:["",".id","-1"] }, { arg:["","src","walkin"] } ] }
	]},
]};
			
te["main"] = { c: 
[
	{ div:["x y07 gw sh"], c: // c
	[
		{ div:["c "], s:["",""], c:
		[
			{ a:["c aa","","","/helpline/"], c:[ { img:["","",APP_LOGO, "48"] } ] },
			{ div:["e"] }
		]}, 		
			
		{ div:["d r10"], c:
		[
			{ input:["g","","ntab","0","radio"] },
			{ ac:["ll ay rb","","_notif","gw bd x y micon h2_ cb","history"] }				
		]},
		
		{ div:["d mr"], c:
		[
			{ input:["g","","ntab","1","radio"] },
			{ ac:["l15 ay rb","","_notif","gw bd cb",""], c:
			[
				{ p:["abs g","notif_count"], s:["ml2 x07 y02  h01_ tc gr cw bd16 s",""] },
				{ s:["x y micon h2_","notifications"] }				
			]},
		]},
					
		{ div:["d w18 t01"], s:["abs w18 zzzzz",""], c:
		[
			{ div:["ay","va"], ac:["","","_dd","w18 bd gws",""], c:
			[
				{ p:["c w13","agent_status"], agent_offline:[] },
				{ s:["d xx y micon h2_ cb","person"] },						
				{ div:["e"], u:["user_cid","auth"] }
			]},
			{ div:["g w18","vdd"], s:["xx yy gw ba",""], c:
			[	
				{ div:[""], u:["user_usn","auth"] }, // 

				{ p:["tr","phone_status"], s:["xx y cd","Checking Phone Status ..."] },

				{ p:["tr","ati_status"] },

				{ div:["","ve"], ac:["aa","agent-agent","_postj","xx y cb tr","Join Queue"], c:[ { p:["","o"], c:[ { arg:["","action","1"] } ] } ] },
				{ div:["","ve"], ac:["aa","agent-agent","_postj","xx y cb tr","Leave Queue"], c:[ { p:["","o"], c:[ { arg:["","action","0"] }, { arg:["","break","coffee"] } ] } ] },
				
				{ div:["","va"], ac:["aa","myprofile-r_","_vp","xx y cb tr",""], c:
				[
					{ s:["","My Profile"] },
					{ div:[] }
				]},
						
				{ div:["","va"], ac:["aa","logout-","_u","xx y cb tr","Logout"], c:[ { arg:["","logout","1"] } ] },
			]},	

		]},

		{ div:["e"] }
	]},
	
	{ div:["gw","vb"], toolbar_default:[] },
	
	{ div:["g"], c:  // 
	[
		{ div:["d w28"], s:["abs zzzz w28 gw bd mt",""], c:
		[
			{ div:[], c:
			[
				{ div:[], c:
				[
					{ input:["g","","ntabv","0","radio"] },
					{ div:["tabv"], c:
					[
						{ div:[""], c:
						[
							{ div:["bb y","va"], s:["",""], c:
							[
								{ s:["c l15 y08 cb","Activities"] },
								// { ac:["c x t08 ay","","_dd","h02 w02 awb",""] },
								//{ ac:["d ay","","","x y bd_",""], c:[ { img:["","","/helpline/images/settings_black.png","18"] } ] },
								{ div:["e"] }
							]},
							{ div:["dd x y ba gw","vdd"], c:
							[
								{ ac:["w12","","","x y cb","Search"] },
							]}
						]},
						{ p:["","vt_activity"], u:["activity_lst","activities_ctx"] },
						{ div:[] }
					]}
				]},
				{ div:[], c:
				[
					{ input:["g","","ntabv","1","radio"] },
					{ div:["tabv"], c:
					[
						{ div:["gw bb_ x y07"], c:
                        			[
                        	        		{ ac:["c w03 ay","","","x07 y",""],  c:[ { img:["","","/helpline/images/search.png","","18"] } ] },
                        	        		{ div:["c w21","txa"], c:[ { input:["w21 xx t08 b05 gw n","name_","","0110223344","text","","Dial"] } ] },
                        	        		{ ac:["d w03 ay","","_dial","x07 y ",""],  c:[ { img:["","","/helpline/images/call.png","","18"] } ] },
                        	        		{ div:["e"] },
                        			]},
						{ p:["","call_sessions"] }, // el.p.p.p.f.c1.c1
					]}
				]}
			]},
			{ div:["y gw bt_ g"], c:
			[
				{ ac:["c l ay","","","x y tc w07 cd s",""], c:[ { s:["tc","Answered"] }, { s:["tc y","0"] } ] },
				{ ac:["c l ay","","","x y tc w08 cd s",""], c:[ { s:["tc","Missed"] }, { s:["tc y","0"] } ] },
				{ ac:["c l ay","","","x y tc w08 cd s",""], c:[ { s:["tc","Total"] }, { s:["tc y","0"] } ] },
				{ div:["e"]}
			]}
		]},
		
		{ div:["e"] } 
	]},

	{ p:["abs zz y20 op_ga g","vp"], ev:["_undd_uvp"] }, // popup window	
	
	{ p:["abs zzzz y20 op_ga g","vip"], ev:["_undd_uvp"] }, // incoming call popup	
		
	{ div:["h80 gb abs","vb"], s:["sb_",""], c: 
	[
		{ sbl:["","2","1","","/helpline/images/dash_white.png","Dash","noop"] },
		{ sbl:["","3","","cases-cases","/helpline/images/case.png","Cases","sbl_case"] },
		
		{ sbl:["counsellor_","4","","calls-calls","/helpline/images/phone_white.png","Calls","noop"] },
		{ sbl:["supervisor_","4","","calls-calls","/helpline/images/phone_white.png","Calls","noop"] },
		{ sbl:["admin_","4","","calls-calls","/helpline/images/phone_white.png","Calls","noop"] },

		{ sbl:["counsellor_","5","","messages-messages","/helpline/images/text_white.png","Other Channels","noop"] },
		{ sbl:["supervisor_","5","","messages-messages","/helpline/images/text_white.png","Other Channels","noop"] },
		{ sbl:["admin_","5","","messages-messages","/helpline/images/text_white.png","Other Channels","noop"] },

		{ sbl:["","6","","contacts-contacts","/helpline/images/contacts_white.png","Contacts","noop"] },
				
		{ sbl:["supervisor_","7","","qas-qas","/helpline/images/qa.png","QA","noop"] },
		{ sbl:["admin_","7","","qas-qas","/helpline/images/qa.png","QA","noop"] },
		
		{ sbl:["admin_","8","","users-users","/helpline/images/settings_white.png","Settings","noop"] },
		
		{ sbl:["supervisor_","9","","","/helpline/images/wallboard.png","Wallboard","noop"] },
		{ sbl:["admin_","9","","","/helpline/images/wallboard.png","Wallboard","noop"] },
	]},

	{ div:["ml6"], c: // 
	[
		{ div:[], c:[ { div:["d w28"], s:["abs w27 x y zzz",""], c:
		[
			 // notifications
		]} ]},
		{ div:[], c:[ { input:["g","","mtv","1","radio"] }, { p:["tabv gw mmb bd","vfvw"] } ] }, // on call & right sb vw
		{ div:[], c:[ { input:["g","","mtv","2","radio","1"] }, { p:["tabv","vftab"], u:["dash","dash"] } ] }, // wall board
		{ div:[], c:[ { input:["g","","mtv","3","radio"] }, { p:["tabv","vfvw"] } ] }, // cases
		{ div:[], c:[ { input:["g","","mtv","4","radio"] }, { p:["tabv","vfvw"] } ] }, // calls
		{ div:[], c:[ { input:["g","","mtv","5","radio"] }, { p:["tabv","vftab"] } ] }, // text (non-call) channels
		{ div:[], c:[ { input:["g","","mtv","6","radio"] }, { p:["tabv","vfvw"] } ] }, // contacts
		{ div:[], c:[ { input:["g","","mtv","7","radio"] }, { p:["tabv","vftab"] } ] }, // qa
		{ div:[], c:[ { input:["g","","mtv","8","radio"] }, { p:["tabv","vftab"] } ] }, // users, categories
		{ div:[], c:[ { input:["g","","mtv","9","radio"] }, { p:["tabv gw mmb bd","vftab"], wallboard:[] } ] }, // wallboard


		
		{ div:["g"], c:
		[
			{ iframe:["","",VA_AMI_HOST] },
			{ iframe:["","",VA_ATI_HOST] },
		]},
	]}
]};

te["login"] = { div:["gw "], c:
[
	{ div:["loginbg"], s:["ma w100",""], c: 
	[
		{ div:["c t20"], c:
		[
			{ s:["x t20 b hhh","Hello,"] },
			{ s:["x b y hhh","Welcome back!"] }
		]},
		
		{ div:["d w32 mb12"], c:[ { div:["","ve"], c:
		[ 
		
			{ div:["ma w26 y40"], c:
			[ 
				//{ div:["c w13"], c:[ { img:["","","/helpline/images/coartofarms.jpg", "90"] } ] },
				{ div:["c"], c:[ { img:["","",APP_LOGO, "200"] } ] },
				{ div:["e"] }
			]}, 
					
			{ p:["w26 x30 y30 gb bd cw","o"], c:
			[
				{ div:[""], c:
				[
					{ s:["hhh b cw","Log in"] }, 
					{ div:["e"] }
				]},
				{ div:["y"], c:
				[
					{ u:["nb","auth_nb"] },
					{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:[], s:["x y02 cw","Username"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","user","","text","","Enter Username"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t15"], c:
				[
					{ div:[], s:["x y02 cw","Password"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","pass","","password","","Enter Password"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:["c"], s:["x y02 cw","Remember me"] },
					{ div:["d"], s:["x y02 cw","Forgot Password"] },
					{ div:["e"] }
				]},
				{ div:["t40"], c:
				[
					{ div:[], ac:["ag btn","login-","_postj","xx yy go cb bd b h3 tc","Login","0"] },
					{ div:["e"] },
					]}
			]} 
		]} ]}
	]},
	// { div:["y h50"]}
]};

function wall_stats_ufn (el, u, a, r, m)
{
	var p = document.getElementById ("wall_case_stats");
	p.innerHTML = "";
	nd (p, te["wall_case_stats"], [], r, [0]);

	p = document.getElementById ("wall_vw_chart");
	p.innerHTML = "";
        nd (p, te["wall_vw_chart"], [], r, [0]);
}

function _dash ()
{
	this.previousSibling.checked = true;
	var p = __(this,"vdf");
	var a = {args:"?", ".id":""};
	argv (p, a);
	url (p.parentNode, "dash", "dash", a.args);
}

function case_prio_chart (el, u, a, r, m)
{
	var status = {"":0, "0":0, "1":1, "2":0, "3":2 }
	var prio = {"":0, "0":0, "1":0, "2":1, "3":2 };
	var rr = ra["cases_pivot"];
	var j = null;
	var k = null;
	var m = 0;
	var rr_ = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	for (var i=0; i<rr.length; i++)
	{
		j = status[rr[i][0]];
		k = prio[rr[i][1]];
		console.log ("[prio] ("+rr[i][0]+","+rr[i][1]+") ("+j+","+k+")")
		if (j==undefined) continue;
		if (k==undefined) continue;
		//console.log ("PRIO] "+j+","+k+" |"+ rr[i][0][0]+","+rr[i][1][0]);
		rr_[j][k] += 1*rr[i][2][0];
		rr_[3][k] += 1*rr[i][2][0];
	}
		
	for (var i=0; i<4; i++) rr_[i][3]=rr_[i][0]+rr_[i][1]+rr_[i][2];  // calc total
		
	for (var i=0; i<4; i++) el.childNodes[2].childNodes[i].firstChild.childNodes[1].innerHTML = rr_[3][i]; 
	
	console.log ("[PRIO] "+JSON.stringify (rr_)+" | "+m);
	
	for (var i=0; i<3; i++) 
	{
		el.childNodes[1].childNodes[i].childNodes[1].childNodes[1].innerHTML = rr_[i][3];
		var coll = el.childNodes[1].childNodes[i].firstChild.childNodes;
		for (j=0; j<3; j++) if (rr_[i][j]>0) 
		{
			var w = ((rr_[i][j]/rr_[3][3])*500)-1
			coll[j].style.width = w
			// console.log ("prio ("+i+","+j+") "+rr_[i][j]+" | "+w)
		}
	}
}

// -----------------------

function unloadphone (el, u, a, r, m)
{
	VOICEAPPS_UA.disconnect ();
}

function loadphone (el, u, a, r, m)
{
	var v = re["user_role"][ra["auth"][0][6]];
	if (v) document.getElementById ("vv").className = v[2];
	console.log ("loadphone: "+ra["auth"][0][7]+" | "+JSON.stringify (v));
	DetectDevices ();
	VOICEAPPS_UA.connect (ra["auth"][0][7]);
}

function ami_wait (el, u, a, r, m)
{

}

function _phone_fmt (s)
{
	var a = 0;
	var n = s.length;
	for (var i=0; i<n; i++) 
	{
		var ch = s.substr (i,1);
		if (ch=="+" || ch=="0" || ch==" ") { a++; continue; }
		break;
	}
	if (n-a==9) return COUNTRY_CODE+s.substr (a,(n-a));
	return s; // .substr (a,(n-a));
}

function notifs ()
{
	var coll = document.getElementById ("vv").childNodes;
	var el = _(coll[0],"notif_count");
	var n = Object.keys (CALLS).length + ati_unread;
	var cn = "none";
	if (n>0) cn = "block"
	el.firstChild.innerHTML = n;
	el.style.display = cn;
}

function _notif ()
{
	var coll = document.getElementById ("vv").childNodes;
	var coll_ = coll[2].firstChild.firstChild.firstChild.childNodes; 
	var f = this.previousSibling.checked;
	if (f==true)
	{
		this.previousSibling.checked = false;
		coll[2].style.display = "none";
		coll[6].style.marginRight = "";	
		return
	}
	this.previousSibling.checked = true;
console.log ("_notif: "+this.previousSibling.value+" | "+coll_[this.previousSibling.value].firstChild.name)
	coll_[this.previousSibling.value].firstChild.checked=true;
	coll[2].style.display = "block";
	coll[6].style.marginRight = "280px";
}

function rxmsg (ev)
{
        if (document.getElementById ("user_cid")==null) return;

        var o = JSON.parse (ev.data);

        if (o.ra_ts)
        {
                ra_ts = o.ra_ts;
                return;
        }

        if (o.ati)
        {
                ldati (o.ati)
                return;
        }

        if (o.peers)
        {
                re["peers"] = o.peers;
        }

        if (o.channels)
        {
                ldami (o.channels, o.c);
        }
}

window.addEventListener("message", rxmsg, false);

window.onresize = function ()
{
	// show_notifications (1);
}

window.onload = function ()
{
	ra_ts = 0; // (Date.now()/1000)-ra_ts; 

	Chart.defaults.global.responsive = false;
	Chart.defaults.global.maintainAspectRatio = false;
	Chart.defaults.global.elements.line.tension = 1;
	// Chart.defaults.global.elements.line.stepped = true;
	// Chart.defaults.global.elements.line.backgroundColor = "rgba(255,255,255,0)";
	Chart.defaults.global.elements.line.borderWidth = 0;
	Chart.defaults.global.elements.point.radius = 3;
	//Chart.defaults.global.elements.point.borderColor = "rgba(255,0,0,1)";
	Chart.defaults.global.elements.point.hitRadius = 10;
	// Chart.defaults.global.animation.duration = 0;

        
	var p = document.getElementById ("vv"); 
	
	url (p, "wallonly","wallonly","");

}
