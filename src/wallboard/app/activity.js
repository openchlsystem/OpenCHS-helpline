
te["activity_end"] = { ufn:["activity_end_ufn"] };

te["activity_disposition_ed_r"] = { div:[], c:
[
	{ input:["g","","disposition_id","%0","radio"] },
	{ ac:["rg rc r ay bd_","","_opt","xx t02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w35 n","%7"] },
		{ div:["e"] }			
	]}
]};

te["activity_disposition"] = { div:["w40 ma sh__ gw x15 y15","vddvw"], ev:["_undd"], c:
[
	{ s:["xx yy h2 b","Disposition"] },
	{ div:["","ve"], c:
	[
		{ div:[], c:[ { p:["c","nb"] }, { div:["e"] } ] },
		{ p:["t","o"], u:["activity_disposition_ed_r","subcategories"] },
		{ ac:["x t20 btn","","_postj_disposition","y n ba_b cb b tc","Submit"] },
	]}
]};

te["activity_disposition_nb_r"] = { div:["d x y04 gp s cr bd16 mr"], uval:["",":v:dispositions:disposition"] };

te["activity_disposition_nb"] = { u:["activity_disposition_nb_r","dispositions"] };

te["activity_dispositions_match"] = { c:
[
	{ div:["tt"], c:
	[
		{ div:["d"], c:
		[
			{ ac:["ay","activity_disposition-subcategories-^","_vp","x12 y gb cw",""], c:
			[
				{ s:["","Disposition"] },
				{ div:["e"], c:[ { arg:["","category_id",DISPOSITION_ROOT_ID] }, { arg:["","_c","100"] }, { arg:["","sort","name"] } ] }
			]},
			{ div:["g"], arg:["","","activity_end-activities-vfvw-vdispo-@"] }, // vp return anchor
			{ div:["g"], arg:["","","----@"] }, // vp return anchor
		]},
		{ div:["e"] }	
	]},
	{ u:["activity_disposition_nb","dispositions_ctx","","dispositions"] },
]};

// ---

te["activity_disposition_r"] = { div:[], c:
[
	{ input:["g","","dvr","%0","radio"] },
	{ ac:["rg rc r ay bd_","","","xx t02 cb bt bb mtn1",""], c:
	[
		{ s:["c x y w15",":d:dmyhnr:1: "] },
		{ s:["c x y w15",":v:dispositions:created_by"] },
		{ s:["c x y","Case ID"] },
		{ s:["c x y w15",":v:dispositions:case_id"] },
		{ s:["c x y w15",":v:dispositions:disposition"] },
		{ div:["e"] }			
	]}
]};

te["activity_dispositions"] = { c:
[
	{ div:["x25 yy"], u:["activity_disposition_r","dispositions"] }	
]}
	
// -------------------------------------------------------------

te["activity_messages_txt"] = { textarea:["wp100 h11 xx y08 ba_b bd","","src_msg","","Reply ..."] };

te["activity_message_r"] = { div:["x y"], c:
[
	{ arg:["","","%0"] },
	{ div:[":v:messages:src_vector::vector:10"], c:
	[
		{ div:["r20"], c:[ { pre:[":v:messages:src_vector::vector:11","",":v:messages:src_msg"] }, { div:["e"] } ] },
		{ s:[":v:messages:src_vector::vector:12",":r::1:: : ago:: : ago:"] }, // x08 y tr s cd
		// { arg:[] }
	]},
	{ div:["e"] }
]};

te["activity_messages"] = { c:
[
	{ div:[] }, // inbound nb
	{ p:["x20 yy","msgs"], c:
	[
		{ div:["oy scroller"], c:
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
 				{ div:["d w08"], ac:["abs btn ao","","_activity_message_send"," t35 tc ba_b bd w08 h06 cb","Send"] },
 				{ div:["e"] }
			 ]},
			 { p:["mr10","sended"], activity_messages_txt:[] },
			
		]}
	]}
]};

te["activity_src_messages"] = { u:["activity_messages","messages_ctx"] };

te["activity_src"] = { usub:["noop,noop,activity_src_messages","r_",":v:activities:src","call,walkin,chat"] };

