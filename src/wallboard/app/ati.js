var chan_t = {};

var ati_unread = 0;

te["ati_available"] = { div:[], s:["xx y cg gh","Text Channels Online"] };

te["ati_session"] = { p:["","%2"], s:["",""], c: 
[ 
	{ input:["g","","sbl","%2","radio"] },
	{ li:["sbr xx y bb_","va"], ev:["_ati_popup"], c: 
	[ 
		{ div:[], c: 
		[
			{ s:["c x y","%6"] },
			{ s:["c y","/"] },
			{ s:["c x y","%4"] }, 	// src_address
			{ s:["d x y s",""] },	// status-ts-txt
			{ arg:["ts","",""] }, 	// status-ts
			{ div:["e"] }
		]},			
		{ div:[], c:
		[
			{ s:["c x y w21 h01_ cd s",""] },			// last msg
			{ div:["d t02"], s:["x07 y02 bd16 gr cw s","0"] },	// unread count
			{ div:["e"], c:[ { arg:["","src","%6"] }, { arg:["","src_uid","%20"] }, { arg:["","src_ts","%1"] }, { arg:["","src_address","%4"] }, { arg:["","src_vector","1"] } ] }
			// { div:["e"], c:[ { arg:["","src",":v:activities:src"] }, { arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_vector",":v:activities:src_vector"] } ]}
		]},
	]},
	{ p:["g"], uaudio:["/helpline/images/new_msg.ogg","",""] },
	{ div:[] }
]};

te["ati_btns"] = { c:
[
	{ div:["d x"], c:
	[
		{ input:["g","","sbr","1","radio"] },
		{ ac:["x","","_activity_close","x cb",""], c:
		[
			{ s:["d x t h2","&Cross;"] },
			{ s:["d x y","Close"] },
			{ div:["e"] }
		]},
	]},	
	// { s:["d b x20 yy","0:00"] },
	{ div:["e"] }
]};

te["ati_toolbar"] = { div:["ma w18",":v:activities:src_uid"], c: //  
[
	{ input:["g","ati_toolbar","barr","1","radio","1"] },
	{ li:["abs mtn37 ao w13 bd"], ev:["_activity_show"], s:["w13 bd cw",""], c:[ { div:["gr"], c:
	[
		{ s:["c w07 x y tr","Chat Open"] },
		{ s:["c w05 y ",""] },
		{ arg:["ts","",""] }, 
		{ div:["e"] }
	]} ]},
]};

te["activity_message_send_ufn"] = { ufn:["activity_message_send_ufn"] };

te["activity_messages_ufn"] = { ufn:["activity_messages_ufn"] };

function activity_messages_height (el, u, a, r, m)
{
	el.style.height = window.innerHeight-400;
	var h = el.scrollHeight;
	console.log (" [scroll height ] "+h);
	el.scroll ({ top: h, left: 0, behavior: 'smooth' }); 
}

function activity_messages_ufn (el, u, a, r, m)
{
	var p = el.nextSibling.firstChild;
	var id = p.lastChild.firstChild.value;
	var rr = ra["messages"];
	var n = rr.length;
	for (var i=n-1; i>-1; i--)
	{
		var r = rr[i];
		if (r[0]<=id) continue;
		console.log ( " msg :"+r[0]+" |"+id)
		nd (p, te["activity_message_r"], [], r, [0]);
	}
	activity_messages_height (p, u, a, r, m);
}

function activity_message_send_ufn (el, u, a, r, m)
{
	var p = __(el,"ve");
	var k = ra["messages_k"]
	nd (el, te["activity_messages_txt"], [], [], [0]);
	url (p.parentNode.firstChild, "activity_messages", "messages", ("?src="+r[k["src"][0]]+"&src_uid="+r[k["src_uid"][0]]+"&"));
}

function _activity_message_send ()
{
	var p = __(this,"ve");
	var p_ = __(this,"vftab");
	var o = {};
	jso (p_.childNodes[1], o);  	// reporter details
	jso (p_.childNodes[0], o);  	// channel details
	jso (p,o); 			// vp details
	console.log ("[send] "+JSON.stringify (o))
	url (p, "activity_message_send", "messages", o[".id"], null, 2, o, "POST");
	// boo (ev)
}

function ati_ld_unread (ch)
{
	var coll = document.getElementById ("vv").childNodes;
	if (!coll[1].firstChild) return;
	if (coll[1].firstChild.id!=ch[20]) return;	
	var p = _(coll[6].childNodes[1].childNodes[1], "vwsrc");
	url (p.firstChild, "activity_messages", "messages", ("?src="+ch[6]+"&src_uid="+ch[20]+"&"));
}

