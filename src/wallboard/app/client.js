

te["case_client_marital_sel_sub"] = { div:["","sub"], c:
[
	// 362019-cohabiting,236657:divoced, 236658:married, 362020:separated, 236656:widow
	{ arg:["case_client_ed_sub_spouse,case_client_ed_sub_spouse,case_client_ed_sub_spouse,case_client_ed_sub_spouse,case_client_ed_sub_spouse-r_-ve-_case_client_spouse_","","362019,236657,236658,362020,236656"] },
]};

te["case_client_marital_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Marital Status","marital_id",MARITAL_STATUS_ROOT_ID,""] };

te["case_client_marital_enum"] = { case_enum_ls:[null,"tag-r_--o-case_client_marital_tag_txa-%1-marital_id-%0-%2", "category_ls-subcategories", "c w17", 
"case_client_marital_tag_txa","r_", 
null, "case_client_marital_tag_txa",null,"marital_id",null," %2", 
MARITAL_STATUS_ROOT_ID, "noop", 
"dd w21 gw ba_b", 
"noop"] };

// ---------------------------

te["case_client_ed_sub_disabled_services"] = {  c:
[
	{ div:["yy"], case_enum_lc:["Special Services Referal","taga-r_--a--%1-category_id-%0-noop", "case_referal_lc_main-subcategories", 
"client_referals", "c w34 x y",    
":v:clients:is_disabled_referals","client_referal_del-client_referals-client_id"," %1","category_id"," %0","noop",  
CASE_REFERALS_ROOT_ID,"noop", 
"dd w40 ba_b gw","noop"] }
]};

te["case_client_ed_sub_disabled"] = { div:["b20"], c:
[	
	{ div:["c w20"], case_disability_enum:["Disability",":v:clients:disability_id",":v:clients:disability"," %0"] },
	{ div:["c w42 ll","va"], c: // case_txt_:["Is the Client refered for Special Services?","gws w42 x tt b05","special_services",":v:clients:special_services",""] },
	[
		{ s:["x y","Is the Client refered for Special Services?"] },
		{ p:["t03","o"], c:
		[
			{ uchk:["case_yesno_r",":v:clients:is_disabled_refered","yesno","",  "is_disabled_refered"," %2"] },
			{ div:["e","sub"], arg:["case_client_ed_sub_disabled_services-r_-ve-_case_client_disabled_services_","","1"] }		
		]},
		{ p:["","_case_client_disabled_services_"], usub:["case_client_ed_sub_disabled_services","r_",":v:clients:is_disabled_refered","1"] }
	]},
	{ div:["e"] }
]};

te["case_client_ed_sub_inschool_yes"] = { div:["b20"], c:
[
	{ div:["t15"], c:
	[	
		{ div:["c w41"], case_txt_:["School Name","gws w41 x tt b05","school_name",":v:clients:school_name",""] },
//		{ div:["c w21 ll"], case_school_level_enum:["School Level",":v:clients:school_level_id",":v:clients:school_level"," %0"] },
		{ div:["e"] }
	]},
//	{ div:["tt"], c:
//	[	
//		//{ div:["c w41"], case_txt_:["School Address","gws w41 x tt b05","school_address",":v:clients:school_address",""] },
//		{ div:["c w21 ll"], case_school_type_enum:["School Type",":v:clients:school_type_id",":v:clients:school_type"," %0"] },
//		{ div:["e"] }
//	]},
	{ div:["yy"], c:
	[	
//		{ div:["c w41"], case_txt_:["School Attendance","gws w41 x tt b05","school_attendance",":v:clients:school_attendance",""] },
		{ div:["c w20"], case_school_level_enum:["School Level",":v:clients:school_level_id",":v:clients:school_level"," %0"] },
		{ div:["c w20 ll"], case_school_type_enum:["School Type",":v:clients:school_type_id",":v:clients:school_type"," %0"] },
		{ div:["e"] }
	]},
]};

te["case_client_ed_sub_inschool_no"] = { div:["b20"], c:
[	
	{ div:["w62 t15"], case_txt_:["Reason for not attending school","gws w62 x tt b05","not_in_school_reason",":v:clients:not_in_school_reason",""] },
]};

