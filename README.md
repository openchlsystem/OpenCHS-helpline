
# OpenCHS  
Our system is used by the helplines in East Afrcia to callect store and analyze data for Violence Against children and Gender based Violence.

## Acknowledgements

 - [UNICEF](https://www.unicef.org/)
 - [UNFPA]((https://www.unfpa.org/))
 - [ChildLine Kenya](https://childlinekenya.co.ke)
 - [Sauti Uganda ](https://sauti.mglsd.go.ug/sauti/)
 - [Sema Tanzania](https://www.sematanzania.org/child-helpline)
 - 



## Demo

[Link to our Demo Product](https://165.227.145.55/helpline/)

User Demo
Password Pass

Additionally just open the following links. This will fire up the asterisks
https://165.227.145.55:8089/ws
https://165.227.145.55:8384/vami/


## API Reference



CRM REST API

CRM REST API	1
INTRODUCTION	3
1. Authentication	4
1.1 Login	4

1.2 User Change Own Password	5

1.3 Admin Reset Password	6

2. Users	7

2.1 Create User	7

2.2 Edit User	8

2.3 View User	8

2.4 List Users	8

2.5 CSV Download	9

2.6 Pivot Reports	10

3. Tickets	11

3.1 Create Ticket	11

3.2 Update Ticket	12

3.3 View Ticket	13

3.4 List Tickets	13

3.5 CSV Download	14

3.6 Pivot Reports	14

4. QA (Quality Assurance)	16

4.1 Creates QA Record	16

4.2 View QA	17

4.3 List QA	17

4.4 CSV Download	18

4.5 Pivot Reports	19

5. Queue Status	20

5.1 Join Queue	20

5.2 Leave Queue	21

5.3 Poll Queue Status	22

6. Calls	23

6.1 View Call	23

6.2 Download Call Recording	23

6.3 List Users	23

6.4 CSV Download	24

6.5 Pivot Reports	25

7. Emails	26

7.1 Creates Email  (for Sending)	26

7.2 View Email	27

7.3 View Email Body (mime: text/plain)	27

7.4 View Email Body (mime: text/html)	28

7.5 View Email Attachment	28

7.6 List Emails	28

7.7 CSV Download	29

7.8 Pivot Reports	30

8. SMS	31

8.1 Creates SMS  (for Sending)	31

8.2 View SMS	32

8.3 List SMSes	32

8.4 CSV Download	33

8.5 Pivot Reports	34

9. Files	35

9.1 Upload File	35

9.2 Download File	36

10. Stats API	36

 

INTRODUCTION
The REST API comprises of the following endpoints 

1.	Authentication
2.	Users
3.	Tickets
4.	QA
5.	Queue Status
6.	Calls
7.	Emails
8.	SMS
9.	Files
10.	Stats

 
1. Authentication
Authentication endpoint provides the following functions:
1.	Login
2.	User Change Own Password
3.	Admin Reset User Password


1.1 Login
Allows a user to login using a username and password

REQUEST
URL	POST /eproc/
AUTH HEADER	XAuthorization: Basic Base64(username:password)


RESPONSE  (Success)
Return the session id (ss object) on successful login. The session-id will be used for subsequent API calls
HTTP CODE	201
FORMAT	application/json
PAYLOAD	{
 "ss":[["nn6usn383g8mv5ta59er2vufc9","28", "admin", "99","1"]],
 “Profile”:[ … ] 
}



RESPONSE (Fail)
HTTP CODE	401
FORMAT	application/json
PAYLOAD	{"errors":[["error","Authentication Required"]], "loggedoff":[["Auth"]] }


1.2 User Change Own Password
Allow a logged in user to change their password.

REQUEST
URL	POST /eproc/changeAuth
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ “pass0”:”1234567”, “pass1”:”1234@Gr”, “pass1”:”1234@Gr” }
PARAMETERS	pass0:  current password
pass1: new password
pass2: confirm password


RESPONSE  (Success)
Return the session id (ss object) on successful login. The session-id will be used for subsequent API calls
HTTP CODE	202
FORMAT	application/json
PAYLOAD	{
 "profile_nb":[["info","Password Changed"]]
 “Profile”:[ … ] 
}


RESPONSE  (Fail)
HTTP CODE	412
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}


 
1.3 Admin Reset Password

The account is reset to default password of “callcenter”

REQUEST
URL	POST /eproc/changeAuthAdmin
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	none
PARAMETERS	none


RESPONSE  (Success)
Return the session id (ss object) on successful login. The session-id will be used for subsequent API calls
HTTP CODE	202
FORMAT	application/json
PAYLOAD	{
 "users_nb":[["info","Password Reset"]]
 “Profile”:[ … ] 
}


RESPONSE  (Fail)
HTTP CODE	412
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}


 
2. Users
Users endpoint provides the following functions:
1.	Create User
2.	Edit User
3.	View User
4.	List User
5.	CSV Download 
6.	Pivot reports 

2.1 Create User
Allows an Admin to add a user to the CRM System

REQUEST
URL	POST /eproc/users
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ “usn”:”test”, “exten”:”8123”, “photo”:”123244554556”, “fname”:”Albert”, “lname”:”Jeffry”, “phone”:”0112009877”, “email”:”albertjefry@email.com” }
PARAMETERS	usn:  unique username
exten: phone extension
photo: file_id of already uploaded photo
fname: First name
lname:  Last name
phone:   Phone number
email:   email address


RESPONSE  (Success)

HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"users_nb":[["info","User Created"]]
“users”:[  { object } ] // echos back the created user object  
}


RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}

2.2 Edit User
Allows an Admin to edit a user record

REQUEST
URL	POST /eproc/users/id
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	Same as Create USer
PARAMETERS	Same as Create USer

2.3 View User
Retrieves a single user record

REQUEST
URL	GET /eproc/users/id
AUTH HEADER	XAuthorization: Bearer session-id



2.4 List Users
Retrieves a list of  users

REQUEST
URL	GET /eproc/users/
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the users object. EG

?phone=12121212&email=abc@email.com
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by id Descending


2.5 CSV Download
Download the list of  users in CSV Format

REQUEST
URL	GET /eproc/users/?csv=1
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the users object. EG

?phone=12121212&email=abc@email.com
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by id Descending  (most recent first)

2.6 Pivot Reports
Generates a Summary Report based on group fields (if no group fields are specified then returns a Total Count)

REQUEST
URL	GET /eproc/users/rpt
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the users object. EG

?phone=12121212&email=abc@email.com
GROUP FIELDS	role
enabled
GROUP FORMAT	To specify group field append a comma separated list to xaxis (or yaxis) Eg:

xaxis=role&yaxis=enabled


 
3. Tickets
Tickets endpoint provides the following functions:
1.	Create Ticket
2.	Update Ticket
3.	View Ticket
4.	List Tickets
5.	CSV Download
6.	Pivot Reports

3.1 Create Ticket
On create ticket, a contact is also created

REQUEST
URL	POST /eproc/tickets
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ “source”:”call”, “source_id”:”23231232”, “category_main”:”2”, “category_sub”:”14”, “narrative”:”describe case details”, “resolution”:”describe solution given”, “status”:”closed”, “priority”:”medium”, “referred_to”:””, “escalated_to”:””, “disposition”:”call completed”,

 “contacts”:{  “fname”:”AAAA”, “lname”:”BBBB”, “phone”:”0110123456”, “email”:”aaaa@email.com”, “town”:”Nairobi”, “country”:”Kenya”, “user_category”:”1”,  “position_in_org”:”CTO”,  “org_name”:”AAB ”  }

}
PARAMETERS	Ticket fields
source:  walkin | call | email | sms
source_id: id of (call|email|sms)   -- for walkin source_id is not required
category_main: main category
category_sub:    sub category
narrative:  description of case
resolution:  description of solution given
status:   open | closed | escalated
priority:   high | medium | low
referred_to: 
escalated_to:  
disposition: blank-call | call-disconnected | prank | call-completed | transfer