// -------------------------------------------------------------

te["activity_case_footer"] = { c:
[
	{ u:["activity_case_r_no_data","cases_no_data"] },
	{ div:["t gww"], c:
	[
		{ div:["d x20 y07 s"], pg:["pgto","activity_case_list-cases"," dh","da dl","activity_case_list-cases"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_case_r_no_data"] = { s:["x25 y08 cd","No Matching Cases"] };

te["activity_case_r"] = { div:[""], c:
[
	{ input:["g","","acvw","1","radio",""] },
	{ ac:["ay","case_vw_id-cases-@","_vw","x20 t cb",""], c:
	[
		{ div:[], c:
		[
			{ s:["c x t",":v:cases:id"] },
			// { s:["c x t",":v:cases:case_category_root_id::case_type:1"] },
			{ s:["c t cd micon","navigate_next"] },
			{ div:["c x t"], uval:["",":v:cases:case_category"] },
			{ s:["d xx t",":d:dmyhnr:1: "] },
			{ s:["d xx t",":v:cases:assigned_to"] },
			{ s:["d xx t",":v:cases:status::case_status:2"] },
			{ s:["d xx t",":v:cases:priority::case_priority:2"] },
			{ div:["e"] }
		]},
		{ div:["cd"], c:
		[
			{ div:["c x y s"], uval:["",":v:contacts:location"] },
			{ div:["e"], arg:["",".id","%0"] }
		]}
	]}
]};

te["activity_case_k"] = { div:["g"], case_k:[] };

te["activity_case_nb"] = { div:[] };

te["activity_case_title"] = { div:[], c:[ { arg:["","_c","%1"] } ] };

te["activity_case_list"] = { list:["activity_case_title","activity_case_nb","","activity_case_k","activity_case_r","cases","activity_case_footer"] };

te["activity_cases"] = {  c:
[	
	{ div:["x25 tt","vb"], c:
	[
		{ ac:["c x t02","","","x y n cb b","Follow Up A Case"] }, // todo: dropdown: [ Any Case, Reported Case, Updated Case ]
		
		{ div:["d xx mtn1"], c:
		[
			{ input:["g","","acvw","1","radio",""] },
			{ ac:["ay tabi","case_new-r_-@","_vw","x ba_b cb",""], c:
			[
				{ s:["c x y h3 b","+"] },
				{ s:["c x y","New Case"] },
				{ div:["e"] }
			]},
		]},
			
		{ div:["e"], c:[ { arg:["","","activity_case_list-cases"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] },
	]},
	{ div:["x25 y15","vf"], c:[ { li:["ba bd16","case_f-cases_f"], ev:["__vpf"], c:
	[
		{ case_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","acases_vs","0","radio","1"] }, { p:["tabv x","vt"], activity_case_list:[] } ] },
		{ div:[], c:[ { input:["g","","acases_vs","1","radio"] }, { p:["tabv x","vt"] } ] },				
	]}
]};

// -------------------------------------------------------------

te["activity_case_tab_ufn"] = { ufn:["activity_case_tab_ufn"] };

te["activity_contact_footer"] = { c:
[
	{ u:["activity_contact_r_no_data","contacts_no_data"] },
	{ div:["t gww"], c:
	[
		{ div:["d x20 y07 s"], pg:["pgto","activity_contact_list-contacts"," dh","da dl","activity_contact_list-contacts"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_contact_r_no_data"] = { s:["x25 y08 cd","No Matching Contacts"] };

te["activity_contact_r"] = { div:["x20"], c:
[
	{ div:["","ve"], c:
	[
		{ div:["c w03"], s:["abs t02",""], c:
		[
			{ input:["g","","activity_contact_id","%0","radio"] },
			{ ac:[" rg rc r w03 al","","_activity_reporter","x08 yy",""], c:[ { div:["w01_"], s:["opt",""] } ] },
		]},
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ ac:["al ml3","contact_vw_id-contacts","","l r20 t cb",""], c:
	[
		{ div:[], c:
		[
			{ div:["c l t"], uval:["",":v:contacts:fullname"] },
			{ s:["c t",","] },
			{ div:["c ll t s"], uval:["",":v:contacts:age_group"] },
			{ s:["c t",","] },
			{ div:["c ll t s"], uval:["",":v:contacts:sex"] },
			{ div:["e"] }
		]},
		{ div:["cd s"], c:
		[
			{ s:["c x y",":v:contacts:phone"] },
			{ div:["c x y"], uval:["",":v:contacts:location"] },
			{ s:["d xx y",":v:contacts:email"] },
			{ div:["e"], arg:["",".id","%0"] }
		]}
	]}
]};

te["activity_contact_k"] = { div:["g"], contact_k:[] };

te["activity_contact_nb"] = { div:[] };

te["activity_contact_title"] = { div:[], c:[ { arg:["","_c","%1"] } ] };

te["activity_contact_list"] = { list:["activity_contact_title","activity_contact_nb","","activity_contact_k","activity_contact_r","contacts","activity_contact_footer"] };

te["activity_contacts"] = {  c:
[
	{ div:["x25 tt","vb"], c:
	[
		{ ac:["c x t02","","","x y n cb b","Select Reporter"] },
		
		{ div:["d xx mtn1"], c:
		[
			{ input:["g","","acontacts_t","2","radio",""] },
			{ ac:["ay tabi","case_reporter_new-r_-^","_vp","x cb ba_b",""], c:
			[
				{ s:["c x y h3 b","+"] },
				{ s:["c x y","New Reporter"] },
				{ div:["e"], c:[ { arg:["phone-9","",":k:contacts_k:phone:2"] } ] }
			]},
			{ div:["g"], arg:["","","activity_reporter_new-reporters-vfvw-vbr-@"] }, // vp return anchor
		]},
			
		{ div:["e"], c:[ { arg:["","","activity_contact_list-contacts"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] },
	]},
	{ div:["x25 y15","vf"], c:[ { li:["ba bd16","contact_f-contacts_f"], ev:["__vpf"], c:
	[
		{ contact_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","acontacts_vs","0","radio","1"] }, { p:["tabv x","vt"], activity_contact_list:[] } ] },
		{ div:[], c:[ { input:["g","","acontacts_vs","1","radio"] }, { p:["tabv x","vt"] } ] },				
	]}
]};

// // -------------------------------------------------------------

te["activity_reporter_"] = { div:["x20 t15 b10"], c: 
[
	{ div:["c"], c:
	[
		{ ac:["ay","reporter_ed-reporters-^","_vp","xx y08 bd ga w40 cb",""], c:
		[
			{ div:[], c:
			[
				{ s:["c x y07 cd","Reporter Details"] },
				{ div:["e"] }
			]},
			{ div:[], c:
			[
				{ s:["c l ",":v:reporters:contact_fullname"] },
				{ s:["c ",","] },
				{ div:["c ll "], uval:["",":v:reporters:contact_sex"] },
				{ s:["c",","] },
				{ div:["c ll  "], uval:["",":v:reporters:contact_age"] },
				{ s:["c x  s","Years"] },
				{ div:["e"], arg:["",".id","%0"] }
			]},
			{ div:[], c:
			[
				{ div:["c x t"], uval:["",":v:reporters:contact_location"] },
				{ s:["c t",","] },
				{ s:["c ll t",":v:reporters:contact_phone"] },
				{ s:["c t",","] },
				{ s:["c ll t",":v:reporters:contact_email"] },
			]},
			{ p:["e","o"], c:[ { arg:["","reporter_id","%0"] }, { arg:["","reporter_contact_id",":v:reporters:contact_id"] } ] }
		]},
		{ div:["g"], arg:["","","activity_reporter-reporters-vb--@"] }, // vp return anchor
	]},	
	{ p:["e","nb"], u:[null] }
]};	

te["activity_reporter_new_ufn"] = { ufn:["activity_case_tab_ufn"] };

te["activity_reporter_new"] = { activity_reporter_:["activity_reporter_new_ufn"] };

te["activity_reporter"] = { activity_reporter_:["noop"] };

te["activity_match_reporter"] = { u:["activity_reporter","reporters"] };

te["activity_match_nb"] = { div:["x20 t15 b10"], c:
[
	{ div:["x y gp cr w40"], c: 
	[
		{ s:["c w02 h02 x y bd32 gw h2 cr b tc","!"] },
		{ s:["c xx t07","Reporter Not Identified"] },
		{ div:["e"] }
	]}
]};

te["activity_match"] = { c:
[
	{ u:["activity_match_nb","contacts_ctx"] },
	{ u:["activity_match_reporter","reporters_ctx","","reporters"] },
]};

te["activity_btns"] = { c:
[
	{ div:["d x"], c:
	[
		{ input:["g","","sbr","1","radio"] },
		{ ac:["x","","_activity_close","x cb",""], c:
		[
			{ s:["d x y h2","&Cross;"] },
			{ s:["d x y s","Close"] },
			{ div:["e"] }
		]},
	]},	
	{ div:["e"] }
]};

te["activity_vw_id_"] = { c: 
[
	{ div:["l15 tt","vb"], c: 
	[
		{ div:["c t l"], c:
		[ 
			{ input:["g","","activity_vw_t","0","radio",null] },
			{ ac:["ay tabu","","_tab","x y n cb",""], c:
			[
				{ s:["c",":v:activities:src::case_src:1"] }, { s:["c x",":"] }, { s:["c",":v:activities:src_address"] }, { div:["e"] } 
			]}
		]},
		
		{ div:["c t l"], s:["x h micon","navigate_next"] },

		{ div:["c t"], c:
		[ 
			{ input:["g","","activity_vw_t","1","radio",null] },
			{ ac:["ay tabu","","_tab","x y n cb","Select Reporter"] }
		]},

		{ div:["c l t"], s:["x h micon","navigate_next"] },

		{ div:["c t"], c:
		[ 
			{ input:["g","","activity_vw_t","2","radio",null] },
			{ ac:["ay tabu","","_tab","x y n cb","Case Details"] }
		]},

		{ div:["c l t"], s:["x h micon","navigate_next"] },

		{ div:["c t"], c:
		[ 
			{ input:["g","","activity_vw_t","4","radio",null] },
			{ ac:["ay tabu","","_tab","x y n cb","Dispositions"] }
		]},
		
		{ div:["d w50 t01"], c: [ { p:["abs w50","src_btns"], c:
		[
			{ div:["",":v:activities:src_uid"], u:[null] }, 	// chan button
			{ p:["x25 tt","vdisposition"] }, // show disposition tags here
		]} ]}, 

		{ p:["e","o"], c:[ { arg:["","src",":v:activities:src"] }, { arg:["","src_ts",":v:activities:src_ts"] }, { arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_callid",":v:activities:src_callid"] }, { arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, { arg:["","src_vector",":v:activities:src_vector"] }, { arg:["","src_uid2",":v:activities:src_uid2"] } ] },
	]},
	{ p:["","vbr"], c:
	[
		// reporter here
	]},
	{ div:[""], c: // 
	[
		{ div:[], c:
		[	
			{ input:["g","","activity_vw_vt","0","radio",null] }, // src details
			{ p:["tabv","vwsrc"], s:["x25 y20 cd s","Source details here"] }
		]},
		{ div:[], c:
		[	
			{ input:["g","","activity_vw_vt","1","radio",null] }, //  reporter select
			{ p:["tabv ","vftab_reporter"] }
		]},
		{ div:[], c: // 
		[	
			{ input:["g","","activity_vw_vt","2","radio",null] }, // case details
			{ form:["tabv"], c:
			[
				{ div:[], c:[ { input:["g","","activity_vw_vt_","2","radio","1"] }, { p:["tabv","vftab_case"] } ] },
				{ div:[], c:[ { input:["g","","activity_vw_vt_","2","radio"] }, { div:["tabv","vw"] } ] }
			]}
		]},
		{ div:[] },
		{ div:[], c:
		[
			{ input:["g","","activity_vw_vt","4","radio",null] }, //  disposition form?
			{ p:["tabv","vdispo"] }
		]}
	]}
]};

te["activity_toolbar"] = { div:["ma w18 g","chan_id_here"], c: // 
[
	{ input:["g","","sbl__","1","radio","1"] },
	{ ac:["abs mtn45 ao t08 w13 bd","","","w13 bd tc cw",""], c:[ { div:["::case_src:9:3"], c:
	[
		{ s:["x y tc","::case_src:9:4"] },
	]} ]}
]};

// // -------------------------------------------------------------

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
	{ input:["g","","sbr","1","radio"] },
	{ li:["sbr cb bb",""], ev:["_activity_vw"], s:["x15 s y",""], c: 
	[
		//{ s:["c t h3 micon","call"] },
		{ div:[""], c:
		[
			{ div:[], c:
			[
				{ s:["c t",":v:activities:src_vector::vector:4"] },  
				{ s:["c t x",":v:activities:src::case_src:1"] },
				{ s:["d t",":r::10:: : ago:: : ago:"] },
				{ div:["e"] }
			]},
			{ div:[], c:
			[
				{ s:["c t",":v:activities:src_address"] },	
				{ s:["d t",":h:ms:18:"] },
				{ s:["d x t",":v:activities:src_status::activity_status:1"] }, 
				{ div:["e"] }
			]},
			{ p:["",":v:activities:src_uid"], c:
			[ 
				{ uchk:["activity_lst_disposition_r",":v:activities:dispositions"] }, 
				{ div:["e"] } 
			]}
		]},
		
		{ div:["e"], c:[ { arg:["",".id","%0"] }, { arg:["","src",":v:activities:src"] }, { arg:["","src_ts",":v:activities:src_ts"] }, { arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_callid",":v:activities:src_callid"] }, { arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, { arg:["","src_vector",":v:activities:src_vector"] }, { arg:["","src_uid2",":v:activities:src_uid2"] } ]}
	]}
]};

te["activity_lst_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["activity_lst"] = { list:["end","end","","activity_lst_k","activity_lst_r","activities","activity_lst_footer"] };

// -------------------------------------------------------------

function activity_close ()
{
	var coll = document.getElementById ("vv").childNodes;	
	
	var src = "";
	if (coll[1].firstChild && coll[1].firstChild.firstChild && coll[1].firstChild.firstChild.id=="call_toolbar")
	{
		console.log (" ----> "+coll[0].lastChild.className)
		var a = {"action":"3"}
		url (coll[1].firstChild, "agent", "agent", "", null, 2, a, "POST");
	}
		
	coll[1].innerHTML = ""; // toolbar
	coll[6].childNodes[1].childNodes[1].innerHTML = "";  // vw
	coll[6].childNodes[2].firstChild.checked = true; // show dash
	nd (coll[1], te["toolbar_default"], [], [], [0]); // show toolbar
			
	var p = document.getElementById ("vp"); // close vp (if open)
	p.style.display = "none";
	p.innerHTML = "";
}

// ---

function activity_end_ufn (el, u, a, r, m)
{
	var coll = __(el,"vfvw").childNodes; 
	coll[2].childNodes[4].childNodes[1].innerHTML = "";
	nd (coll[2].childNodes[4].childNodes[1], te["activity_dispositions"], [], r, [0]); // load disposition list

	coll[0].childNodes[7].firstChild.childNodes[1].innerHTML = "";
	nd (coll[0].childNodes[7].firstChild.childNodes[1], te["activity_dispositions_match"], [], r, [0]); // load disposition tags

	// todo: update sbr disposition tags
		
	if (ra["cases"]!=undefined) // load case_vw_id
	{
		var p_ = coll[2].childNodes[2].childNodes[1].childNodes[1].childNodes[1]
		p_.innerHTML = "";	
		nd (p_, te["case_vw_id"], [], ra["cases"][0], [0]);
		return;	
	}
	
	var callid = _(coll[0],"src_btns").firstChild.firstChild;
	if (callid!=null && callid.value.length>0) 
	{
		phone_hangup (callid.value);
		activity_close ();
		return;
	}
	
	coll[0].childNodes[6].firstChild.checked = true; // switch to dispo tab (if no case was created|updated)
	coll[2].childNodes[4].firstChild.checked = true; 
}

function activity_case_tab_ufn (el, u, a, r, m)
{
	var src = vel (r, ["","v","reporters","src"]);
	if (src=="call" || src=="walkin") // only switch for call/walkin src
	{
		var p = __(el,"vbr");
		p.previousSibling.childNodes[4].firstChild.checked = true;
		p.nextSibling.childNodes[2].firstChild.checked=true; 
	}
}

// ---

function _activity_close (ev)
{
	this.previousSibling.checked = true;
	activity_close ();
	boo (ev)
}

function _postj_disposition (ev) // if open case -> then save; else update all cases(_actions) under activity with disposition
{
	var u_ = ["activity_disposition","actions"];
	var p_ = __(elvp,"vfvw");
	var p = __(this,"ve");
	var o = {".id":""};
	var pf = p_.lastChild.childNodes[2].childNodes[1].childNodes[1].childNodes[1]; // case_vw - vftab  // last.2.1.1.1
	var cf = _(pf,"_case_form_"); // check if case_form is open // available only if no dispo exist
	if (cf!=null) 
	{
		jso (pf.firstChild,o);
		u_[1]="cases";
	}
	o["disposition_id"]="";
	jso (p, o); // disposition
	jso (p_.childNodes[1], o); // reporter
	jso (p_.childNodes[0], o); // channel
	url (p, u_[0], u_[1], o[".id"], null, 2, o, "POST");
	boo (ev)
}

function _postj_activity (ev) // activity_vp
{
	var u = this.id.split ("-");
	var p = __(this,"ve");
	var p_ = __(elvp,"vfvw");
	var o = {};
	jso (p_.childNodes[1], o);  	// reporter details
	jso (p,o); 			// vp details
	jso (p_.childNodes[0], o);  	// channel details
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
	boo (ev)
}

function _activity_reporter ()
{
	var p_ = __(this,"vfvw");
	var o = { "contact_id":this.previousSibling.value };
	jso (p_.childNodes[1], o);  // reporter details
	jso (p_.childNodes[0], o);  // channel details
	this.previousSibling.checked=true;
	// console.log ("activity_reporter |"+ JSON.stringify (o))
	url (p_.childNodes[1], "activity_reporter", "reporters", o["reporter_id"], null, 2, o, "POST");
}

function _activity_show ()
{

}

function _activity_vw (ev)
{
	var coll = document.getElementById ("vv").childNodes;
	var a = {};
	var r_ = re["r_"][0].slice(0);
	var k = re["activities_k"]
	argv (this, a);
	if (a.src=="walkin" && a.src_uid==undefined) 
	{ 
		var user_cid = document.getElementById ("user_cid").value;
		a.src_ts = Date.now()/1000;
		a.src_uid="walkin-"+user_cid+"-"+Date.now ();
		a.src_callid = a.src_uid;
		a.src_address = "";
		a.src_usr = "-";
		a.src_vector = 2;
	}
	r_[k["src"][0]] = a.src;
	r_[k["src_ts"][0]] = a.src_ts;
	r_[k["src_uid"][0]] = a.src_uid;
	r_[k["src_callid"][0]] = a.src_callid;
	r_[k["src_address"][0]] = _phone_fmt (a.src_address);
	r_[k["src_usr"][0]] = a.src_usr;
	r_[k["src_vector"][0]] = a.src_vector;
	
	console.log (" -activity_vw: "+JSON.stringify (r_));
	
	this.previousSibling.checked = true; // hilite call-notif
	coll[1].innerHTML = ""; 			
	coll[6].childNodes[1].firstChild.checked = true;
	coll[6].childNodes[1].childNodes[1].innerHTML = "";

	nd (coll[1], te["activity_toolbar"], [], r_, [0]); // show toolbar	
	nd (coll[6].childNodes[1].childNodes[1], te["activity_vw_id_"], ["1","","","","activity_btns","1","","",""], r_, [9]); // default src tab 	
	url (coll[6].childNodes[1].childNodes[1] .childNodes[1], "activity_match", "activities", (a[".id"]+"?src="+a.src+"&src_uid="+a.src_uid+"&src_address="+r_[k["src_address"][0]]));

	boo (ev)
}

