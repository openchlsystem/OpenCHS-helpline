
te["au_r"] = { li:[], c:
[
	{ s:["c w15 x y",":v:au:k"] },
	{ s:["c w24 x y",":v:au:v_"] },
	{ s:["c w24 x y",":v:au:v"] },
	{ div:["e"] }
]};

// ----------------------------------------------

te["case_history_vw_id"] = { div:["w70 ma sh__ y gw_","vddvw"], ev:["_undd"], c:
[
	{ div:["x20 yy"], c:
	[
		{ s:["c x tt h3 b","Changes"] },
		{ ac:["d ab","","_uvp","x cb",""], c:[ { s:["c h2 t03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		// { div:["d xx ay","va"], ac:["r05","client_ed-clients-vp","_u","xx y gww cb bd","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ div:["x20 yy"], c:
	[
		{ div:["b"], c:
		[
			{ s:["c w15 x y","Field"] },
			{ s:["c w24 x y","Previous Value"] },
			{ s:["c w24 x y","New Value"] },
			{ div:["e"] }
		]},
		{ u:["au_r","au"] }
	]}
]}

// ----------------------------------------------

te["case_history_footer"] = { div:["bt_ y"], c:
[
	{ div:["d t03"], c:[ { ac:["nav","case_history-case_activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","case_history-case_activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d x y cd s","%4"] },
	{ s:["d y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};

te["case_history_r"] = { div:["bt_"], c:
[
	{ input:["g","","casehvwr","1","radio",""] },
	{ li:["ay lr","case_history_vw_id-case_activities"], ev:["_vpopt"], c:
	[
		{ s:["c w14 x y",":d:dmyhnr:1: "] },
		{ s:["c w08 x y","%2"] },
		{ s:["c w13 x y",":v:case_activities:activity::case_activity:1"] },
		{ s:["c x t w50",":v:case_activities:detail"] },
		{ s:["c x t w08",":v:case_activities:priority::case_priority:2"] },
		{ s:["c x t w08",":v:case_activities:status::case_status:1"] },
		{ s:["c l t cd",":u::12:0::Escalated to"] },
		{ s:["c l t ",":v:case_activities:escalated_to_role::user_role:1"] },
		{ s:["c l t ",":v:case_activities:escalated_to"] },
		{ s:["d x t cd s","Changes"] },
		{ s:["d x t cd w04 tr s",":v:case_activities:change_count"] },
		{ s:["d x y",":v:case_activities:src"] },
		{ div:["e"], c:[ { arg:["",".id","%0"] } ] }
	]}
]};


te["case_history_k"] = { div:["g"], c:
[
	{ k_a:["g","case_rr-cases","cd st","Case ID","da db","case_id",":k:case_activities_k:case_id:2"] },
]};

te["case_history_title"] = { div:["y"], c:
[
	{ div:["c","va"], ac:["","case_history-case_activities-vs","_u","x y b cb n","Case History"], c:[ { arg:["","case_id",":k:case_activities_k:case_id:2"] } ] },
	{ div:["e"] }
]};

te["case_history"] = { list:["case_history_title","end","","case_history_k","case_history_r","case_activities","case_history_footer"] };

function _vpopt (ev)
{
	this.previousSibling.checked = true;
	var p = document.getElementById ("vp");
	var u = this.id.split ("-");
	elvp = null;
	if (u.length>2) elvp = this.nextSibling;
	vp (p);
	urargs (this, p);
	boo(ev);
}