Contact Fields
fname: 
lname: 
phone: 
email: 
town: 
country: 
user_category: 
position_in_org: 
org_name: 
 


RESPONSE  (Success)

HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"tickets_nb":[["info","Ticket Created"]]
“tickets”:[  { object } ] // echos back the created ticket object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}


3.2 Update Ticket
Allows an Admin to edit a user record

REQUEST
URL	POST /eproc/tickets/id
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	Same as Create Ticket
PARAMETERS	Same as Create Ticket



3.3 View Ticket
Retrieves a single user record

REQUEST
URL	GET /eproc/tickets/id
AUTH HEADER	XAuthorization: Bearer session-id



3.4 List Tickets
Retrieves a list of  Tickets

REQUEST
URL	GET /eproc/tickets/
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the tickets object. EG

?category_main=1&status=open
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by ticket.id Descending  (most recent first)


3.5 CSV Download
Download the list of  Tickets in CSV Format

REQUEST
URL	GET /eproc/tickets/?csv=1
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the tickets object. EG

?category_main=1&status=open
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by ticket.id Descending

3.6 Pivot Reports
Generates a Summary Report based on group fields (if no group fields are specified then returns a Total Count)

REQUEST
URL	GET /eproc/tickets/rpt
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the tickets object. EG

?category_main=1&status=open
GROUP FIELDS	source
category_main
category_sub
status
priority
referred_to
escalated_to
disposition

