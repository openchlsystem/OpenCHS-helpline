

te["case_perp_marital_sel_sub"] = { div:["","sub"], c:
[
	// 362019-cohabiting,236657:divoced, 236658:married, 362020:separated, 236656:widow
	{ arg:["case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse-r_-ve-_case_perp_spouse_","","362019,236657,236658,362020,236656"] },
]};

te["case_perp_marital_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Marital Status","marital_id", MARITAL_STATUS_ROOT_ID,""] };

te["case_perp_marital_enum"] = { case_enum_ls:[null,"tag-r_--o-case_perp_marital_tag_txa-%1-marital_id-%0-%2", "category_ls-subcategories", "c w17", 
"case_perp_marital_tag_txa","r_", 
null, "case_perp_marital_tag_txa",null,"marital_id",null," %2", 
MARITAL_STATUS_ROOT_ID, "noop", 
"dd w21 gw ba_b", 
"case_perp_marital_sel_sub"] };

// ---- 

te["case_perpetrator_ed_sub_spouse"] = { div:["tt"], c:
[	
	{ div:["c w41"], case_txt_:["Spouse Name","gws w41 x tt b05","spouse_fullname",":v:perpetrators:spouse_fullname",""] },
	{ div:["c w21 ll"], case_spouse_employment_enum:["Spouse Profession",":v:perpetrators:spouse_profession_id",":v:perpetrators:spouse_profession"," %0"] },
	{ div:["e"] }
]};

