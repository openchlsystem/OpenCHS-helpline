
// ----------------------------------------------

te["message_f_tags"] = { c: 
[
	{ f:["Date",":k:exts_f:chan_ts",			" :d:dmy:0: "," chan_ts"," "] },
	{ f:["Direction",":k:exts_f:vector",			" ::vector:0:1"," vector"," "] },
	{ f:["Phone",":k:exts_f:phone",			" %0"," phone"," "] },
	{ f:["Extension",":k:exts_f:usr",			" %0"," usr"," "] },
	{ f:["Wait Time",":k:exts_f:wait_time_tot",		" %0"," wait_time_tot"," "] },
	{ f:["Talk Time",":k:exts_f:talk_time",		" %0"," talk_time"," "] },
	{ f:["Hold Time",":k:exts_f:hold_time",		" %0"," hold_time"," "] },
	{ f:["Hangup By",":k:exts_f:hangup_reason",		" ::hangup_reason:0:1"," hangup_reason"," "] },
	{ f:["Hangup Status",":k:exts_f:hangup_status",	" ::hangup_status:0:1"," hangup_status"," "] },
	{ f:["QA Done",":k:exts_f:qa_done",			" ::qa_done:0:1"," qa_done"," "] },
	{ div:["e"] }
]};


te["message_f"] = { div:["w55 ma bd sh__ y gw","vddvf"], ev:["_undd"], c: 
[
	{ s:["x20 yy b bb_","Filters"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_d:["Date"," :d:dmy:0: ","chan_ts",":k:exts_f:chan_ts","chan_ts",":k:exts_f:chan_ts"] },
		{ div:["xx yy"], kf_c:["Direction","tag-r_--o--::vector:0:1-vector-%0",  ":k:exts_f:vector"," ::vector:0:1"," vector"," %0", 	":k:exts_f:vector","vector", " vector"," ::vector:0:1"," "] },	
		{ div:["xx yy"], kf_s:["Phone","phone",":k:exts_f:phone"] },
		{ div:["xx yy"], kf_s:["Extension","usr",":k:exts_f:usr"] },
		{ div:["xx yy"], kf_s:["Wait Time","wait_time_tot",":k:exts_f:wait_time_tot"] },
		{ div:["xx yy"], kf_s:["Talk Time","talk_time",":k:exts_f:talk_time"] },
		{ div:["xx yy"], kf_s:["Hold Time","hold_time",":k:exts_f:hold_time"] },
		{ div:["xx yy"], kf_c:["Hangup By","tag-r_--o--::hangup_reason:0:1-hangup_reason-%0",  ":k:exts_f:hangup_reason"," ::hangup_reason:0:1"," hangup_reason"," %0", 	":k:exts_f:hangup_reason","hangup_reason", " hangup_reason"," ::hangup_reason:0:1"," "] },	
		{ div:["xx yy"], kf_c:["Hangup Status","tag-r_--o--::hangup_status:0:1-hangup_status-%0",  ":k:exts_f:hangup_status"," ::hangup_status:0:1"," hangup_status"," %0", 	":k:exts_f:hangup_status","hangup_status", " hangup_status"," ::hangup_status:0:1"," "] },
		// todo: category
	]},
	{ vp_apply:["ext_f_tags-exts_f"] }
]};

// ----------------------------------------------

te["message_footer"] = { div:["gw x mtn08 ba"], c:
[
	{ div:["d y07"], pg:["pgto","ext_list-exts"," dh","da dl","ext_list-exts"," dh","da dr"] },
	{ div:["e"] }
]};

te["message_r"] = { div:[], c:
[
	{ ac:["c w15","call_vw_id-calls","___vwr","cb",""], c:
	[
		{ s:["xx tt b05 h01_",":d:dmyhnr:1: "] },  
		{ arg:[".id","","%0"] } 
	]},
	{ div:["c w10"], s:["tt b05 h01_  xx",":v:calls:vector:vector:1"] },
	{ div:["c w14"], s:["tt b05 h01_  xx",":v:calls:phone"] },
	{ div:["c w16"], s:["tt b05 h01_  xx",""], c:
	[
		{ s:["c",":v:calls:vector:vector:2"] },
		{ s:["c x",":v:calls:usr"] },
		{ s:["c x",":v:calls:user_name"] },
		{ div:["e"] } 
	]},
	
	{ div:["c w08"], s:["tt b05 h01_  xx tr",":h:ms:10:"] },
	{ div:["c w08"], s:["tt b05 h01_  xx tr",":h:ms:28:"] },
	{ div:["c w08"], s:["tt b05 h01_  xx tr",":h:ms:11:"] },
	
	{ div:["c w12"], s:["tt b05 h01_  xx tr","::hangup_reason:12:1"] },
	{ div:["c w12"], s:["tt b05 h01_  xx tr","::hangup_status:13:1"] },
	
	{ div:["c w12"], s:["tt b05 h01_ xx tr",""] },
	{ div:["c w12"], s:["tt b05 h01_ xx tr",""] },
	
	{ div:["e"] }
]};