contact_town
contact_country
contact_user_category
contact_position_in_org
contact_org_name

GROUP FORMAT	To specify group field append a comma separated list to xaxis (or yaxis) Eg:

xaxis=status&yaxis=disposition

 
4. QA (Quality Assurance)
QA endpoint provides the following functions:
1.	Create QA
2.	View QA
3.	List QA
4.	CSV Download
5.	Pivot Reports

4.1 Creates QA Record
Creates a QA record attached to a call record. 
On successful creation of a QA record, the call record is flagged as “qa_done”

REQUEST
URL	POST /eproc/qa
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ 
“source”:”call”, “source_id”:”23231232”,  “opening”:”1”, “holding”:”1”, “politeness”:”1”, “enthusiasm”:”1”, “personalization”:”1”, “troubleshooting”:”1”, “listening”:”1”, “accuracy”:”1”, “resolution”:”1”, “comments”:”1”, “recomendations”:”1”
}
PARAMETERS	QA fields
source:       call
source_id:    id of call
opening:  a number between 1 and 5
holding::  a number between 1 and 5
politeness:  a number between 1 and 5  
enthusiasm:  a number between 1 and 5 
personalization:  a number between 1 and 5
troubleshooting:  a number between 1 and 5
listening:  a number between 1 and 5
accuracy:  a number between 1 and 5
resolution:  a number between 1 and 5
comments:   text description
recomendations:   text description


 


RESPONSE  (Success)

HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"qa_nb":[["info","QA Created"]]
“qa”:[  { object } ] // echos back the created qa object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}


4.2 View QA
Retrieves a single QA record

REQUEST
URL	GET /eproc/qa/id
AUTH HEADER	XAuthorization: Bearer session-id



4.3 List QA
Retrieves a list of  QAs

REQUEST
URL	GET /eproc/qa/
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the qa object. 
EG

?accuracy=1
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by qa.id Descending (most recent first)


4.4 CSV Download
Download the list of  QA records in CSV Format

REQUEST
URL	GET /eproc/qa/?csv=1
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the qa object. 
EG

?accuracy=1
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by qa.id Descending (most recent first)

4.5 Pivot Reports
Generates a Summary Report based on group fields (if no group fields are specified then returns a Total Count)

REQUEST
URL	GET /eproc/qa/rpt
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the qa object. 
EG

?accuracy=1
GROUP FIELDS	chan_usr (agentno)
chan_vector  (call direct : inbound or outbound)
GROUP FORMAT	To specify group field append a comma separated list to xaxis (or yaxis) Eg:

xaxis=chan_vector&yaxis=chan_usr


 
5. Queue Status
The Queue Status endpoints provide the following functions:
1.	Join Queue
2.	Leave Queue
3.	Poll Queue Status

5.1 Join Queue
Enables an Agent to join a Call Queue. 
This API invokes Asterisk to ring the agent’s extension. If the extension is online and call is answered, then the agent is added to the queue.

REQUEST
URL	POST /eproc/joinq
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	none
PARAMETERS	none


RESPONSE  (Success)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ “status”:”ringing”, “message”:”Ringing”}



RESPONSE (Fail)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ “status”:”false”, “message”:”Error Message”}


5.2 Leave Queue
Enables an Agent to exit a Call Queue. 

This API invokes Asterisk to remove the agent’s extension from the call queue