te["case_client_ed_sub_spouse"] = { div:["t15 b20"], c:
[	
	{ div:["c w41"], case_txt_:["Client's Spouse Name","gws w41 x tt b05","spouse_fullname",":v:clients:spouse_fullname",""] },
	{ div:["c w21 ll"], case_spouse_employment_enum:["Client's Spouse Profession",":v:clients:spouse_profession_id",":v:clients:spouse_profession"," %0"] },
	{ div:["e"] }
]};

		
te["case_client_ed_"] = { div:["w63 ma bd sh__ gw x15 y15"], c:
[
	{ div:["b10"], c:
	[
		{ s:["c x y n b",null] }, 
		{ ac:["d ay","","_uvp","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
			
	{ div:["","ve"], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","clients_nb"] }, { div:["e"] } ] },

		{ p:["clk_client","contact"], case_contact_ed_:
		[
"Client's Name",":v:clients:contact_fullname","Enter Client's Names",
":v:clients:contact_age",":v:clients:contact_dob",":v:clients:contact_dob",":v:clients:contact_age_group_id",":v:clients:contact_age_group"," %0", 
":v:clients:contact_location_id",":v:clients:contact_location"," %0",
":v:clients:contact_sex_id",":v:clients:contact_sex"," %0",  
":v:clients:contact_landmark",
":v:clients:contact_nationality_id",":v:clients:contact_nationality"," %0",
":v:clients:contact_national_id_type_id",":v:clients:contact_national_id_type"," %0",
":v:clients:contact_national_id", 
":v:clients:contact_lang_id",":v:clients:contact_lang"," %0", 
":v:clients:contact_tribe_id",":v:clients:contact_tribe"," %0",
":v:clients:contact_phone",
":v:clients:contact_phone2", 
":v:clients:contact_email", 
		]},	
		
		{ div:["t15"], c:
                [
                        { div:["c w20"], case_rela_enum:["Reporter's Relationship with Client",":v:clients:relationship_id",":v:clients:relationship"," %0"] },
                        { div:["c w42 ll"], case_txt_:["Relationship <br/>Comment","gws w40 x yy","relationship_comment",":v:clients:relationship_comment","Enter Comments about the relationship"] },
                        { div:["e"] }
                ]},
                
                { div:["t15 g"], c:
                [
		        { div:["c w20"], case_txt_:["Number of Adult in Household","gws w41 x tt b05","household_adults",":v:clients:household_adults",""] },
                        { div:["c w42 ll"], case_txt_:["Parent/Guardian's Name","gws w41 x tt b05","guardian_fullname",":v:clients:guardian_fullname",""] },
                        { div:["e"] }
                ]},
                
		{ div:["t15"], c:
		[	
			{ div:["c w20 g"], case_health_enum:["Client's Health Status",":v:clients:health_id",":v:clients:health"," %0"] },
			{ div:["c w20 ll g"], case_hiv_enum:["Client's HIV Status",":v:clients:hiv_id",":v:clients:hiv"," %0"] },
			{ div:["c w21 ll g"], case_client_marital_enum:["Clients's Marital Status",":v:clients:marital_id",":v:clients:marital"," %0"] },
			{ div:["e"] }
		]},
		
//		{ p:["","_case_client_spouse_"], usub:["case_client_ed_sub_spouse,case_client_ed_sub_spouse,case_client_ed_sub_spouse,case_client_ed_sub_spouse,case_client_ed_sub_spouse"
//,"r_",":v:clients:marital_id","362019,236657,236658,362020,236656"] },

		{ div:["t15","va"], c:
		[
			{ s:["x t","Is the Client Attending School?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:clients:in_school","yesno","",  "in_school"," %2"] },
				{ div:["e","sub"], arg:["case_client_ed_sub_inschool_no,case_client_ed_sub_inschool_yes-r_-ve-_case_client_inschool_","","0,1"] }
			]},
		]},

		{ p:["","_case_client_inschool_"], usub:["case_client_ed_sub_inschool_no,case_client_ed_sub_inschool_yes","r_",":v:clients:in_school","0,1"] },
		
		{ div:["t15","va"], c:
		[
			{ s:["x t","Is the Client Disabled?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:clients:is_disabled","yesno","",  "is_disabled", " %2"] },
				{ div:["e","sub"], arg:["case_client_ed_sub_disabled-r_-ve-_case_client_disabled_","","1"] }
			]}
		]},

		{ p:["","_case_client_disabled_"], usub:["case_client_ed_sub_disabled","r_",":v:clients:is_disabled","1"] },

		{ div:["t25 w63"], c:
		[	
			{ div:["d w22"], c:
			[
				{ ac:["btn ao",null,null,"y gb cw tc",null] },
				{ div:["savl"], s:["y go cw tc bd",null] },
			]},
			// { div:["d x20","va"], ac:["w10","client_vw_id-clients-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
			{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","case_id",":v:clients:case_id"] } ] },
		]}
	]}
]};	

te["case_client_ed"] = { case_client_ed_:["Edit Client Details","client_ed-clients","_postj_activity","Update","Updating Client Details..."] };
te["case_client_new"] = { case_client_ed_:["New Client","client_new-clients","_postj_activity","Add","Adding Client..."] };

// --------------------------------------------------------------------------------------------

te["case_client_vw_disabiliy_services"] = { div:[""], c:
[
	{ s:["x tt cd","Referals"] },
	{ div:["r05 b05 n"], c:
	[ 
		{ uchk:["tagv",":v:clients:is_disabled_referals","","",  "x y bd gws"," %1"] }, 
		{ div:["e"] }
	]},
]};

te["case_client_vw_sub_disabled"] = { div:["x15 yy"], c:
[	
	{ div:["c w20"], case_vw_val:["Disability",":v:clients:disability"] },
	{ div:["c w42 ll","va"], c: 
	[
		{ case_vw_val:["Is the Client Refered for Special Services?",":v:clients:is_disabled_refered::yesno:2"] },
		{ div:[], usub:["case_client_vw_disabiliy_services","r_",":v:clients:is_disabled_refered","1"] }
	]},
	{ div:["e"] }
]};

