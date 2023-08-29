
te["case_reporter_edw_"] = { div:["","ve"], c:
[
	{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","reporters_nb"] }, { div:["e"] } ] },

	{ p:["","contact"], case_contact_edw_:
	[
"Reporter's Name",":v:reporters:contact_fullname","Enter Reporter's Names",
":v:reporters:contact_sex_id",":v:reporters:contact_sex"," %0",  
":v:reporters:contact_age",":v:reporters:contact_dob",":v:reporters:contact_dob",":v:reporters:contact_age_group_id",":v:reporters:contact_age_group"," %0", 
":v:reporters:contact_location_id",":v:reporters:contact_location"," %0",
":v:reporters:contact_nationality_id",":v:reporters:contact_nationality"," %0",
":v:reporters:contact_lang_id",":v:reporters:contact_lang"," %0", 
":v:reporters:contact_landmark",
":v:reporters:contact_national_id_type_id",":v:reporters:contact_national_id_type"," %0",
":v:reporters:contact_national_id",
"%9", //:v:reporters:contact_phone
":v:reporters:contact_phone2", 
":v:reporters:contact_email"
	]},
				
	{ div:["w85 b20"], c:
	[
		{ div:["d w21"], c:[ { div:["abs mtn30 w21"], c:
		[
			{ ac:["btn ao",null,null,"y gb cw tc",null] },
			{ div:["savl"], s:["w21 y go cw tc bd",null] },
		]} ]},
		// { div:["d x20","va"], ac:["w10","reporter_vw_id-reporters-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
		{ p:["e","o"], c:[ { arg:["",".id","%0"] } ] }
	]}
]};	

te["case_reporter_ed_"] = { div:["","ve"], c:
[
	{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","reporters_nb"] }, { div:["e"] } ] },

	{ p:["","contact"], case_contact_ed_:
	[
"Reporter's Name",":v:reporters:contact_fullname","Enter Reporter's Names",
":v:reporters:contact_age",":v:reporters:contact_dob",":v:clients:contact_dob",":v:clients:contact_age_group_id",":v:clients:contact_age_group"," %0", 
":v:reporters:contact_location_id",":v:reporters:contact_location"," %0",
":v:reporters:contact_sex_id",":v:reporters:contact_sex"," %0",  
":v:reporters:contact_landmark",
":v:reporters:contact_nationality_id",":v:reporters:contact_nationality"," %0",
":v:reporters:contact_national_id_type_id",":v:reporters:contact_national_id_type"," %0",
":v:reporters:contact_national_id", 
":v:reporters:contact_lang_id",":v:reporters:contact_lang"," %0", 
":v:reporters:contact_tribe_id",":v:reporters:contact_tribe"," %0",
":v:reporters:contact_phone",
":v:reporters:contact_phone2", 
":v:reporters:contact_email"
	]},			
				
	{ div:[" t20"], c:
	[
		{ div:["d w21"], c:[ { div:[" w21"], c:
		[
			{ ac:["btn ao",null,null,"y gb cw tc",null] },
			{ div:["savl"], s:["w21 y go cw tc bd",null] },
		]} ]},
		// { div:["d x20","va"], ac:["w10","reporter_vw_id-reporters-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
		{ p:["e","o"], c:[ { arg:["",".id","%0"] } ] }
	]}
]};

te["case_reporter_ed"] = { div:["w63 ma sh__ gw x15 y15"], c:
[	
	{ div:["b10"], c:
	[
		{ s:["c x y n b","Edit Reporter Details",] },
		{ ac:["d ay","","_uvp","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ case_reporter_ed_:["reporter_ed-reporters","_postj_activity","Update","Updating"] }
]};

te["case_reporter_new"] = { div:["w63 ma sh__ gw x15 y15"], c:
[	
	{ div:["b10"], c:
	[
		{ s:["c x y n b","New Reporter Details",] },
		{ ac:["d ay","","_uvp","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ case_reporter_ed_:["reporter_new-reporters","_postj_activity","Next","Saving"] }
]};

// --------------------------------------------------------------------------------------------

te["case_reporter_vw_id_"] = { c:
[
	{ div:["x15 b10"], case_contact_vw_id_:
	[
":v:reporters:contact_fullname",":v:reporters:contact_age",":v:reporters:contact_age_group",":v:reporters:contact_dob",
":v:reporters:contact_location",":v:reporters:contact_sex",
":v:reporters:contact_landmark",":v:reporters:contact_nationality",
":v:reporters:contact_national_id_type",":v:reporters:contact_national_id", ":v:reporters:contact_lang",
":v:reporters:contact_tribe",
":v:reporters:contact_phone",":v:reporters:contact_phone2",":v:reporters:contact_email"
	]}
]};

te["case_reporter_vw_id_print"] = { div:["x15"], c:
[
	{ s:["x y h3 b ","Reporter Details"] }, 
	{ case_reporter_vw_id_:[] }, 
	{ div:["page-break"] }
]};
	
te["case_reporter_vw_id"] = { div:["w66 ma bd sh__ gw y15","vddvw"], ev:["_undd"], c:
[
	{ div:["x15 b10"], c:
	[
		{ s:["c x y h3 b","Reporter Details"] },
		{ ac:["d ay","","_uvp","x bd gww cb",""], c:[ { s:["c h2 y","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["d x20 ay","va"], ac:["ay r05","reporter_ed-reporters-vp","_u","xx y04 ba_b cb bd","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ case_reporter_vw_id_:[] }
]};