REQUEST
URL	POST /eproc/leaveq
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	none
PARAMETERS	none


RESPONSE  (Success)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ “status”:”offline”, “message”:”Offline”}



RESPONSE (Fail)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ “status”:”false”, “message”:”Error Message”}


 
5.3 Poll Queue Status
This API return queue_login status

The following are the possible values for queue_status:
-	online
-	offline
-	oncall
-	wrapup
-	ringing


REQUEST
URL	GET /eproc/
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json


RESPONSE
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ “profile”:[ 
   {  
      “status”:”online”,
      “'message”:”Online”, 
      “lastcall”:”08:00”, 
      “data”:”callid-000123232323”,
       “phone”:”012203203230”,
      “context”:”queue_english”
    }
] }


 
6. Calls
Calls API provides the following features
1.	View Call
2.	Download call recording
3.	List Calls
4.	CSV Download
5.	Pivot Report

6.1 View Call
Retrieves a single call record

REQUEST
URL	GET /eproc/calls/id
AUTH HEADER	XAuthorization: Bearer session-id


6.2 Download Call Recording
Retrieves the call recording file for download

REQUEST
URL	GET /eproc/calls/id?file=wav
AUTH HEADER	XAuthorization: Bearer session-id


6.3 List Users
Retrieves a list of  users

REQUEST
URL	GET /eproc/calls/
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the calls object. For Example

?hangup_status=answered
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by id Descending


6.4 CSV Download
Download the list of  users in CSV Format

REQUEST
URL	GET /eproc/calls/?csv=1
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the calls object. For Example

?hangup_status=answered
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by id Descending  (most recent first)

6.5 Pivot Reports
Generates a Summary Report based on group fields (if no group fields are specified then returns a Total Count)

REQUEST
URL	GET /eproc/calls/rpt
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the calls object. For Example

?hangup_status=answered
GROUP FIELDS	usr
context_masq
vector
hangup_status
sla_wait
qa_done
activity_count
GROUP FORMAT	To specify group field append a comma separated list to xaxis (or yaxis) Eg:

xaxis=usr&yaxis=hangup_status



 
7. Emails
Emails endpoint provides the following functions:
1.	Create Email (for sending)
2.	View Email
3.	View Email Body - text/plain
4.	View Email Body - text.html
5.	View Email Attachment
6.	List Emails
7.	CSV Download
8.	Pivot Reports

7.1 Creates Email  (for Sending)
Creates a Email record and queues it for sending.
The Create Email API enable sending emails to multiple recipients.
If the recipient’s email address does not exist in the Contacts database, the record is automatically added.

REQUEST
URL	POST /eproc/emails/
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ 
“subject”:”Test Email”, 
“msg”:”Hellow world”,  
“recipients”:[
   {“contact_email”:”aaa@email.com”},
   {“contact_email”:”bbb@email.com”},
   {“contact_email”:”ccc@email.com”}
],
“attachments”:[
  { “file_id”:”123434545454” }
]
}
PARAMETERS	subject:    String containing email subject
msg:    String containing email message
recipients:  array of email addresses - each encapsulated in a contact object
attachments:  array of file_id already uploaded (see: 9:Files APi) 



RESPONSE  (Success)

HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"emails_nb":[["info","Email Created"]]
“emails”:[  { object } ] // echos back the created email object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}


7.2 View Email 
Retrieves a single Email record (note that the email body  need to be retrieved separately)

REQUEST
URL	GET /eproc/emails/id
AUTH HEADER	XAuthorization: Bearer session-id


7.3 View Email Body (mime: text/plain)
Retrieves the email body in plain text format

REQUEST
URL	GET /eproc/emails/id?file=plain
AUTH HEADER	XAuthorization: Bearer session-id


7.4 View Email Body (mime: text/html)
Retrieves the email body in HTML format

REQUEST
URL	GET /eproc/emails/id?file=html
AUTH HEADER	XAuthorization: Bearer session-id


7.5 View Email Attachment 
If the email contains attachments, View Email (see 7.2) will return a json array containing attachments objects.
Each attachment object contains a file_id, which can be used to retrieve the file as follows:

REQUEST
URL	GET /eproc/files/id?file=1l
AUTH HEADER	XAuthorization: Bearer session-id


7.6 List Emails
Retrieves a list of  Emails

