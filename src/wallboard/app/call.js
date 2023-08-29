
rk["call_metrics"] = ["call_count","call_percent"];
re["call_metrics"] = 
{
"call_count":	["call_count",		"Count","0","call_rpt_count","call_rpt-calls-@:1:0:0"],
"call_percent":	["call_percent",	"Percent","1","call_rpt_percent","call_rpt-calls-@:1:1:1"],

}; 

rk["call_k"] = ["vector","user_name","hangup_status_txt","sla_wait_band","dispositions^disposition"];
re["call_k"] = 
{
	"vector":["vector","Direction"],
	"user_name":["user_name","Extension"],
	"hangup_status_txt":["hangup_status_txt","Hangup Status"],
	"sla_wait_band":["sla_wait_band","SLA Band"],
	"dispositions^disposition":["dispositions^disposition","Disposition"],
};

// ---

te["call_rpt_metric_tab"] = { div:["c x","%4"], c:
[
	{ arg:["","","0"] },
	{ input:["g","","call_metric","%2","radio","%9"] },
	{ li:["opth x y tc cb","%3","%1"], ev:["_tab"] }
]};

te["call_k_tag"] = { "rpt_axis_tag":["::call_k:0:1","xaxis"] };

te["call_k_r"] = { "rpt_axis_r":["xaxis","call_k_tag","::call_k:0:1"] };

te["call_rpt_ymenu"] = { uchk:["call_k_r",null,"call_k"] };

te["call_rpt_menu"] = {  c:
[
	
		{ input:["g","","type","bar","radio","1"] },
		{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
		[
			{ div:["c w01_ t"], s:["opt",""] },
			{ s:["c x y ","Bar Chart"] },
			{ div:["e"] }			
		]},
		{ input:["g","","type","line","radio"] },
		{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
		[
			{ div:["c w01_ t"], s:["opt",""] },
			{ s:["c x y ","Line Chart"] },
			{ div:["e"] }			
		]},
		{ input:["g","","stacked","stacked","checkbox","1"] },
		{ ac:["r ay","","_rpt_chk","xx y02 cb",""], c:
		[
			{ div:["c w01_ t"], s:["chk",""] },
			{ s:["c x y ","Stacked"] },
			{ div:["e"] }			
		]},
]};

te["call_rpt_"] = { c: // todo: load rpt_hdr params from db // 
[
	{ form:["tt","vrpt"], c:
	[
		{ div:["c"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x y04 cb",""], c:
			[
				{ s:["c x b",null] },
				{ div:["c"], s:["h02 w02 awb",""] },
				{ div:["e"] }
			]},
			{ div:["dd w20 y ba gw sh","vdd"], ev:["_undd"], call_rpt_menu:[] }	
		]},
		{ div:["d"], s:["",""], c:
		[
			{ div:["d"], c: // xaxis
			[
				{ div:["ba","va"], s:["",""], c:
				[	
					{ div:["d w03"], ac:["ay","","_dd","x y04",""],  c:[ { div:["h02 w02 awb"] } ] },
					{ div:["e"] }
				]},
				{ div:["dd x y mln50 w52 gw ba mt1","vdd_rpt"], ev:["_undd"], c:[ { call_rpt_ymenu:[null] } ] }
			]},
			{ div:["d"], uchk:["call_k_tag",null] },
			{ s:["d l20 r05 y07 cd","Y Axis:"] },
			{ div:[] },
		]},
		{ div:["d"], s:["",""], c:
		[
			{ uchk:["rpt_dist_r",null,"dist"]}, // xaxis (distribution options)
			{ s:["d l20 r05 y07 cd","X Axis:"] },
			{ div:["e"] },
		]},
		{ div:["e"], c:
		[ 
			{ arg:["","metrics",null] },
			{ input:["g","","rpt",null,"checkbox","1"] },
		]}
	]},
	{ div:["","call_rpt_vw-calls"], urpt:[] } 
]};