te["message_k"] = { div:["w160 bt bb"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w15","call_rr-calls","cd st","Date","da db","chan_ts",":k:calls_k:chan_ts:2"] },
	{ k_a:["c w10","call_rr-calls","cd st","Direction","da db","vector",":k:calls_k:vector:2"] },
	{ k_a:["c w14","call_rr-calls","cd","Phone","da db","phone",":k:calls_k:phone:2"] },
	{ k_a:["c w16","call_rr-calls","cd","Extension","da db","usr",":k:calls_k:usr:2"] },
	
	{ k_a:["c w08","call_rr-calls"," cd tr","Wait Time","da db","wait_time_tot",":k:calls_k:wait_time_tot:2"] },
	{ k_a:["c w08","call_rr-calls"," cd tr","Hold Time","da db","hold_time",":k:calls_k:hold_time:2"] },
	{ k_a:["c w08","call_rr-calls"," cd tr","Talk Time","da db","talk_time",":k:calls_k:talk_time:2"] },
		
	{ k_a:["c w12","call_rr-calls","w10 cd tr","Hangup By","da db","hangup_reason",":k:calls_k:hangup_reason:2"] },
	{ k_a:["c w12","call_rr-calls","w10 cd tr","Hangup Status","da db","hangup_status",":k:calls_k:hangup_status:2"] },

	{ k_a:["c w12","call_rr-calls","w10 cd tr","Case ID","da db","category",":k:calls_k:case_id:2"] },	
	{ k_a:["c w12","call_rr-calls","w10 cd tr","Disposition","da db","category",":k:calls_k:disposition:2"] },
	{ k_a:["c w12","call_rr-calls","w10 cd tr","QA Done","da db","qa_done",":k:calls_k:qa_done:2"] },
	{ div:["e"] }
]};

te["message_nb"] = { div:[], c:[ { u:["nb","exts_nb"] }, { div:["e"] } ] };

te["message_title"] = { div:[] }; 

te["message_list"] = { list:["ext_title","ext_nb","bl br ox","ext_k","ext_r","exts","ext_footer"] };

te["message_main"] = { c:
[
	{ div:["y","vb"], c:
	[
		{ div:["c"], c:
		[
			{ input:["g","","exts_t_","0","radio","1"] },
			{ ac:["","ext_list-exts","_tab","x y cb b h2","Other Channels"] }, 
		]},
		{ div:["d","ext_rpt-exts-@:1:0"], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","exts_t_","1","radio"] },
			{ li:["opto x ba gw bdr s cb","ext_rpt_main"], ev:["_tab"], c:
			[
				{ s:["c l t h3_ micon","bar_chart"] },
				{ s:["c xx y","Reports"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["d "], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","exts_t_","0","radio","1"] },
			{ li:["opto x bl bt bb gw bdl s cb","ext_list-exts"], ev:["_tab"], c:
			[
				{ s:["c l t h3_ micon","list"] },
				{ div:["c xx y","","List"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["d x15 ay"], ac:["","exts","_xlsx","x t01 bd_ cd s",""], c:
		[ 
			{ s:["c t04 h3_ micon","download"] },
			{ div:["c x y","","XLSX"] }, 
			{ div:["e"] }
		]},
		{ div:["d"], ac:["ay","ext_f-exts_f","_vpf","x t01 cd s bd_",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","ext_list-exts"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["x bd","vf"], c:[ { li:["","ext_f-exts_f"], ev:["__vpf"], c:
	[

	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","exts_v","0","radio","1"] }, { p:["tabv yy","vt"], ext_list:[] } ] },
		{ div:[], c:[ { input:["g","","exts_v","1","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};
	
te["messages"] = { c:
[
	{ div:["x25 tt s g","vb"], c:
	[
		
	]},
	{ div:["x y mt ml mb mr gw"], c: // tabs
	[
		{ div:[], c:[ { input:["g","","exts_mv","0","radio","1"] }, { div:["tabv gw bd x15 yy","vftab"], message_main:[] } ] },
		{ div:[], c:[ { input:["g","","exts_mv","1","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","exts_mv","2","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","exts_mv","3","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","exts_mv","4","radio"] }, { div:["tabv","vftab"] } ] },
	]}
]};