REQUEST
URL	GET /eproc/emails/
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the email object. 
EG

?subject=Test+Email
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by email.id Descending (most recent first)


7.7 CSV Download
Download the list of  Email records in CSV Format

REQUEST
URL	GET /eproc/emails/?csv=1
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the email object. 
EG

?subject=Test+Email
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parameter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by email.id Descending (most recent first)

7.8 Pivot Reports
Generates a Summary Report based on group fields (if no group fields are specified then returns a Total Count)

REQUEST
URL	GET /eproc/emails/rpt
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the email object. 
EG

?created_on=2020 Dec 15
GROUP FIELDS	folder
status
GROUP FORMAT	To specify group field append a comma separated list to xaxis (or yaxis) Eg:

xaxis=folder&yaxis=status



 
8. SMS
SMS endpoint provides the following functions:
1.	Create SMS (for sending)
2.	View SMS
3.	List SMS
4.	CSV Download
5.	Pivot Reports

8.1 Creates SMS  (for Sending)
Creates an SMS record and queues it for sending.
The Create SMS API enables sending SMSes to multiple recipients.
If the recipient’s phone address does not exist in the Contacts database, the record is automatically added.

REQUEST
URL	POST /eproc/sms/
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ 
“msg”:”Happy Holidays”,  
“recipients”:[
   {“contact_phone”:”0700112233”},
   {“contact_phone”:”0722112233”},
   {“contact_phone”:”0711223344”}
]
}
PARAMETERS	msg:    String containing SMS message
recipients:  array of phone numbers - each encapsulated in a contact object




RESPONSE  (Success)

HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"sms_nb":[["info","SMS Created"]]
“sms”:[  { object } ] // echos back the created sms object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}


8.2 View SMS 
Retrieves a single SMS record 

REQUEST
URL	GET /eproc/sms/id
AUTH HEADER	XAuthorization: Bearer session-id


8.3 List SMSes
Retrieves a list of  SMSes

REQUEST
URL	GET /eproc/sms/
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the sms object. 
EG

?status=SENT
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parmeter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by sms.id Descending (most recent first)


8.4 CSV Download
Download the list of  SMS records in CSV Format

REQUEST
URL	GET /eproc/sms/?csv=1
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the sms object. 
EG

?status=SENT
RECORD COUNT	To specify the maximum records to retrieve append the following GET parameter:

_c=50

Where 50 specifies to return a maximum of 50 records
START POSITION	To specify the start position append the following GET parameter:

_a=30  

Where 30 specify to skip first 30 records
SORTING	The records are sort by sms.id Descending (most recent first)

8.5 Pivot Reports
Generates a Summary Report based on group fields (if no group fields are specified then returns a Total Count)

REQUEST
URL	GET /eproc/sms/rpt
AUTH HEADER	XAuthorization: Bearer session-id
FILTER PARAMS	Filter parameters are specified using GET parameters.

GET parameter names should match any of the fields in the sms object. 
EG

?created_on=2020-Dec-1 to 2020-Dec-20
GROUP FIELDS	folder
status
GROUP FORMAT	To specify group field append a comma separated list to xaxis (or yaxis) Eg:

xaxis=folder&yaxis=status



 
9. Files
Files endpoint provides the following functions:
1.	Upload file
2.	Download file

9.1 Upload File
Upload a file and return a file_id that can used in other api.
For example:
-	Photo in create/update user
-	Attachment is emails API

REQUEST
URL	POST /eproc/files/
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: multipart/form-data
PAYLOAD	The file contents
PARAMETERS	file[]


RESPONSE  (Success)
HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"files_nb":[["info","File Created"]]
“files”:[  { object } ] // echos back the created file meta data
}


RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ”table-row”, "field-name"] ]}

9.2 Download File

REQUEST
URL	GET /eproc/files/id?file=1
AUTH HEADER	XAuthorization: Bearer session-id


RESPONSE
Returns the actual file from CRM Repository


10. Stats API
This endpoints return the stats for:
1.	Inbound calls
2.	Outbound calls
3.	Total Tickets
4.	Total Emails
5.	Total SMS


REQUEST
URL	GET /eproc/stats/0
AUTH HEADER	XAuthorization: Bearer session-id



## Documentation