te["case_client_vw_sub_inschool_yes"] = { div:["x15"], c:
[
	{ div:["tt"], c:
	[	
		{ div:["c w41"], case_vw_val:["School Name",":v:clients:school_name"] },
//		{ div:["c w21 ll"], case_vw_val_cat:["School Level","",":v:clients:school_level"] },
		{ div:["e"] }
	]},
//	{ div:["tt"], c:
//	[	
//		{ div:["c w41"], case_vw_val:["School Address",":v:clients:school_address"] },
//		{ div:["c w21 ll"], case_vw_val_cat:["School Type","",":v:clients:school_type"] },
//		{ div:["e"] }
//	]},
	{ div:["yy"], c:
	[	
//		{ div:["c w41"], case_vw_val:["School Attendance",":v:clients:school_attendance"] },
                { div:["c w20"], case_vw_val_cat:["School Level","",":v:clients:school_level"] },
                { div:["c w20 ll"], case_vw_val_cat:["School Type","",":v:clients:school_type"] },
		{ div:["e"] }
	]},
]};

te["case_client_vw_sub_inschool_no"] = { div:["x15 yy"], c:
[	
	{ div:["w62"], case_vw_val:["Reason for not attending school",":v:clients:not_in_school_reason"] }
]};

te["case_client_vw_sub_spouse"] = { div:["x15 tt"], c:
[	
	{ div:["c w41"], case_vw_val:["Client's Spouse Name",":v:clients:spouse_fullname",""] },
	{ div:["c w21 ll"], case_vw_val_cat:["Client's Spouse Profession","",":v:clients:spouse_profession"," %0"] },
	{ div:["e"] }
]};

te["case_client_vw_id_"] = { c:
[
	
	{ div:["x15 clk_client"], case_contact_vw_id_:
	[
":v:clients:contact_fullname",":v:clients:contact_age",":v:clients:contact_age_group",":v:clients:contact_dob",
":v:clients:contact_location",":v:clients:contact_sex",
":v:clients:contact_landmark",":v:clients:contact_nationality",
":v:clients:contact_national_id_type",":v:clients:contact_national_id",":v:clients:contact_lang",
":v:clients:contact_tribe",
":v:clients:contact_phone",":v:clients:contact_phone2",":v:clients:contact_email"
	]}, 

	{ div:["x15 mt t "], c:
        [
                { div:["c w20"], case_vw_val_cat:["Reporter's Relationship with Client","",":v:clients:relationship"] },
                { div:["c w42 ll"], case_vw_val:["Relationship Comment",":v:clients:relationship_comment"] },
                { div:["e"] }
        ]},
        
	{ div:["x15 mt t g"], c:
        [
                { div:["c w20"], case_vw_val:["Number of Adult in Household",":v:clients:household_adults"] },
                { div:["c w42 ll"], case_vw_val:["Parent/Guardian's Name",":v:clients:guardian_fullname"] },
        	{ div:["e"] }
        ]},
		
	{ div:["x15  mt t g"], c:
	[	
		{ div:["c w20 g"], case_vw_val_cat:["Client's Health Status","",":v:clients:health"] },
		{ div:["c w20 ll g"], case_vw_val_cat:["Client's HIV Status","",":v:clients:hiv"] },
		{ div:["c w21 ll g"], case_vw_val_cat:["Client's Marital Status","",":v:clients:marital"] },
		{ div:["e"] }
	]},

//	{ div:[], usub:["case_client_vw_sub_spouse,case_client_vw_sub_spouse,case_client_vw_sub_spouse,case_client_vw_sub_spouse,case_client_vw_sub_spouse"
// ,"r_",":v:clients:marital_id","362019,236657,236658,362020,236656"] },
			
	{ div:["x15 mt t","va"], c:
	[
		{ div:[], case_vw_val:["Is the Client attending school?",":v:clients:in_school::yesno:2"] },
	]},
	
	{ div:[], usub:["case_client_vw_sub_inschool_no,case_client_vw_sub_inschool_yes","r_",":v:clients:in_school","0,1"] },
		
	{ div:["x15 mt t","va"], c:
	[
		{ div:[], case_vw_val:["Is the Client Disabled?",":v:clients:is_disabled::yesno:2"] },
	]},

	{ div:[], usub:["case_client_vw_sub_disabled","r_",":v:clients:is_disabled","1"] },
	
]};

te["case_client_vw_id_print"] = { div:["x15"], c:
[
	{ s:["x y h3 b ","Client Details"] }, 
	{ case_client_vw_id_:[] }, 
	{ div:["page-break"] }
]};

te["case_client_vw_id"] = { div:["w66 ma bd sh__ gw y15","vddvw"], ev:["_undd"], c:
[
	{ div:["x15 b10"], c:
	[
		{ s:["c x y h3 b","Client Details"] },
		{ ac:["d ay","","_uvp","x bd gww cb",""], c:[ { s:["c h2 y","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["d x20","va"], ac:["ay r05","client_ed-clients-vp","_u","xx y04 ba_b cb bd","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ case_client_vw_id_:[] }
	
]};

