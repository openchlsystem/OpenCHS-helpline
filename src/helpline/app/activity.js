
te["activity_case_notify_vw_id"] = { c:
[
	{ div:[], c:
	[
		{ input:["g","","activity_vw_vt2","1","radio"] }, // search reporter
		{ p:["tabv ","vftab"], u:["activity_match","activities"] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt2","1","radio","1"] }, // case-form (new|followup)
		{ p:["tabv ","vfvw"], u:["case_vw_id","cases"] }
	]}
]};
	
te["activity_case_notify"] = { activity_vw_id_tabs_:["","noop","1","activity_case_notify_vw_id"] };

// ----------------------------------------------------------------------

te["activity_message_sended"] = { ufn:["activity_message_sended"] };

te["activity_messages_ufn"] = { ufn:["activity_messages_ufn"] };

te["activity_messages_txt"] = { div:["ba_b"], c:
[
	{ div:[], c:
	[
		{ div:["d w13"], ac:["abs w12 x y ","","","xx y cd tr","Preset Questions"] },
		{ div:["e"] }
	]},
	{ div:[""], c:[ { textarea:["wp100 h09 ll r130 yy","","src_msg","","Reply ..."] } ] }
]}

te["activity_message_r"] = { div:["x y"], c:
[
	{ arg:["","","%0"] },
	{ div:[":v:messages:src_vector::vector:10"], c:
	[
		{ div:["r20"], c:[ { pre:[":v:messages:src_vector::vector:11","",":v:messages:src_msg"] }, { div:["e"] } ] },
		{ s:[":v:messages:src_vector::vector:12",":r::1:: : ago:: : ago:"] }, // x08 y tr s cd
		{ arg:["tm","","%1"] }
	]},
	{ div:["e"] }
]};

te["activity_messages"] = { c:
[
	{ div:[] }, // inbound nb // todo: display captured fields status
	{ p:["tt ","msgs"], c:
	[
		{ div:["x20 yy oy scroller"], c:
		[
			{ u:["activity_message_r","messages","","","desc"] },
			{ ufn:["activity_messages_height"] },
		]},
		{ div:[] }
	]},
	{ div:["","ve"], c:
	[
		{ p:["x30 y20","o"], c:
		[
			 { div:[], c:
			 [
 				{ div:["d w08"], ac:["abs btn ao t","","_activity_message_send"," t30 tc ba_b bd w08 h05 cb","Send"] },
 				{ div:["e"] }
			 ]},
			 { p:["mr10","sended"], activity_messages_txt:[] }
		]}
	]}
]};

te["activity_messages_main"] = { activity_vw_id_tabs_:["1","activity_messages","","activity_match"] };

// ----------------------------------------------------------------------

te["activity_disposition_ed_r"] = { div:[], c:
[
	{ input:["g","","disposition_id","%0","radio"] },
	{ ac:["rg rc r ay bd_","","_opt","xx t02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ div:["c x y w35"], uval:["",":v:categories:fullname"] },
		{ div:["e"] }			
	]}
]};

te["activity_disposition_new"] = { div:["w45 ma sh__ gw_ x20 y20","vddvw"], ev:["_undd"], c:
[
	{ div:["y"], c:
	[
		{ s:["c x y h2 b","Disposition"] },
		{ ac:["d","","_uvp","x y h cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["","ve"], c:
	[
		{ div:[], c:[ { p:["c","nb"] }, { div:["e"] } ] },
		{ div:["t b20"], c:
		[
			{ s:["x y cd gp cr","Unknown Reporter"] },
			{ u:["reporter_disposition_vw_r","reporters_uuid","","reporters_uuid"] }
		]},
		{ p:["h20 oy ba_ bd","o"], u:["activity_disposition_ed_r","subcategories"] },
		// { p:["",""], c:[ { textarea:[] } ] }
		{ ac:["t30 ao btn","activity_disposition-dispositions","_activity_postj","y n gb cw b tc","Submit"] },
	]}
]};

// ----------------------------------------------------------------------

te["disposition_history_r_no_data"] = { s:["bt_ bb_ x y08 cd","No Matching Activity"] };

te["activity_disposition_history_footer"] = { c:
[
	{ div:["x y30"], c:
	[
		{ div:["t20"], pg:["pgto","activity_disposition_history_list-dispositions"," dh","da dl","activity_disposition_history_list-dispositions"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_disposition_history_r_case_id"] = { c:
[
	{ s:["c ll y b",CASE_ID_PREFIX] },
	{ s:["c y b",":v:dispositions:case_id"] },
	{ div:["c xx"], c:
	[ 
		{ input:["g","","acase_t","1","radio"] },
		{ ac:["c xx t02 ag tab","reporter_fuuid-reporters^uuid","_activity_case","xx y03 bd16 m",""], c:
		[
			{ s:["","Followup"] },
			{ div:["g"], arg:["","case_id",":v:dispositions:case_id"] }
		]}
	]}
]};

te["activity_disposition_history_r"] = { div:[], c:
[
	{ div:["abs x t08"], s:["x y micon h3 ba gws_ bd16",":v:dispositions:src::case_src:3"] },
	{ li:["ml2 xx yy cb bl"], c:
	[
		{ div:[], c:
		[
			{ div:["c xx y"], uval:["",":v:dispositions:disposition"] },
			{ u:[":u::15:0:noop:activity_disposition_history_r_case_id"] },
			{ s:["d xx y",":r::11:: : ago:: : ago:"] },
			{ s:["d xx y",":v:dispositions:created_by"] },
			{ div:["e"] }	
		]},
		{ div:["cd s"], c:
		[
			{ s:["c xx",":v:dispositions:reporter_fullname"] },
			{ div:["c xx"], uval:["",":v:dispositions:reporter_age_group"] },
			{ div:["c xx"], uval:["",":v:dispositions:reporter_sex"] },
			{ div:["e"] }	
		]}
	]}
]};

te["activity_disposition_history_k"] = { div:["g"], disposition_k:[] };

te["activity_disposition_history_nb"] = { div:[] };

te["activity_disposition_history_title"] = { div:[], c:
[
	{ s:["xx yy cd","Matching Activities"] }
]};


te["activity_disposition_history_list"] = { list:["activity_disposition_history_title", "activity_disposition_history_nb", "", "activity_disposition_history_k", "activity_disposition_history_r", "dispositions", "activity_disposition_history_footer"] };

// ----------------------------------------------------------------------

te["activity_contact_footer"] = { c:
[
	{ u:["activity_contact_r_no_data","contacts_no_data"] },
	{ div:["t"], c:
	[
		// { ac:["c x y","","","x y cd","Clear Selection"] },
		{ div:["d y07 s"], pg:["pgto","activity_contact_list-contacts"," dh","da dl","activity_contact_list-contacts"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_contact_r_no_data"] = { s:["xx y08 cd gws_","Search or Create Reporter"] };

te["activity_contact_r_"] = { p:["mb gws_","o"], c:
[
	{ p:["xx y01 savl go cw bd b","nb"] },
	{ input:["g","","activity_contact_id",null,"radio",null] },
	{ li:["r rg_ xx y"], ev:["_activity_contact"], c: // 
	[
		{ div:["abs w01_ t"], s:["opt",""] },
		{ div:["ml2 ay"], c:
		[
			{ div:["c"], c:
			[
				{ ac:["aa","case_contact_vw_id-contacts","_vp","x y04 ",""], c:
				[
					{ s:["",null] },
					{ div:["g"], arg:["",".id",null] }
				]},
				{ div:[] } // vp return anchor
			]},
			//{ s:["c t",","] },
			{ div:["c xx t"], uval:["",null] },
			//{ s:["c t",","] },
			{ div:["c xx t"], uval:["",null] },
			{ div:["e"] }
		]},
		{ div:["ml2 x s"], uval:["",null] },
		{ div:["ml2 x t"], s:["b",null] },
		{ div:["ml2 x y s"], c:
		[
			{ s:["c x y micon","call"] },
			{ div:["c y"], uval:["",null] },
			{ s:["c l20 y micon","email"] },
			{ div:["c y"], uval:["",null] },
			{ div:["e"] }
		]}
	]}
]};

te["activity_contact_r_new"] = { activity_contact_r_:
[
":v:contacts:id", "1",
":v:contacts:fullname", ":v:contacts:contact_id",
":v:contacts:age_group", ":v:contacts:sex",
":v:contacts:location",
":v:contacts:landmark",
":v:contacts:phone", ":v:contacts:email"
]};

te["activity_contact_r"] = { activity_contact_r_:
[
":v:dispositions:reporter_contact_id", "",
":v:dispositions:reporter_fullname", ":v:dispositions:reporter_contact_id",
":v:dispositions:reporter_age_group", ":v:dispositions:reporter_sex",
":v:dispositions:reporter_location",
":v:dispositions:reporter_landmark",
":v:dispositions:reporter_phone", ":v:dispositions:reporter_email"
]};

te["activity_contact_k"] = { div:["g"], c: // transition from dispositionsk to contact
[
	{ arg:["","src_address",		":k:dispositions_k:src_address:2"] },

	{ arg:["","reporter_fullname",		":k:dispositions_k:reporter_fullname:2"] },
	{ arg:["","reporter_phone",		":k:dispositions_k:reporter_phone:2"] },
	{ arg:["","reporter_age_group_id",	":k:dispositions_k:reporter_age_group_id:2"] },
	{ arg:["","reporter_sex_id",		":k:dispositions_k:reporter_sex_id:2"] },
	{ arg:["","reporter_location_id",	":k:dispositions_k:reporter_location_id:2"] },
	
	{ arg:["","cases^id",			":k:dispositions_k:cases^id:2"] },
	{ arg:["","cases^created_on",		":k:dispositions_k:cases^created_on:2"] },
	{ arg:["","cases^created_by_id",	":k:dispositions_k:cases^created_by_id:2"] },
	{ arg:["","cases^src",			":k:dispositions_k:cases^src:2"] },
	{ arg:["","cases^case_category_id",	":k:dispositions_k:cases^case_category_id:2"] },
        { arg:["","cases^gbv_related",		":k:dispositions_k:cases^gbv_related:2"] },
	{ arg:["","cases^priority",		":k:dispositions_k:cases^priority:2"] },
	{ arg:["","cases^status",		":k:dispositions_k:cases^status:2"] },
	{ arg:["","cases^escalated_to_id",	":k:dispositions_k:cases^escalated_to_id:2"] },
	{ arg:["","cases^assessment_id",	":k:dispositions_k:cases^assessment_id:2"] },
	{ arg:["","cases^justice_id",		":k:dispositions_k:cases^justice_id:2"] },

	{ arg:["","has_contact",		"1"] },
		
	{ arg:["","_c","5"] },
	{ arg:["","group","reporter_contact_id"] }
]};

te["activity_contact_nb"] = { div:[] };

te["activity_contact_title"] = { div:[], c:
[
	{ s:["xx yy cd","Matching Contacts"] }
]};

te["activity_contact_list"] = { list:["activity_contact_title", "activity_contact_nb", "", "activity_contact_k", "activity_contact_r", "dispositions", "activity_contact_footer"] };

// ----------------------------------------------------------------------

te["activity_match_f_tags_"] = { c: 
[
	{ f:["Channel Address",null,	" %0","src_address",""] },
			
	{ f:["Reporter Name",null,	" %0","reporter_fullname",""] },
	{ f:["Reporter Phone",null,	" %0","reporter_phone",""] },
	{ f:["Reporter Age",null,	" %1","reporter_age_group_id"," %1"] },
	{ f:["Reporter Sex",null,	" %1","reporter_sex_id"," %1"] },
	{ f:["Reporter Location",null,	" %1","reporter_location_id"," %1"] },

	{ f:["CaseID",null,		" %0","cases^id",""] },
	{ f:["Created On",null,		" :d:dmy:0: ","cases^created_on",""] },
	{ f:["Created By",null,		" %1","cases^created_by_id"," %1"] },
	{ f:["Source",null,		" %0","cases^src",""] },
	{ f:["Category",null,		" %1","cases^case_category_id"," %1"] },
        { f:["GBV Related",null,        " ::yesno:0:2","cases^gbv_related",""] },
	{ f:["Priority",null,		" ::case_priority:0:1","cases^priority",""] },
	{ f:["Status",null,		" ::case_status:0:1","cases^status",""] },
	{ f:["Escalated To",null,	" %1","cases^escalated_to_id"," %1"] },
	{ f:["Case Assessment",null,	" %1","cases^assessment_id"," %1"] },
	{ f:["Status in Justice System",null," %1","cases^justice_id"," %1"] },
	
//	{ f:["Services",null,		" %1","services^category_id"," %1"] },
	
//	{ f:["Referals",null,		" %1","referals^category_id"," %1"] },
		
	{ p:["g","o"], arg:["","sort","id"] }, 
	{ div:["e"] }
]};

te["activity_match_f_tags_k"] = { activity_match_f_tags_:
[
":k:dispositions_k:src_address:2",
":k:dispositions_k:reporter_fullname:2", ":k:dispositions_k:reporter_phone:2", 
":k:dispositions_k:reporter_age_group_id:2", ":k:dispositions_k:reporter_sex_id:2", ":k:dispositions_k:reporter_location_id:2",
":k:dispositions_k:cases^id:2", ":k:dispositions_k:cases^created_on:2", ":k:dispositions_k:cases^created_by_id:2", ":k:dispositions_k:cases^src:2", 
":k:dispositions_k:cases^case_category_id:2",":k:dispositions_k:cases^gbv_related:2", ":k:dispositions_k:cases^priority:2", ":k:dispositions_k:cases^status:2", ":k:dispositions_k:cases^escalated_to_id:2", 
":k:dispositions_k:cases^assessment_id:2",  ":k:dispositions_k:cases^justice_id:2",  
]};

te["activity_match_f_tags"] = { activity_match_f_tags_:
[
":k:dispositions_f:src_address",
":k:dispositions_f:reporter_fullname", ":k:dispositions_f:reporter_phone", 
":k:dispositions_f:reporter_age_group_id", ":k:dispositions_f:reporter_sex_id", ":k:dispositions_f:reporter_location_id",
":k:dispositions_f:cases^id", ":k:dispositions_f:cases^created_on", ":k:dispositions_f:cases^created_by_id", ":k:dispositions_f:cases^src", 
":k:dispositions_f:cases^case_category_id", ":k:dispositions_f:cases^gbv_related", ":k:dispositions_f:cases^priority", ":k:dispositions_f:cases^status", ":k:dispositions_f:cases^escalated_to_id",  
":k:dispositions_f:cases^assessment_id",  ":k:dispositions_f:cases^justice_id",  
]};

te["activity_cases_f"] = { c:
[
	{ div:["xx yy"], kf_s:["CaseID","cases^id",":k:dispositions_f:cases^id"] },			
			
	{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","cases^created_on",":k:dispositions_f:cases^created_on","cases^created_on",":k:dispositions_f:cases^created_on"] },
			
	{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%5-user_id-cases^created_by_id-%0-%5",   "user_lc_main-users",":k:dispositions_f:cases^created_by_id", 
""," %1","user_id","cases^created_by_id"," %0"," %1",  "noop"] },

	{ div:["xx yy"], kf_c:["Source","tag_-r_--o--::case_src:0:1--cases^src-%0-",  	":k:dispositions_f:cases^src",
""," %0","","cases^src"," %0","", 				":k:dispositions_f:cases^src","case_src", "cases^src"," %0",""] },
		
	{ div:["xx yy"], kf_l:["Category","tag_-r_--o--%1-category_id-cases^case_category_id-%0-%1",   "case_category_lc_main-subcategories",  ":k:dispositions_f:cases^case_category_id",  ""," %1","category_id","cases^case_category_id"," %0"," %1", "case_category_root_id"] },
	
	 { div:["xx yy"], kf_c:["GBV Related", "tag_-r_--o--::yesno:0:2--cases^gbv_related-%0-",  ":k:dispositions_f:cases^gbv_related",
""," ::yesno:0:2","","cases^gbv_related"," %0","",       ":k:dispositions_f:cases^gbv_related","yesno",  "cases^gbv_related"," ::yesno:0:2",""] },

	{ div:["xx yy"], kf_c:["Priority", "tag_-r_--o--::case_priority:0:1--cases^priority-%0-",  ":k:dispositions_f:cases^priority", 
""," ::case_priority:0:1","","cases^priority"," %0","", 	":k:dispositions_f:cases^priority","case_priority",  "cases^priority"," ::case_priority:0:1",""] },
				
	{ div:["xx yy"], kf_c:["Status", "tag_-r_--o--::case_status:0:1--cases^status-%0-",  	":k:dispositions_f:cases^status",
""," ::case_status:0:1","","cases^status"," %0","", 	":k:dispositions_f:cases^status","case_status",  "cases^status"," ::case_status:0:1",""] },
		
	{ div:["xx yy"], kf_l:["Escalated To","tag_-r_--o--%5-user_id-cases^escalated_to_id-%0-%5",   "user_lc_main-users", ":k:dispositions_f:cases^escalated_to_id", 
""," %1","user_id","cases^escalated_to_id"," %0"," %1", "noop"] },	
		
	{ div:["xx yy"], kf_l:["Case Assessment","tag_-r_--o--%1-category_id-cases^assessment_id-%0-%1",   "case_lc_main-subcategories", ":k:dispositions_f:cases^assessment_id", 
"", " %1", "category_id", "cases^assessment_id"," %0"," %1", "case_assessment_root_id"] },	

	{ div:["xx yy"], kf_l:["Status in Justice System","tag_-r_--o--%1-category_id-cases^justice_id-%0-%1",   "case_lc_main-subcategories", ":k:dispositions_f:cases^justice_id", 
""," %1","category_id","cases^justice_id"," %0"," %1", "case_justice_root_id"] },	
					
]};

te["activity_contacts_f"] = { c:
[
	
	{ div:["xx yy"], kf_s:["Channel Address","src_address",":k:dispositions_f:src_address"] },
	
	{ div:["xx yy"], kf_s:["Reporter Name","reporter_fullname",":k:dispositions_f:reporter_fullname"] },

	{ div:["xx yy"], kf_s:["Reporter Phone","reporter_phone",":k:dispositions_f:reporter_phone"] },
	
	{ div:["xx yy"], kf_l:["Reporter Age","tag_-r_--o--%1-category_id-reporter_age_group_id-%0-%1", "case_lc_main-subcategories", 
":k:dispositions_f:reporter_age_group_id", ""," %1","category_id","reporter_age_group_id"," %0"," %1", "case_age_group_root_id"] },

	{ div:["xx yy"], kf_l:["Reporter Sex","tag_-r_--o--%1-category_id-reporter_sex_id-%0-%1", "case_lc_main-subcategories",  
":k:dispositions_f:reporter_sex_id", ""," %1","category_id","reporter_sex_id"," %0"," %1", "case_sex_root_id"] },

	{ div:["xx yy"], kf_l:["Reporter Location","tag_-r_--o--%1-category_id-reporter_location_id-%0-%1", "case_location_lc_main-subcategories",  ":k:dispositions_f:reporter_location_id", ""," %1","category_id","reporter_location_id"," %0"," %1", "case_location_root_id"] },
	

]};

te["activity_match_f"] = { div:["w60 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ div:["x15"], c:
	[
		{ div:["t15","vb"], c:
		[
			{ s:["c xx y h3 b","Search"] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","1","radio"] }, { ac:["ay tab","","_tab","xx y bd16 gws_ cb","Cases"] } ] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","0","radio","1"] }, { ac:["ay tab","","_tab","xx y bd16 gws_ cb","Contacts"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","2","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Client"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","3","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Perpetrator"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","4","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Sevices"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","5","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Referals"] } ] },
			{ div:["e"] }
		]},
		{ div:["y20"], c:
		[
			{ div:[], c:[ { input:["g","","case_f_vw_tv","0","radio","1"] }, { div:["tabv"], activity_contacts_f:[] } ] },
			{ div:[], c:[ { input:["g","","case_f_vw_tv","1","radio"] }, { div:["tabv"], activity_cases_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","2","radio"] }, { div:["tabv"], case_clients_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","3","radio"] }, { div:["tabv"], case_perpetrators_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","4","radio"] }, { div:["tabv"], case_services_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","5","radio"] }, { div:["tabv"], case_referals_f:[] } ] }
		]}
	]},
	{ vp_apply:["activity_match_f_tags-dispositions_f"] }
]};

te["activity_match_vw_contact_list"] = { c:  
[
	{ activity_contact_k:[] }, 
	{ uv:["activity_contact_list","dispositions"] } // cascade filter to contacts
]};	
	
te["activity_match_vw"] = { c:
[
	{ div:[], c:[ { arg:["","_c","20"] } ] }, // need for corect filtering // div also needed by uvpf
	
	{ div:[], c:
	[
		{ div:["d w48"], c:[ { div:["abs l25 r35 w40 ","vt"], c:
		[
			{ p:["","vtn"] },
			{ div:["","vt"], u:[":u::3:0:noop:activity_match_vw_contact_list"] }
		]} ]}	
	]},
	
	{ div:["mr50 x20"], c: // 
	[	
		{ p:["","vtdisp"], u:["activity_disposition_history_list","dispositions_ctx"] }
	]},
]};

te["activity_match_vw_f"] = { c: 
[
	{ div:["x25 t15","vb"], c:
	[
		{ ac:["c","","","x y08 cb h3 b",""], c:
		[
			// { span:["","","%4"] },
			{ span:["","","Contact History"] }
		]},
	
		
		{ div:["d xx"], c:
		[
			{ input:["g","","activity_vw_vt3","0","radio"] },
			{ ac:["ao","activity_disposition-subcategories-^","_activity_disposition","x bd16 gg cw",""], c:
			[
				{ s:["c x t h2 b","#"] },
				{ s:["c x y s","Disposition"] },
				{ input:["g","","adt","2","radio",""] },
				{ div:["e"], c:[ { arg:["","category_id",DISPOSITION_ROOT_ID] }, { arg:["","_c","100"] }, { arg:["","sort","name"] } ] }
			]},
			{ div:["g"], arg:["","","activity_disposition_ufn-dispositions-vftab"] }, // vp return anchor
		]},

		{ div:["d xx"], c:
		[
			{ input:["g","","activity_vw_vt3","1","radio"] },
			{ ac:["ao ","reporter_uuid-reporters^uuid","_activity_case","x bd16 gg cw",""], c:
			[
				{ s:["c x t04 h2 b","+"] },
				{ s:["c x y s","New Case"] },
				{ div:["e"], arg:["","case_id","-1"] }
			]},
			{ div:["g"], arg:["","",""] }, // vp return anchor
		]},
		
		{ div:["d xx"], c:
		[
			{ input:["g","","activity_vw_vt3","1","radio"] },
			{ ac:["al","case_contact_new-r_-^","_activity_contact_new","x bd16 gg cw",""], c:
			[
				{ s:["c x t04 h2 b","+"] },				
				{ s:["c x y s","New Reporter"] },
				{ div:["e"], c:[ { arg:["phone-8","",":k:dispositions_k:src_address:2"] } ] }
			]},
			{ div:["g"], arg:["","","activity_contact_r_new-contacts-vftab-vtn"] }, // vp return anchor
		]},
		
		{ div:["d xx"], ac:["ay","activity_match_f-dispositions_f","_vpf","xx bd16 gws_ cb",""], c:
		[ 
			{ s:["c t04 h3_ micon","search"] },
			{ div:["c x y","","Search"] }, 
			{ div:["e"] }
		]},

		{ div:["e"], c:[ { arg:["","","activity_match_vw-dispositions"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},

	{ div:["x25 y20","vf"], c:[ { div:["","activity_match_f-dispositions_f"], ev:["l__vpf"], c:
	[
		{ activity_match_f_tags_k:[] }
	]} ]},
	
	{ div:[], c:
	[
		{ div:[], c:
		[ 
			{ input:["g","","cghgmtv","0","radio","1"] }, 
			{ p:["_tabv","vs"], u:["activity_match_vw","dispositions_ctx"] } 
		]},
	]}
]};

te["activity_match"] = { c: // 
[
	{ div:[], c:
	[
		{ input:["g","","activity_vw_vt2","1","radio","1"] }, // search reporter
		{ p:["tabv ","vftab"], u:["activity_match_vw_f","activities"] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt2","1","radio"] }, // case-form (new|followup)
		{ p:["tabv ","vfvw"] }
	]},
]};

te["activity_vw_id_tabs"] = { activity_vw_id_tabs_:["","noop","1","activity_match"] };
		
// --------------------------------------------------------------

te["activity_vw_id_tabs_"] = { c:
[
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","0","radio",null] }, // src
		{ p:["tabv","vfvw"], u:[null] } // vfls
	]},
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","0","radio",null] }, // profile
		{ p:["tabv mh90","vfvw"], u:[null] } 
	]}	
]};

te["activity_btns"] = { c:
[	
	{ div:["d x"], c:
	[
		{ input:["g","","sbr","1","radio"] },
		{ ac:["x","","_activity_close","x cb",""], c:
		[
			{ s:["d x y h2 b","&Cross;"] },
			{ s:["d x y ","Close"] },
			{ div:["e"] }
		]},
	]},
		
	{ div:["e"] }
]};

te["activity_toolbar"] = { div:["ma w18 g","chan_id_here"], c: // 
[
	{ input:["g","","sbl__","1","radio","1"] },
	{ ac:["abs mtn45 ao t08 w13 bd","","","w13 bd tc cw",""], c:[ { div:[""], c:
	[
		{ s:["x y tc",":v:activities:src::case_src:1"] },
	]} ]}
]};

te["activity_vw_id"] = { c: 
[
	{ div:["t08 b02","vb"], c: 
	[
		{ div:["c x15 n"], c:
		[
			{ input:["g","","avt","0","radio"] },
			{ ac:["ay tabu","","_tab","xx yy cb",""], c:
			[
				{ span:["","",":v:activities:src_vector::vector:4"] },
				{ span:["x","",":v:activities:src::case_src:1"] },
			]},
		]},
                { div:["c t07 cb b"], s:["x h2 micon","navigate_next"] },
		{ div:["c x15 n"], c:
		[
                	{ input:["g","","avt","1","radio"] },
			{ ac:["ay tabu","","_tab","xx yy cb",":v:activities:src_address"] },
		]},
			
		{ p:["d w50 t","src_btns"], c:[ { div:["abs w50",":v:activities:src_uid"], u:[null] } ] }, 	// chan button
		
		{ p:["e","o"], c:[ { arg:["","src",":v:activities:src"] }, { arg:["","src_ts",":v:activities:src_ts"] }, { arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_callid",":v:activities:src_callid"] }, { arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, { arg:["","src_vector",":v:activities:src_vector"] }, { arg:["","src_uid2",":v:activities:src_uid2"] } ] },
	]}, 
	{ form:["t bt_"] } 	// tabs
]};

// -------------------------------------------------------------

te["activity_lst_footer"] = { div:["x y mt"], c:
[
	{ div:["d t03"], c:[ { ac:["nav","activity_lst-activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","activity_lst-activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d l r15 y cd s","%4"] },
	{ s:["d  y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d x y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};

te["activity_lst_disposition_r"] = { div:["d ll y04 s cr"], uval:["","%0"] };

te["activity_lst_disposition"] = { uchk:["activity_lst_disposition_r","%0"] };

te["activity_lst_r"] = { div:[], c:
[
	{ input:["g","","sbl","1","radio"] },
	{ li:["sbr cb xx bb_",""], ev:["_activity_vw"], s:["x s y",""], c: 
	[
		{ div:[""], c:
		[
			{ div:[], c:
			[
				{ s:["c t",":v:activities:src_vector::vector:4"] },  
				{ s:["c t x",":v:activities:src::case_src:1"] },
				{ s:["d t",":r::18:: : ago:: : ago:"] },
				{ arg:["tm","","%18"] },
				{ div:["e"] }
			]},
			{ div:[], c:
			[
				{ s:["c t",":v:activities:src_address"] },	
				{ s:["d t",":h:ms:24:0:"] },
				{ s:["d x t",":v:activities:src_status::activity_status:1"] }, 
				{ div:["e"] }
			]},
			{ p:["",":v:activities:src_uid"], c:
			[ 
				{ uchk:["activity_lst_disposition_r",":v:activities:dispositions"] }, 
				{ div:["e"] } 
			]}
		]},
		
		{ div:["e"], c:
		[ 
			{ arg:["",".id","%0"] }, { arg:["","src",":v:activities:src"] },
			{ arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_uid2",":v:activities:src_uid2"] }, 
			{ arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, 
			{ arg:["","src_vector",":v:activities:src_vector"] },  { arg:["","src_ts",":v:activities:src_ts"] }, 
			{ arg:["","src_callid",":v:activities:src_callid"] } 
		]}
	]}
]};

te["activity_lst_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["activity_lst_title"] = { div:["x y bb_"], c:
[
	{ div:["c","va"], ac:["","activity_lst-activities-vt","_u","xx yy cd","Activities"] },
	{ div:["e"] }
]};

te["activity_lst"] = { list:["activity_lst_title","end","","activity_lst_k","activity_lst_r","activities","activity_lst_footer"] }; // sbr panel

// -------------------------------------------------------------

te["activity_case_ufn"] = { ufn:["activity_case_ufn"] };

te["activity_disposition_ufn"] = { ufn:["activity_disposition_ufn"] };

// -------------------------------------------------------------

function activity_messages_height (el, u, a, r, m)
{
	el.style.height = window.innerHeight-270;
	var h = el.scrollHeight;
	console.log (" [scroll height ] "+h);
	el.scroll ({ top: h, left: 0, behavior: 'smooth' }); 
}

function activity_messages_ufn (el, u, a, r, m)
{
	var p = el.nextSibling.firstChild; 
	var id = null;
	if (p.lastChild && p.lastChild.firstChild) id = p.lastChild.firstChild.value;
	var rr = ra["messages"];
	var n = rr.length;
	for (var i=n-1; i>-1; i--)
	{
		var r = rr[i];
		if (id!==null && r[0]<=id) continue;
		// console.log ( " msg :"+r[0]+" |"+id)
		nd (p, te["activity_message_r"], [], r, [0]);
	}
	activity_messages_height (p, u, a, r, m);
}

function activity_message_sended (el, u, a, r, m)
{
	var p = __(el,"ve");
	var k = ra["messages_k"]
	nd (el, te["activity_messages_txt"], [], [], [0]);
	url (p.parentNode.firstChild, "activity_messages", "messages", ("?src="+r[k["src"][0]]+"&src_uid="+r[k["src_uid"][0]]+"&"));
}

function _activity_message_send (ev)
{
	var p = __(this,"ve");
	var p_ = __(this,"vfvwm");
	var o = {};
	jso (p_.firstChild, o);   	// channel session details
	jso (p,o); 			// vp details
	url (p, "activity_message_send", "messages", o[".id"], null, 2, o, "POST");
	boo (ev)
}

// -------------------------------------------------------------

function activity_close ()
{
	var coll = document.getElementById ("vv").childNodes;	
	coll[1].innerHTML = ""; // toolbar
	coll[6].childNodes[1].childNodes[1].innerHTML = "";  // vw
	coll[6].childNodes[10].firstChild.checked = true; // todo: show last tab b4 popup
	nd (coll[1], te["toolbar_default"], [], [], [0]); // show toolbar
	var p = document.getElementById ("vp"); // close vp (if open)
	p.style.display = "none";
	p.innerHTML = "";
}

function activity_disposition (p)
{
	var a = {args:"?", _c:null, __c:null};
	argv (p.childNodes[1].firstChild, a);
	url (p, "activity_match_vw_f", "dispositions", a.args);
	// todo: update sbr
}

function activity_case_ufn (el, u, a, r, m)
{
	var p_ = __(el,"vfvwm");
	nd (el, te["case_vw_id"], [], r, [0]);
	if (p_.firstChild.lastChild.childNodes.length==0) return; // is non-activity  
	activity_disposition (el.parentNode.previousSibling.childNodes[1]);
}

function activity_disposition_ufn (el, u, a, r, m)
{
	activity_disposition (el)
	var p = __(el,"vfvwm")
	var callid = _(p,"src_btns").firstChild.firstChild;
	if (callid!=null && callid.value && callid.value.length>0) 
	{
		phone_hangup (callid.value);
		activity_close ();
	}
}

function _activity_close (ev)
{
	// this.previousSibling.checked = true;
	activity_close ();
	boo (ev)
}

function _activity_case_postj (ev)
{
	var u = this.id.split ("-");
	var p = __(this, "ve");
	var p_ = __(elvp,"vfvw");
	var p__ = __(p_,"vfvwm");
	var o = {};
	var o_ = {};
	jso (p__.firstChild, o);  // channel details
	jso (p, o);
	jso (p_, o_);
	o["case_id"] = o_[".id"];
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

function _activity_postj (ev)
{
	var u = this.id.split ("-");
	var p = __(this, "ve");
	var p_ = __(elvp,"vfvwm");
	var o = {};
	jso (p_.firstChild, o);   // channel details
	jso (p, o)		  // disposition (including reporter - if selected)
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

function _activity_case (ev)
{
	var u = this.id.split ("-");
	var p = __(this, "vftab");
	var p_ = __(this, "vftab").parentNode.nextSibling;
	var o = {};
	var o_ = {};
	argv (__(p,"vfvwm").firstChild.lastChild, o);  	// channel data
	argv (this, o);					// case_id
	jso (p, o_)					// contact_id (reporter)
	if (o_["activity_contact_id"]) o["contact_id"] = o_["activity_contact_id"];
	this.previousSibling.checked=true;
	p_.firstChild.checked = true;
	p_.childNodes[1].innerHTML = "";
	url (p_.childNodes[1], u[0], u[1], "", null, 1, o, "POST");
	boo (ev)
}

function _activity_disposition (ev)
{
	var p = __(this, "vftab");
	var o = {};
	var o_ = {};

	var pvp = document.getElementById ("vp");
	elvp = this.nextSibling;
	vp (pvp);

	jso (__(p,"vfvwm").firstChild, o);  	// channel data
	jso (p, o_)				// contact_id (reporter)
	argv (this.lastChild, o);		// disposition_root_id

	if (!o_["activity_contact_id"]) 
	{
		urargs (this, pvp);
		return;
	}

	o["contact_id"] = o_["activity_contact_id"];
	o["case_id"] = "-1";

	url (pvp, "reporter_duuid", "reporters^uuid", "", null, 0, o, "POST");

	boo (ev);
}

function _activity_contact ()
{
	this.previousSibling.checked = true;
	
	// todo: reload activity_disposition_history_list  (for contact_id)
}

function _activity_contact_new (ev)
{
	var p = document.getElementById ("vp");
	elvp = this.nextSibling;
	vp (p);
	urargs (this, p);
	boo(ev);
}

function _activity_search (ev)
{
	var p = document.getElementById ("vp");
	var u = this.id.split ("-"); 
	var o = {}; 
	// elvpf = __(this,"vb").nextSibling;
	elvpf = __(this,"vftab").childNodes[1];
	jso (elvpf, o);
	ra[u[1]] = o;
	vp (p);
	nd (p, te[u[0]], [], [], [0]);
}

function _activity_show ()
{

}

// nb chat has different activity_vw_id layout chat window bieng the main window (select reporter window will not have disposition, new case btns
// new case , disposition buttons will be in chat window 
function _activity_vw (ev) 
{
	var coll = document.getElementById ("vv").childNodes;
	var a = {};
	var r_ = re["r_"][0].slice(0);
	var k = re["activities_k"];
	var u = ["activity_match","activities"]
	argv (this, a);
	if (a.src=="walkin") // && a.src_uid==undefined) // simulate chani 
	{ 
		var user_cid = document.getElementById ("user_cid").value;
		a.src_ts = Date.now()/1000;
		a.src_uid="walkin-"+user_cid+"-"+Date.now ();
		a.src_callid = a.src_uid;
		a.src_address = "";
		a.src_usr = user_cid
		a.src_vector = 2;
		a.src_uid2 = a.src_uid+"-2";
	}
	r_[k["src"][0]] = a.src;
	r_[k["src_ts"][0]] = a.src_ts;
	r_[k["src_uid"][0]] = a.src_uid;
	r_[k["src_callid"][0]] = a.src_callid;
	r_[k["src_address"][0]] = _phone_fmt (a.src_address);
	r_[k["src_usr"][0]] = a.src_usr;
	r_[k["src_vector"][0]] = a.src_vector;
	r_[k["src_uid2"][0]] = a.src_uid2;

	var s = a[".id"]+"?src=" + a.src + "&src_uid=" + a.src_uid; 
	if (r_[k["src_address"][0]].length>0)  
	{
		s += "&src_address="+r_[k["src_address"][0]];
	}
	
	this.previousSibling.checked = true; // hilite call-notif
	coll[1].innerHTML = ""; 			
	coll[6].childNodes[1].firstChild.checked = true;
	coll[6].childNodes[1].childNodes[1].innerHTML = "";

	nd (coll[1], te["activity_toolbar"], [], r_, [0]); // show toolbar	
	nd (coll[6].childNodes[1].childNodes[1], te["activity_vw_id"], ["activity_btns"], r_, [1]);	
	url (coll[6].childNodes[1].childNodes[1].lastChild, u[0], u[1], s);

	boo (ev)
}