[Documentation](https://linktodocumentation)

Table of Contents
1.	Introduction	3
2.	Case Management System	3
2.1 Install a web server	3
Configuring Nginx	4
2.2 Install MySQL	5
2.3 Install PHP	5
2.4 Install the CMS	6
3.	Install and configure Asterisk	6
Install Asterisk	6
Install SSL certificates	7
Configuring Asterisk	8
Conclusion	9
Technical Manual Sign-Off	10

 
1.	Introduction
The solution is made up of two main components and a number of dependencies as described here. The two main parts are: Case Management Systems (CMS) and Call Module powered by Asterisk. 
Asterisk runs best on Linux based operating systems and Centos 8 is recommended for this solution. All descriptions related to this version shall be based:
-	Centos 8
-	Nginx
-	MySql
2.	Case Management System
This is a web solution developed on PHP, html and Javascript. It runs on a web (apache/nginx/httpd) server and uses MySql or PostgresQl databases.
To setup the solution, install the following and their dependencies. It is advisable to run the installations as a non-root user and have firewall running.
2.1 Install a web server
In our case, we will use Nginx web server
In order to install Nginx, we’ll use the dnf package manager, which is the new default package manager on CentOS 8.
Install the nginx package with:
sudo dnf install nginx 
Enable and start the server:
sudo systemctl enable nginx
sudo systemctl start nginx

Check on the browser with your domain IP or using 127.0.0.1 if on current computer. The service runs on port 80 by default. You should be able to get a Nginx welcome page as below if the server is correctly and successfully installed.
  
Configuring Nginx
Nginx can host several web application in different drectories and different domains. Since we have one application for our case, we will install our application on Nginx root folder. The default Nginx root directory is 

/usr/share/nginx/html

Most users prefer changing the root directory to:

/var/www/html

Nginx configuration files are found in /etc/nginx/ directory and the default configuration file is /etc/nginx/nginx.conf. The root directory can be changed on the configuration file.

Another important Nginx directory is /etc/nginx/conf.d/, this directory contains server block configuration files, where you can define the websites that are hosted within Nginx. A typical approach is to have each website in a separate file that is named after the website’s domain name, such as helpline.conf.

For our case, we will have the application server block within the etc/nginx/nginx.conf configuration file as below: Update the configuration file with the below lines, some may already exist.

server {
        listen 80;
        listen [::]:80;

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name uchl2.mglsd.go.ug www.uchl2.mglsd.go.ug;

        location / {
                try_files $uri $uri/ =404;
        }
}
 

To make sure that there are no syntax errors in any of your Nginx files, run:
sudo nginx -t
 
Once your configuration test passes, restart Nginx to enable your changes:
sudo systemctl restart nginx
 
 
With this and CMS installation, the application will be available on the local IP and the domain on condition that the domain and the local server IP have been mapped to a public IP.
Also, for php to work with nginx, install php-fpm with the following command:
sudo systemctl enable php-fpm 

sudo systemctl start php-fpm
Configure php-fpm listen to php-fpm.sock in /etc/php-fpm.d/www.conf. The default path for the sock file is /var/run/php-fpm/php-fpm.sock
2.2 Install MySQL 
Run the following command to install the mysql-server package and a number of its dependencies:
sudo dnf install mysql-server
With that, MySQL is installed on the server but it isn’t yet operational. The package you just installed configures MySQL to run as a systemd service named mysqld.service. In order to use MySQL, there is need to start.
sudo systemctl start mysqld.service
Then set MySQL to start whenever the server boots up
sudo systemctl enable mysqld
To secure MySQL, run the following commands and follow the prompts.
sudo mysql_secure_installation
This will enable one to set a password for the root user, however, it is recommended not to run the system with MySQL root user
2.3 Install PHP 
The installed web server can execute files which do not need compilations such as html files, php compiler will need to be installed for php files to be executed on the server.
To install the php and php-mysqlnd packages using the dnf package manager, run:
sudo dnf install php php-mysqlnd
Once the installation is complete, restart the Nginx server in order to enable the PHP module.
2.4 Install the CMS
This is done by simply pulling the code from the code repository, either the solution github repository or a local directory.
3.	Install and configure Asterisk
Install Asterisk
The current system runs and operates optimally with Asterisk 16 and is recommended to install from source. The following steps describe the process:
Download Asterisk 16 source files from to your server using the following command:
wget https://downloads.asterisk.org/pub/telephony/asterisk/asterisk-16-current.tar.gz
Other Asterisk dependencies we will install are:
i.	Lipri - The libpri library allows Asterisk to communicate with ISDN connections. We will need because of using DAHDI with ISDN interface hardware such as E1. Download Link
ii.	Dahdi - The DAHDI library allows Asterisk to communicate with analog and digital telephones and telephone lines, including connections to the Public Switched Telephone Network, or PSTN. Download Link
After downloads, untar the source files using the following commands:
tar -zxvf libpri-current.tar.gz
tar -zxvf dahdi-linux-complete-current.tar.gz
tar -zxvf asterisk-16-current.tar.gz
Build and install dahdi using the following commands:
cd dahdi-linux-complete-current
make
make install
make config
Build and install LibPRI using the following commands:
cd libpri-current
make
make install
Now compile and install asterisk with the following commands:
cd asterisk-16-current
./configure
Resolve any dependency issue that may cause the ./configure to fail then use the following command to select the desired asterisk menu items.
make menuselect
This command will have a screen like this:
 
To compile Asterisk, simply type make at the Linux command line.
make
Then install Asterisk using the following command:
make install
At this point, Asterisk installation is complete and can start or check the service status using the commands below:
/etc/init.d/asterisk start
/etc/init.d/asterisk status
Install SSL certificates
Asterisk provides a utility script, ast_tls_cert in the contrib/scripts source directory. We will use it to make a self-signed certificate authority and a server certificate for Asterisk, signed by our new authority.
Still on the Asterisk installation source directory, run the following commands:
sudo mkdir /etc/asterisk/keys
sudo contrib/scripts/ast_tls_cert -C uchl.mglsd.go.ug  -O "Sauti Helpline" -b 2048 -d /etc/asterisk/keys
Follow the prompts keenly not to skip any necessary information. A successfully certificate generation will create the following files on the certificate directory mkdir /etc/asterisk/keys.
asterisk.crt
asterisk.csr
asterisk.key
asterisk.pem
ca.cfg
ca.crt
ca.key
tmp.cfg
Configuring Asterisk
To meet the system requirements for optimal operations, follow the following configuration steps with the respective parameters 
To communicate with WebSocket clients, Asterisk uses its built-in HTTP server. Configure /etc/asterisk/http.conf as follows:
[general]
enabled=yes
bindaddr=0.0.0.0
bindport=8088
tlsenable=yes
tlsbindaddr=0.0.0.0:8089
tlscertfile=/etc/asterisk/keys/asterisk.crt
tlsprivatekey=/etc/asterisk/keys/asterisk.key

Configure PJSIP on /etc/asterisk/pjsip.conf as follows:

[webrtc_client]
type=aor
max_contacts=5
remove_existing=yes
  
[webrtc_client]
type=auth
auth_type=userpass
username=webrtc_client
password=webrtc_client ; This is a completely insecure password!  Do NOT expose this
                       ; system to the Internet without utilizing a better password.
 
[webrtc_client]
type=endpoint
aors=webrtc_client
auth=webrtc_client
dtls_auto_generate_cert=yes
webrtc=yes
; Setting webrtc=yes is a shortcut for setting the following options:
; use_avpf=yes
; media_encryption=dtls
; dtls_verify=fingerprint
; dtls_setup=actpass
; ice_support=yes
; media_use_received_transport=yes
; rtcp_mux=yes
context=default
disallow=all
allow=opus,ulaw

Additionally, for asterisk configurations, make a backup of the following files in /etc/asterisk/ directory and copy the same files from CRM directory /helpline/configs/ readily configured into the asterisk configuration directory /etc/asterisk/
manager.conf
pjsip.conf
extensions.conf
confbridge.conf

After the configurations, ensure you restart asterisk for the configurations to take effect.
Post Installation Issues
These are some of the problems that may occur due to issues such as dependent service not running or insufficient space after a long time.

i.	When the users are not able to join queue or there is an issue with receiving calls, perform the following on the server:
killall muu
killall vami
cd /usr/local/vapps/bin/
nohup ./muu &

ii.	When the call records are not updating but the calls have no issues in receiving and creating cases, run the following command on the terminal.
curl http://localhost:7374/rpt/
# helpline