te["case_perpetrator_ed_"] = { div:["w63 ma bd sh__ gw x15 y15"], c:
[
	{ div:["b10"], c:
	[
		{ s:["c x y n b",null] }, 
		{ ac:["d ay","","_uvp","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
	
	{ div:["","ve"], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","perpetrators_nb"] }, { div:["e"] } ] },
		
		{ p:["","contact"], case_contact_ed_:
		[
"Perpetrator's Name",":v:perpetrators:contact_fullname","Enter Perpetrator's Names",
":v:perpetrators:contact_age",":v:perpetrators:contact_dob",":v:perpetrators:contact_dob",":v:perpetrators:contact_age_group_id",":v:perpetrators:contact_age_group"," %0", 
":v:perpetrators:contact_location_id",":v:perpetrators:contact_location"," %0",
":v:perpetrators:contact_sex_id",":v:perpetrators:contact_sex"," %0",  
":v:perpetrators:contact_landmark",
":v:perpetrators:contact_nationality_id",":v:perpetrators:contact_nationality"," %0",
":v:perpetrators:contact_national_id_type_id",":v:perpetrators:contact_national_id_type"," %0",
":v:perpetrators:contact_national_id", 
":v:perpetrators:contact_lang_id",":v:perpetrators:contact_lang"," %0", 
":v:perpetrators:contact_tribe_id",":v:perpetrators:contact_tribe"," %0",
":v:perpetrators:contact_phone",
":v:perpetrators:contact_phone2", 
":v:perpetrators:contact_email", 
		]},
	
		{ div:["tt"], c:
		[
			{ div:["c w20"], case_rela_enum:["Relationship with Client?",":v:perpetrators:relationship_id",":v:perpetrators:relationship"," %0"] },
			{ div:["c w20 ll"], case_shareshome_enum:["Shares Home with Client?",":v:perpetrators:shareshome_id",":v:perpetrators:shareshome"," %0"] }, 
//			{ div:["c w21 ll"], case_employment_enum:["Perpetrator's Profession",":v:perpetrators:employment_id",":v:perpetrators:employment"," %0"] },
//			{ div:["e"] }
//		]},
		
//		{ div:["tt"], c:
//		[	
//			{ div:["c w20"], case_perp_marital_enum:["Perpetrator's Marital Status",":v:perpetrators:marital_id",":v:perpetrators:marital"," %0"] },
		//	{ div:["c w21 ll"], case_health_enum:["Health Status",":v:perpetrators:health_id",":v:perpetrators:health"," %0"] },
			{ div:["e"] }
		]},
		
//		{ p:["","_case_perp_spouse_"], usub:["case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse,case_perpetrator_ed_sub_spouse"
// ,"r_",":v:perpetrators:marital_id","362019,236657,236658,362020,236656"] },
			
		{ div:["tt"], c:
		[
			{ div:["c w41"], case_txt_:["Perpetrator's Guardian's Name","gws w41 x tt b05","guardian_fullname",":v:perpetrators:guardian_fullname","Enter Perpetrator's Guardian Name"] },
			
			{ div:["e"] }
		]},
			
		{ div:["tt"], c:
		[
			{ s:["x y", "Additional Details"] },
			{ p:["w63 gws bd","o"], c:[ { textarea:["gws w63 h11 x y08","","notes",":v:perpetrators:notes","Enter Additional Details"] } ] },
			{ div:["e"] }
		]},
		
		{ div:["t25 w63"], c:
		[	
			{ div:["d w22"], c:
			[
				{ ac:["btn ao",null,null,"y gb cw tc ",null] },
				{ div:["savl"], s:["y go cw tc bd",null] },
			]},
			// { div:["d x20","va"], ac:["w10","perpetrator_vw_id-perpetrators-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
			{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","case_id",":v:perpetrators:case_id"] } ] },
		]}
	]}
]};

te["case_perpetrator_ed"] = { case_perpetrator_ed_:["Edit Perpetrator Details","perpetrator_ed-perpetrators","_postj_activity","Update","Updating Perpetrator Details..."] };
te["case_perpetrator_new"] = { case_perpetrator_ed_:["New Perpetrator","perpetrator_new-perpetrators","_postj_activity","Add","Adding Perpetrator..."] };

// --------------------------------------------------------------------------------------------

te["case_perpetrator_vw_sub_spouse"] = { div:["x15 tt"], c:
[	
	{ div:["c w41"], case_vw_val:["Spouse Name",":v:perpetrators:spouse_fullname",""] },
	{ div:["c w21 ll"], case_vw_val_cat:["Spouse Profession","",":v:perpetrators:spouse_profession"," %0"] },
	{ div:["e"] }
]};

te["case_perpetrator_vw_id_"] = { c:
[
	
	{ div:["x15 b10"], case_contact_vw_id_:
	[
":v:perpetrators:contact_fullname",":v:perpetrators:contact_age",":v:perpetrators:contact_age_group",":v:reporters:contact_dob",
":v:perpetrators:contact_location",":v:perpetrators:contact_sex",
":v:perpetrators:contact_landmark",":v:perpetrators:contact_nationality",
":v:perpetrators:contact_national_id_type",":v:perpetrators:contact_national_id",":v:perpetrators:contact_lang",
":v:perpetrators:contact_tribe",
":v:perpetrators:contact_phone",":v:perpetrators:contact_phone2",":v:perpetrators:contact_email"
	]},

	{ div:["x15 tt"], c:
	[
		{ div:["c w20"], case_vw_val_cat:["Relationship with Client?","",":v:perpetrators:relationship"] },
		{ div:["c w20 ll"], case_vw_val_cat:["Shares Home with Client?","",":v:perpetrators:shareshome"] },
//		//{ div:["c w21 ll"], case_vw_val_cat:["Perpetrator's Profession","",":v:perpetrators:employment"] },
//		{ div:["e"] }
//	]},
	
//	{ div:["x15 tt"], c:
//	[	
//		{ div:["c w20"], case_vw_val_cat:["Perpetrator's Marital Status","",":v:perpetrators:marital"] },
//		{ div:["c w21 ll"], case_vw_val_cat:["Health Status","",":v:perpetrators:health"] },
		{ div:["e"] }
	]},
	
//	{ div:[], usub:["case_perpetrator_vw_sub_spouse,case_perpetrator_vw_sub_spouse,case_perpetrator_vw_sub_spouse,case_perpetrator_vw_sub_spouse,case_perpetrator_vw_sub_spouse"
// ,"r_",":v:perpetrators:marital_id","362019,236657,236658,362020,236656"] },
	
	{ div:["x15 tt"], c:
	[
		{ div:["c w41"], case_vw_val:["Perpetrator's Guardian's Name",":v:perpetrators:guardian_fullname"] },	
		{ div:["e"] }
	]},
			
	{ div:["x15 yy"], c:
	[
		{ div:["w63"], case_vw_val:["Additional Details",":v:perpetrators:notes"] },
		{ div:["e"] }
	]}
]};

te["case_perpetrator_vw_id_print"] = { div:["x15"], c:
[
	{ s:["x y h3 b ","Perpetrator Details"] }, 
	{ case_perpetrator_vw_id_:[] }, 
	{ div:["page-break"] }
]};

te["case_perpetrator_vw_id"] = { div:["w66 ma bd sh__ gw y15","vddvw"], ev:["_undd"], c:
[
	{ div:["x15 b10"], c:
	[
		{ s:["c x y h3 b","Perpetrator Details"] },
		{ ac:["d ay","","_uvp","x bd gww cb",""], c:[ { s:["c h2 y","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["d x20 ay","va"], ac:["ay r05","perpetrator_ed-perpetrators-vp","_u","xx y04 ba_b cb bd","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ case_perpetrator_vw_id_:[] }
	
]};