te["call_rpt"] = { call_rpt_:["::call_metrics:4:1","%2","%2","%3","%4","%7"] };  
te["call_rpt_percent"] = { call_rpt_:["Percent", "hangup_status_txt","hangup_status_txt", "-", "call_percent","call_percent"] };
te["call_rpt_count"] = { call_rpt_:["Count", "hangup_status_txt","hangup_status_txt", "-", "call_count","call_count"] };

te["call_rpt_main"] = { c:
[
	{ div:["g xx t15 bb_ s","vb"], c:
	[
		{ s:["c x y cd","Metric:"] },
		// { uchk:["call_rpt_metric_tab","call_count","call_metrics"] },
		// + add // todo add mutiple metrics to same canvas // then multi-metric with from different resources
		{ div:["d g"], c:
		[
			{ div:["w12 ay","va"], ac:["","","_dd","x cd",""], c:
			[
				{ div:["d w02 t04"], s:["h02 w02 awb",""] },
				{ s:["d x y","Saved Reports"] }, 
				{ div:["e"] }
			]},			
			{ div:["dd mln13 w25 ba sh gw cb","vdd"], ev:["_undd"], c:
			[
				{s:["xx y cd","- Saved Reports List -"] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["xx yy","vrpt"], c:
	[
		{ div:[], c:[ { input:["g","","call_rptv","0","radio","1"] }, { p:["tabv oh","vt"], call_rpt_count:[] } ]},
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv oh","vt"] } ] },
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","call_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	]}
]};

// ---------------------------------------------------------------------------------------------

te["call_case_none"] = { div:[], c:
[
	{ ac:["c xx yy ao","activity_popup-r_","_vp","w24 yy gb bd_",""], c:
	[
		{ s:["c xx y n cw","Select Reporter"] },
		{ div:["d l20 t"], s:["h02 w02 awR",""] },
		{ div:["e"], c:[ { arg:["task_chan-43","","%9"] }, { arg:["uniqueid-10","","%10"] }, { arg:["phone-11","","%12"] }, { arg:["vector-12","","%14"] } ] }
		// call
	]},
	{ div:["e"] }
]};

te["call_case"] = { ufn:["ufn_vw","call_case_","call_case_none"] };

// ---------------------------------------------------------------------------------------------

te["call_lst_footer"] = { div:["y"], c:
[	
	{ div:["d cd"], pg:["pgto","call_lst-calls"," dh","da dl_","call_lst-calls"," dh","da dr_"] },
	{ div:["e"] }
]};

te["call_lst_r"] = { li:["xx yy ah gw bb_",""],  c:
[

	{ div:[""], c:
	[ 
		// { s:["c x y","::vector:22:2"] },  // c x y cb gws h01 w01 cb bd16
		{ s:["c x y  cb","::vector:22:6"] }, 
		{ s:["c y","::vector:22:4"] }, 
		{ s:["c x y cb","%5"] },
		{ s:["c x y cd","::vector:22:5"] }, 
		{ s:["c x y","::branch:25:1"] },
		// { s:["c y cb","Extension"] },
		{ s:["c y cb","%6"] },
		{ div:["c xx y02"], s:["::hangup_status:13:3","::hangup_status:13:2"] },
		//{ s:["c ll cd","Wait Time:"] },
		//{ s:["c x ",":h:ms:10:"] },
		{ s:["c y cd","Talk Time:"] },
		{ s:["c x y ",":h:ms:11:"] },
		{ s:["d x y",":r::1:: : ago:: : ago:"] },
		//{ s:["d x y cd","%5"] },
		{ div:["e"] } 
	]}, 
	{ div:["g"], c:
	[
		{ s:["c l25","%13"] },
		//{ s:["c ll cd","Wait Time:"] },
		//{ s:["c x ",":h:ms:10:"] },
		{ s:["c l cd","Talk Time:"] },
		{ s:["c x ",":h:ms:11:"] },
		//{ s:["c l cd","Hold Time:"] },
		//{ s:["c x ",":h:ms:28:"] },
		// { s:["d x cd s","%5"] },
		{ div:["e"] }
	]},
]};

te["call_lst_k"] = { div:["x20 gws bb_"], s:["w160",""], c: // activate filter ctx
[
	{ k_a:["c w13","call_rr-calls","cb b","Date","da db","chan_ts",":k:calls_k:chan_ts:2"] },
	{ k_a:["c w10","call_rr-calls","cb b","Direction","da db","vector",":k:calls_k:vector:2"] },
	{ k_a:["c w10","call_rr-calls","cb b","Branch","da db","branch",":k:calls_k:branch:2"] },
	//{ k_a:["c w10","call_rr-calls","","Trunk DID","da db","trunk",":k:calls_k:trunk:2"] },
	{ k_a:["c w13","call_rr-calls","cb b","Phone","da db","phone",":k:calls_k:phone:2"] },
	{ k_a:["c w10","call_rr-calls","cb b","Extension","da db","usr",":k:calls_k:usr:2"] },
	{ k_a:["c w10","call_rr-calls","w08 tr cb b","Wait Time","da db","wait_time_tot",":k:calls_k:wait_time_tot:2"] },
	{ k_a:["c w10","call_rr-calls","w08 tr cb b","Talk Time","da db","talk_time",":k:calls_k:talk_time:2"] },
	{ k_a:["c w13","call_rr-calls","w11 tr cb b","Hangup By","da db","hangup_reason",":k:calls_k:hangup_reason:2"] },
	{ k_a:["c w13","call_rr-calls","w11 tr cb b","Hangup Status","da db","hangup_status",":k:calls_k:hangup_status:2"] },
	{ k_a:["c w15","call_rr-calls","w13 tr cb b","Disposition","da db","category",":k:calls_k:category:2"] },
	{ k_a:["c w10","call_rr-calls","w08 tr cb b","QA Result","da db","qa_score",":k:calls_k:qa_score:2"] },
	{ div:["e"] }
]};

te["call_lst_nb"] = { div:[], c:[ { u:["nb","calls_nb"] }, { div:["e"] } ] };

te["call_lst_title"] = { div:["bb_","va"], c:
[
	{ div:["c x y","va"], ac:["","call_lst-calls-vt","_u","x y cb b","Call History"], c:[ { arg:["","phone",":k:calls_k:phone:2"] } ] },
	{ div:["e"] }
]};

te["call_lst"] = { list:["call_lst_title","call_lst_nb","","noop","call_lst_r","calls","call_lst_footer"] },

// ----------------------------------------------

te["call_f_tags_"] = { c: 
[
	//{ s:["c xx yy h3_ micon b mr","search"] },
	 { s:["c xx yy h3_ micon b gws bdl16","search"] },
        { div:["c"], s:["r20  yy n gws mr","Search"] },

	{ f:["Date",null,		" :d:dmy:0: ","chan_ts"," "] },
	{ f:["Direction",null,		" ::vector:0:1","vector"," "] },
	{ f:["Phone",null,		" %0","phone"," "] },
	// { f:["Extension",null,	" %0","usr"," "] },
	{ f:["Extension",null,		" %1","user_id"," %1"] },
	{ f:["Wait Time",null,		" %0","wait_time_tot"," "] },
	{ f:["Hold Time",null,		" %0","hold_time"," "] },
	{ f:["Talk Time",null,		" %0","talk_time"," "] },
	{ f:["Hangup By",null,		" ::hangup_reason:0:1","hangup_reason"," "] },
	{ f:["Hangup Status",null,	" ::hangup_status:0:1","hangup_status_txt"," "] },
	{ f:["Case ID",null,		" %0","dispositions^case_id"," "] },
	{ f:["Disposition",null,	" %1","dispositions^disposition_id"," %1"] },
	{ f:["QA Done",null,		" ::qa_done:0:1","qa_done"," "] },
	{ div:["e"] }
]};

te["call_f_tags"] = { call_f_tags_:[":k:calls_f:chan_ts", ":k:calls_f:vector", ":k:calls_f:phone", ":k:calls_f:user_id", ":k:calls_f:wait_time_tot", ":k:calls_f:hold_time", ":k:calls_f:talk_time", ":k:calls_f:hangup_reason",":k:calls_f:hangup_status_txt", ":k:calls_f:dispositions^case_id", ":k:calls_f:dispositions^disposition_id", ":k:calls_f:qa_done"] };

te["call_f_tags_k"] = { call_f_tags_:[":k:calls_f:chan_ts:2", ":k:calls_f:vector:2", ":k:calls_f:phone:2", ":k:calls_f:user_id:2", ":k:calls_f:wait_time_tot:2", ":k:calls_f:hold_time:2", ":k:calls_f:talk_time:2", ":k:calls_f:hangup_reason:2", ":k:calls_f:hangup_status_txt:2", ":k:calls_f:dispositions^case_id:2", ":k:calls_f:dispositions^disposition_id:2", ":k:calls_f:qa_done:2"] };

te["call_f"] = { div:["w55 ma sh__ y gw","vddvf"], ev:["_undd"], c:
[
	{ s:["x20 yy b bb_","Search Call"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_d:["Date"," :d:dmy:0: ","chan_ts",":k:calls_f:chan_ts","chan_ts",":k:calls_f:chan_ts"] },
		{ div:["xx yy"], kf_c:["Direction","tag_-r_--o--::vector:0:1--vector-%0-",  ":k:calls_f:vector",
""," ::vector:0:1","","vector"," %0","", 	":k:calls_f:vector","vector", "vector"," ::vector:0:1"," "] },	
		{ div:["xx yy"], kf_s:["Phone","phone",":k:calls_f:phone"] },
		// { div:["xx yy"], kf_s:["Extension","usr",":k:calls_f:usr"] },
		{ div:["xx yy"], kf_l:["Extension","tag_-r_--o--%5-user_id-user_id-%0-%5",   "user_lc_main-users", ":k:calls_f:user_id", 
""," %1","user_id","user_id"," %0"," %1", "noop"] },
		{ div:["xx yy"], kf_s:["Wait Time","wait_time_tot",":k:calls_f:wait_time_tot"] },
		{ div:["xx yy"], kf_s:["Hold Time","hold_time",":k:calls_f:hold_time"] },
		{ div:["xx yy"], kf_s:["Talk Time","talk_time",":k:calls_f:talk_time"] },
		{ div:["xx yy"], kf_c:["Hangup By","tag_-r_--o--::hangup_reason:0:1--hangup_reason-%0-",  ":k:calls_f:hangup_reason",
""," ::hangup_reason:0:1","","hangup_reason"," %0","", 	":k:calls_f:hangup_reason","hangup_reason", "hangup_reason"," ::hangup_reason:0:1"," "] },	
		{ div:["xx yy"], kf_c:["Hangup Status","tag_-r_--o--::hangup_status:0:1--hangup_status_txt-%0-",  ":k:calls_f:hangup_status_txt",
""," ::hangup_status:0:1","","hangup_status_txt"," %0","", 	":k:calls_f:hangup_status_txt", "hangup_status", "hangup_status_txt"," ::hangup_status:0:1"," "] },
		
		{ div:["xx yy"], kf_s:["CaseID","dispositions^case_id",":k:calls_f:dispositions^case_id"] },			

		{ div:["xx yy"], kf_l:["Disposition","tag_-r_--o--%1-category_id-dispositions^disposition_id-%0-%1",   "case_disposition_lc_main-subcategories", ":k:calls_f:dispositions^disposition_id", ""," %1","category_id","dispositions^disposition_id"," %0"," %1", "case_disposition_root_id"] },	

		{ div:["xx yy"], kf_c:["QA Done","tag_-r_--o--::qa_done:0:1--qa_done-%0-",  ":k:calls_f:qa_done",
""," ::qa_done:0:1","","qa_done"," %0","", 	":k:calls_f:qa_done","qa_done", "qa_done"," ::qa_done:0:1"," "] },
	]},
	{ vp_apply:["call_f_tags-calls_f"] }
]};

// ----------------------------------------------

te["call_footer"] = { div:["x gw ba"], c:
[
	{ div:["d y07"], pg:["pgto","call_list-calls"," dh","da dl","call_list-calls"," dh","da dr"] },
	{ div:["e"] }
]};

te["call_r_qa_na"] = { s:["xx tt b05 h01_ tr cd"," N/A"] };

te["call_r_qa_form"] = { div:[], c:
[
	{ ac:["","qa_form-r_","_vp","xx tt b05 h01_ tr",""], c:
	[ 
		{ s:["","No"] },
		{ div:[], c:
		[
			{ arg:["chan_uniqueid-5","","%0"] }, 
			{ arg:["chan_ts-6","","%1"] }, 
			{ arg:["chan_vector-7","","%22"] }, 
			{ arg:["chan_phone-8","","%5"] }, 
			{ arg:["chan_usr-9","","%6"] }, 
			{ arg:["chan_talk_time-11","","%11"] } 
		]},
	]},
	{ div:[] }
]};

te["call_r_qa_done"] = { ac:["","qa_form-r_","_vp","xx tt b05 h01_ tr cb",""], c: // load qa results
[ 
	{ s:["","Yes"] },
	{ div:[] }
]};  

te["call_r"] = { li:["w160"], c:
[
	{ ac:["c w15","call_vw_id-calls","___vwr","cb",""], c:
	[
		{ s:["xx tt b05 h01_",":d:dmyhnr:1: "] },  
		{ arg:[".id","","%0"] } 
	]},
	{ div:["c w10"], s:["tt b05 h01_  xx",":v:calls:vector::vector:1"] },
	{ div:["c w14"], s:["tt b05 h01_  xx",":v:calls:phone"] },
	{ div:["c w16"], s:["tt b05 h01_  xx",""], c:
	[
		//{ s:["c",":v:calls:vector:vector:2"] },
		{ s:["c x",":v:calls:usr"] },
		{ s:["c x",":v:calls:user_name"] },
		{ div:["e"] } 
	]},
	
	{ div:["c w08"], s:["tt b05 h01_  xx tr",":h:ms:10:"] },
	{ div:["c w08"], s:["tt b05 h01_  xx tr",":h:ms:29:"] },
	{ div:["c w08"], s:["tt b05 h01_  xx tr",":h:ms:11:"] },
	
	{ div:["c w12"], s:["tt b05 h01_  xx tr",":v:calls:hangup_reason::12:1"] },
	{ div:["c w12"], s:["tt b05 h01_  xx tr",":v:calls:hangup_status_txt"] },
	
	{ div:["c w12"], s:["tt b05 h01_ xx tr",":v:calls:case_ids"] },
	//{ div:["c w12"], s:["tt b05 h01_ xx tr",":v:calls:dispositions"] },
	{ div:["c w12"], s:["tt b05   xx tr",""], uval:["",":v:calls:dispositions","d"] },
	{ div:["c w12"], u:[":u:call_qa_done:::call_r_qa_done:call_r_qa_form:call_r_qa_na"] }, 
	
	{ div:["e"] }
]};

te["call_k"] = { div:["w160 bt bb"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w15","call_rr-calls","cd st","Date","da db","chan_ts",":k:calls_k:chan_ts:2"] },
	{ k_a:["c w10","call_rr-calls","cd st","Direction","da db","vector",":k:calls_k:vector:2"] },
	{ k_a:["c w14","call_rr-calls","cd","Phone","da db","phone",":k:calls_k:phone:2"] },
	{ k_a:["c w16","call_rr-calls","cd","Extension","da db","user_id",":k:calls_k:user_id:2"] },
	
	{ k_a:["c w08","call_rr-calls"," cd tr","Wait Time","da db","wait_time_tot",":k:calls_k:wait_time_tot:2"] },
	{ k_a:["c w08","call_rr-calls"," cd tr","Hold Time","da db","hold_time",":k:calls_k:hold_time:2"] },
	{ k_a:["c w08","call_rr-calls"," cd tr","Talk Time","da db","talk_time",":k:calls_k:talk_time:2"] },
		
	{ k_a:["c w12","call_rr-calls","w10 cd tr","Hangup By","da db","hangup_reason",":k:calls_k:hangup_reason:2"] },
	{ k_a:["c w12","call_rr-calls","w10 cd tr","Hangup Status","da db","hangup_status_txt",":k:calls_k:hangup_status_txt:2"] },

	{ k_a:["c w12","call_rr-calls","w10 cd tr","Case ID","da db","dispositions^case_id",":k:calls_k:dispositions^case_id:2"] },	
	{ k_a:["c w12","call_rr-calls","w10 cd tr","Disposition","da db","dispositions^disposition_id",":k:calls_k:dispositions^disposition_id:2"] },
	{ k_a:["c w12","call_rr-calls","w10 cd tr","QA Done","da db","qa_done",":k:calls_k:qa_done:2"] },
	{ div:["e"] }
]};

te["call_nb"] = { div:[], c:[ { u:["nb","calls_nb"] }, { div:["e"] } ] };

te["call_title"] = { div:[] }; 

te["call_list"] = { list:["call_title","call_nb","bl br ox","call_k","call_r","calls","call_footer"] };

te["call_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ input:["g","","calls_t_","0","radio","1"] },
				{ ac:["c","call_main-calls-vftab","_u","x y cb b h2","Call History"] }, 
				// { ac:["c t02 x ay","","_dd","h02 w02 ba_b awb",""] },
				{ div:["e"], arg:["","_title","%5"] }
			]},
			{ div:["dd x y gw ba sh nd w14","vdd"], c:
			[
			
			]}
		]},
		{ div:["c l40"], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","calls_t_","0","radio","1"] },
			{ li:["opto x bl bt bb gw bdl s cb","call_list-calls"], ev:["_tabf"], c:
			[
				{ s:["c l t h3_ micon","list"] },
				{ div:["c xx y","","List"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["c","call_rpt_count-calls-@:1:0"], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","calls_t_","1","radio"] },
			{ li:["opto x ba gw bdr s cb","call_rpt_main"], ev:["_tabf"], c:
			[
				{ s:["c l t h3_ micon","bar_chart"] },
				{ s:["c xx y","Reports"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["c l40 ay"], ac:["","calls","_download","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","download"] },
			{ div:["c x y","","Download"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","call_list-calls"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["y20","vf"], c:[ { li:["ba bd16","call_f-calls_f"], ev:["__vpf"], c:
	[
		{ call_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","calls_v","0","radio","1"] }, { p:["tabv yy","vt"], call_list:[] } ] },
		{ div:[], c:[ { input:["g","","calls_v","1","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};
	
te["calls"] = { c:
[
	{ div:["x25 tt s g","vb"], c:
	[
		{ div:["c"], tab:["calls_mt","0","1",  "x02 y mr1 cd tab","call_main-calls",  "","calls"] },
		{ div:["e"] }
	]},
	{ div:[], c: // tabs
	[
		{ div:[], c:[ { input:["g","","calls_mv","0","radio","1"] }, { div:["tabv gw bd x15 yy mmb bd","vftab"], call_main:[] } ] },
		{ div:[], c:[ { input:["g","","calls_mv","1","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","calls_mv","2","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","calls_mv","3","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","calls_mv","4","radio"] }, { div:["tabv","vftab"] } ] },
	]}
]};

// -----------------------------------------------------------------------------------------------------------------------------

function call_qa_done (r,a)
{
	if (r[11]<=0) return 2; // no talktime
	if (r[33]==1) return 0; //
	return 1;
}