function ati_popup (el, f=0)
{
	var coll = document.getElementById ("vv").childNodes;
	var r_ = re["r_"][0].slice(0);
	var a = {};
	var k = re["activities_k"];
	
	if (f==0 && coll[1].childNodes.length>0 && coll[1].firstChild.id.length>0) // vw is occupied
	{
		// show_notifications (2);
		return
	}
	
	ra = {};
	for (var k_ in re) ra[k_]=re[k_];
	argv (el, a);
	r_[k["src"][0]] = a.src;
	r_[k["src_ts"][0]] = a.src_ts;
	r_[k["src_uid"][0]] = a.src_uid;
	r_[k["src_address"][0]] = _phone_fmt (a.src_address);
	r_[k["src_vector"][0]] = a.src_vector;
	
	el.firstChild.firstChild.checked = true; 	// hilite call-notif
	coll[1].innerHTML = ""; 			
	coll[6].childNodes[1].firstChild.checked = true;
	coll[6].childNodes[1].childNodes[1].innerHTML = "";

	nd (coll[1], te["ati_toolbar"], [], r_, [0]); // show toolbar	
	nd (coll[6].childNodes[1].childNodes[1], te["activity_vw_id_"], ["","","","1","ati_btns","","","","1"], r_, [9]); 	
	url (coll[6].childNodes[1].childNodes[1] .childNodes[1], "activity_match", "activities", ("-1?src="+a.src+"&src_uid="+a.src_uid+"&src_address="+r_[k["src_address"][0]]));
}

function _ati_popup ()
{
	ati_popup (this.parentNode.parentNode, 1)
}

function ati_status (ch)  // down, dial(earliest unread ts), ring(latest unread ts), up(last assigned), que (latest assigned), connect
{
	var st = 10;
	for (var i=10; i<19; i++) 
	{
		if (ch[i].length<1) continue; 
		st = i;
		if (i==AMI.CHAN_STATE_HANGUP) break; // chan hangup
	}
	return st;
}

function atis_pop (ts)
{
	var k = Object.keys (chan_t);
	// console.log (" vp pops "+JSON.stringify (k))
	for (var i=0; i<k.length; i++)  // remove closed, hangup channels
	{
		var id = k[i];
		if (chan_t[id].ts==ts) continue;
		console.log  ("--> ati_pop : "+id+" "+chan_t[id].ts+","+ts+" | "+chan_t[id].el)
		if (chan_t[id].el && chan_t[id].el.parentNode) 
		{
			var pe = chan_t[id].el.parentNode;
			var el = chan_t[id].el;
			pe.removeChild (chan_t[id].el); 
		}
		delete chan_t[id];
	}
}

function atis (o,k,ts)
{
	var pu = document.getElementById ("call_sessions");
	var user_cid = document.getElementById ("user_cid").value;
	var c = [0,0,0,0,0,0,0];
	var unread_tot = 0;
	var ch_agent = null

	for (var i=k.length-1; i>-1; i--)
	{
		var ch = o[k[i]];
		
		if (ch[AMI.CHAN_STATE_HANGUP].length>0) continue; // skip hangup'ed channels
		
		if (ch[0].length>0) 		 // agent session chan
		{
			c[0]++; 
			if (user_cid.length>0 && user_cid==ch[0]) ch_agent = ch;
			//chani ("chan_agent", pa, ch, ts); 
			continue;
		}
		
		if (ch[26]==user_cid)
		{
			console.log ("--> ati: "+ch[2]+" | "+ch[26])
			var el = _(pu, ch[2]); // find matching activity
			var el_ = el;	
			if (el==null)
			{
				el = nd (pu, te["ati_session"], [], ch, [0]);
				el = el.parentNode.parentNode;
				chan_t[ch[2]] = { "el":el, "ts":ts };
				console.log (" -> ati new: "+ch[2]+" "+ch[4]+","+ch[6]+" |"+el) 
				ati_popup (el);
			}
			chan_t[ch[2]].ts=ts;
			var st = ati_status (ch);
			var coll = el.firstChild.childNodes[1].childNodes;
			var unnotified = (ch[22]*1) - (coll[1].childNodes[1].firstChild.innerHTML*1) 
			unread_tot += (ch[22]*1)
			console.log (" -->> ati status: "+st+" unread="+ch[22] +" | "+unnotified)
			coll[0].childNodes[3].innerHTML = hmst (ch[st], ["","","hms","","","",""]);;
			coll[0].childNodes[4].value = ch[st];
			coll[1].childNodes[0].innerHTML = ch[27];
			coll[1].childNodes[1].firstChild.innerHTML = ch[22];
			coll[1].childNodes[1].style.display = (ch[22]*1)>0?"block":"none";
			if (unnotified!=0) 
			{
				el.firstChild.childNodes[2].firstChild.play ();
				if (el_ !=null) ati_ld_unread (ch);	
			}
		}	
	}

	var p_ = document.getElementById ("ati_status");
	var id_ = "noop";
	var r_ = [];
	if (ch_agent!=null) { id_ = "ati_available"; r_=ch_agent; }
	p_.innerHTML = "";
	nd (p_, te[id_], [], r_, [0]);

	ati_unread = unread_tot;
	notifs ();
}

function ldati (o)
{
        var ts = (Date.now ()/1000);
        var k = Object.keys (o);
        re["channels"] = o;
        atis (o, k, ts);        
        atis_pop (ts);
}

// curl -k 'https://127.0.0.1/helpline/api/msg/' -H "Content-Type: application/json" -H "Authorization: bearer r3t5m48h6as9topc1tts6lv6c5" -d '{"channel":"chat", "from":"256700112234", "message":"Hello world", "timestamp":"1665377775", "session_id":"1665377775", "message_id":"1665377775"}' -v

