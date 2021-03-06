
# OpenCHS  
Our system is used by the helplines in East Afrcia to callect store and analyze data for Violence Against children and Gender based Violence.

## Acknowledgements

 - [UNICEF](https://www.unicef.org/)
 - [UNFPA]((https://www.unfpa.org/))
 - [ChildLine Kenya](https://childlinekenya.co.ke)
 - [Sauti Uganda ](https://sauti.mglsd.go.ug/sauti/)
 - [Sema Tanzania](https://www.sematanzania.org/child-helpline)
 - Child Helpline Lesotho
 - 



## Demo

[Link to our Demo Product](https://openchs.bitz-itc.com/helpline/)

User: Demo

Password: p@ssw0rd

# Level wise authentication

# Admin User
user TestAdmin

Password: p@ssw0rd

# Partner Login

user TestPartner

Password: p@ssw0rd

# Case Manager

user TestCaseManager

Password: p@ssw0rd

# Case Worker 

user TestCaseWorker

Password: p@ssw0rd

# Supervisor

user TestSupervisor

Password: p@ssw0rd

# Agent

user TestAgent

Password: p@ssw0rd




Additionally just open the following links. This will fire up the asterisks




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

???

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

???
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
 ???Profile???:[ ??? ] 
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
PAYLOAD	{ ???pass0???:???1234567???, ???pass1???:???1234@Gr???, ???pass1???:???1234@Gr??? }
PARAMETERS	pass0:  current password
pass1: new password
pass2: confirm password


RESPONSE  (Success)
Return the session id (ss object) on successful login. The session-id will be used for subsequent API calls
HTTP CODE	202
FORMAT	application/json
PAYLOAD	{
 "profile_nb":[["info","Password Changed"]]
 ???Profile???:[ ??? ] 
}


RESPONSE  (Fail)
HTTP CODE	412
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}


???
1.3 Admin Reset Password

The account is reset to default password of ???callcenter???

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
 ???Profile???:[ ??? ] 
}


RESPONSE  (Fail)
HTTP CODE	412
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}


???
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
PAYLOAD	{ ???usn???:???test???, ???exten???:???8123???, ???photo???:???123244554556???, ???fname???:???Albert???, ???lname???:???Jeffry???, ???phone???:???0112009877???, ???email???:???albertjefry@email.com??? }
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
???users???:[  { object } ] // echos back the created user object  
}


RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}

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


???
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
PAYLOAD	{ ???source???:???call???, ???source_id???:???23231232???, ???category_main???:???2???, ???category_sub???:???14???, ???narrative???:???describe case details???, ???resolution???:???describe solution given???, ???status???:???closed???, ???priority???:???medium???, ???referred_to???:??????, ???escalated_to???:??????, ???disposition???:???call completed???,

 ???contacts???:{  ???fname???:???AAAA???, ???lname???:???BBBB???, ???phone???:???0110123456???, ???email???:???aaaa@email.com???, ???town???:???Nairobi???, ???country???:???Kenya???, ???user_category???:???1???,  ???position_in_org???:???CTO???,  ???org_name???:???AAB ???  }

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
???tickets???:[  { object } ] // echos back the created ticket object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}


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

???
4. QA (Quality Assurance)
QA endpoint provides the following functions:
1.	Create QA
2.	View QA
3.	List QA
4.	CSV Download
5.	Pivot Reports

4.1 Creates QA Record
Creates a QA record attached to a call record. 
On successful creation of a QA record, the call record is flagged as ???qa_done???

REQUEST
URL	POST /eproc/qa
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ 
???source???:???call???, ???source_id???:???23231232???,  ???opening???:???1???, ???holding???:???1???, ???politeness???:???1???, ???enthusiasm???:???1???, ???personalization???:???1???, ???troubleshooting???:???1???, ???listening???:???1???, ???accuracy???:???1???, ???resolution???:???1???, ???comments???:???1???, ???recomendations???:???1???
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
???qa???:[  { object } ] // echos back the created qa object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}


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


???
5. Queue Status
The Queue Status endpoints provide the following functions:
1.	Join Queue
2.	Leave Queue
3.	Poll Queue Status

5.1 Join Queue
Enables an Agent to join a Call Queue. 
This API invokes Asterisk to ring the agent???s extension. If the extension is online and call is answered, then the agent is added to the queue.

REQUEST
URL	POST /eproc/joinq
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	none
PARAMETERS	none


RESPONSE  (Success)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ ???status???:???ringing???, ???message???:???Ringing???}



RESPONSE (Fail)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ ???status???:???false???, ???message???:???Error Message???}


5.2 Leave Queue
Enables an Agent to exit a Call Queue. 

This API invokes Asterisk to remove the agent???s extension from the call queue

REQUEST
URL	POST /eproc/leaveq
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	none
PARAMETERS	none


RESPONSE  (Success)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ ???status???:???offline???, ???message???:???Offline???}



RESPONSE (Fail)
HTTP CODE	200 OK
FORMAT	application/json
PAYLOAD	{ ???status???:???false???, ???message???:???Error Message???}


???
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
PAYLOAD	{ ???profile???:[ 
   {  
      ???status???:???online???,
      ???'message???:???Online???, 
      ???lastcall???:???08:00???, 
      ???data???:???callid-000123232323???,
       ???phone???:???012203203230???,
      ???context???:???queue_english???
    }
] }


???
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



???
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
If the recipient???s email address does not exist in the Contacts database, the record is automatically added.

REQUEST
URL	POST /eproc/emails/
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ 
???subject???:???Test Email???, 
???msg???:???Hellow world???,  
???recipients???:[
   {???contact_email???:???aaa@email.com???},
   {???contact_email???:???bbb@email.com???},
   {???contact_email???:???ccc@email.com???}
],
???attachments???:[
  { ???file_id???:???123434545454??? }
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
???emails???:[  { object } ] // echos back the created email object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}


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



???
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
If the recipient???s phone address does not exist in the Contacts database, the record is automatically added.

REQUEST
URL	POST /eproc/sms/
AUTH HEADER	XAuthorization: Bearer session-id
CONTENT TYPE	Content-Type: application/json
PAYLOAD	{ 
???msg???:???Happy Holidays???,  
???recipients???:[
   {???contact_phone???:???0700112233???},
   {???contact_phone???:???0722112233???},
   {???contact_phone???:???0711223344???}
]
}
PARAMETERS	msg:    String containing SMS message
recipients:  array of phone numbers - each encapsulated in a contact object




RESPONSE  (Success)

HTTP CODE	201 Created
FORMAT	application/json
PAYLOAD	{
"sms_nb":[["info","SMS Created"]]
???sms???:[  { object } ] // echos back the created sms object  
}



RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}


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



???
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
???files???:[  { object } ] // echos back the created file meta data
}


RESPONSE (Fail)
HTTP CODE	412 Invalid Data
FORMAT	application/json
PAYLOAD	{ "errors":[["error", "Error Message", "ERROR_TYPE", "table-name", ???table-row???, "field-name"] ]}

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
In order to install Nginx, we???ll use the dnf package manager, which is the new default package manager on CentOS 8.
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

Another important Nginx directory is /etc/nginx/conf.d/, this directory contains server block configuration files, where you can define the websites that are hosted within Nginx. A typical approach is to have each website in a separate file that is named after the website???s domain name, such as helpline.conf.

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
With that, MySQL is installed on the server but it isn???t yet operational. The package you just installed configures MySQL to run as a systemd service named mysqld.service. In order to use MySQL, there is need to start.
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

# Used By
This Project is used by the following countries to manage their child Helpline system :

-Childline Kenya

-Sauti Uganda

-Child Helpline Lesotho

-Sema - Child Helpline Tanzania

# User Instruction 
<h1><a href="https://app.tango.us/app/workflow/a95f3a1d-c698-4105-8aa0-7e9518a9218b?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Login to OPENCHS </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/a95f3a1d-c698-4105-8aa0-7e9518a9218b?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Click on user</h3>
<img src="https://images.tango.us/public/screenshot_9a4d2364-62f0-4886-bab9-7844ab3c113a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6771&fp-y=0.3300&fp-z=2.5600&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on user" />
</div>

<div><h3>3. Click on Login</h3>
<img src="https://images.tango.us/public/screenshot_49e14185-551c-4e1c-813c-07b0355afc64.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6771&fp-y=0.5241&fp-z=2.5600&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Login" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/a95f3a1d-c698-4105-8aa0-7e9518a9218b?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>


<h1><a href="https://app.tango.us/app/workflow/a2a61139-e7c9-453a-b53c-8d76cfb067cc?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Joining Queue and Creating a Reporter  </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/a2a61139-e7c9-453a-b53c-8d76cfb067cc?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Click on Available</h3>
<img src="https://images.tango.us/public/screenshot_466488e3-3b19-4c16-bdf4-91e985a050b4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8833&fp-y=0.0252&fp-z=3.0040&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Available" />
</div>

<div><h3>3. Click Profile & Join Join Queue</h3>
<img src="https://images.tango.us/public/screenshot_815d0d20-41c9-444d-a965-2020dd3451a0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9839&fp-y=0.0252&fp-z=2.9843&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click Profile &amp; Join Join Queue" />
</div>

<div><h3>4. Click on New Reporter</h3>
<img src="https://images.tango.us/public/screenshot_f3d8460c-e604-459d-a66b-e3d4ac5dd88c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8130&fp-y=0.2314&fp-z=3.0239&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on New Reporter" />
</div>

<div><h3>5. Type "Zachayo "</h3>
<img src="https://images.tango.us/public/screenshot_03f8f446-dce8-415a-9c43-f56481aeb54b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.2034&fp-z=1.9473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Zachayo &quot;" />
</div>

<div><h3>6. Type "20"</h3>
<img src="https://images.tango.us/public/screenshot_436b16a1-28cd-4e31-8957-0caedb125752.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6094&fp-y=0.2034&fp-z=2.4427&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;20&quot;" />
</div>

<div><h3>7. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_34908eb9-1586-4271-afa9-04522c5c788c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.2774&fp-z=3.0040&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>8. Click on EASTERN</h3>
<img src="https://images.tango.us/public/screenshot_0490132b-679c-428c-a557-3eae6dab5304.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5109&fp-y=0.3876&fp-z=1.6189&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on EASTERN" />
</div>

<div><h3>9. Click on BUDAKA</h3>
<img src="https://images.tango.us/public/screenshot_ba701504-8ee1-484d-9283-fc786216a805.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5161&fp-y=0.4243&fp-z=1.6467&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on BUDAKA" />
</div>

<div><h3>10. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_d8a00651-810b-4918-8754-e5a47e5f5ef8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.2774&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>11. Click on ^Female</h3>
<img src="https://images.tango.us/public/screenshot_2a760f07-9a7c-4664-82ec-381f66062fe5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.3163&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Female" />
</div>

<div><h3>12. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_f70b7b9a-4a75-4e64-816f-90244e12c536.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.2774&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>13. Click on ^Male</h3>
<img src="https://images.tango.us/public/screenshot_af2d3d29-ff93-4be3-a211-da8f15e89f75.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.3865&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Male" />
</div>

<div><h3>14. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_8bb362b5-27e8-49ba-ab1b-961f171a8065.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5066&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>15. Click on ^Kenyan</h3>
<img src="https://images.tango.us/public/screenshot_8c5dab64-f1b9-4577-add2-ce4d2fefbb93.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.5455&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Kenyan" />
</div>

<div><h3>16. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_9519b957-1669-4b09-a1b5-a7e142a56fbb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.5066&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>17. Click on ^National ID</h3>
<img src="https://images.tango.us/public/screenshot_00f975d0-3532-4cdc-b822-e1c1ac13d7fc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.5455&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^National ID" />
</div>

<div><h3>18. Type "34242425"</h3>
<img src="https://images.tango.us/public/screenshot_b9256412-9de6-42ae-b6b4-0965dbe40150.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6094&fp-y=0.5071&fp-z=2.4427&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;34242425&quot;" />
</div>

<div><h3>19. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_8ea633d0-3d38-4297-a767-73040dde292f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5822&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>20. Click on ^Acholi</h3>
<img src="https://images.tango.us/public/screenshot_c0a9fb14-3dd4-47ea-88f3-2c077e237ef0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.6212&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Acholi" />
</div>

<div><h3>21. Click on New Reporter???</h3>
<img src="https://images.tango.us/public/screenshot_914882c8-12a7-43d1-b9bf-79774bbf62ab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.3832&fp-z=1.0875&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on New Reporter???" />
</div>

<div><h3>22. Click on Next</h3>
<img src="https://images.tango.us/public/screenshot_82473541-47d9-4aff-bfc5-33cd504f0ea8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3880&fp-y=0.6601&fp-z=2.4742&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Next" />
</div>

<div><h3>23. Click on Close</h3>
<img src="https://images.tango.us/public/screenshot_b100dbba-cb6b-48f1-9a2a-398e96d43ea0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8227&fp-y=0.0746&fp-z=3.0441&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Close" />
</div>

<div><h3>24. Click on ???</h3>
<img src="https://images.tango.us/public/screenshot_d0e21a45-abb2-42db-ac1f-794299192086.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8414&fp-y=0.0800&fp-z=3.0441&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ???" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/a2a61139-e7c9-453a-b53c-8d76cfb067cc?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>

<h1><a href="https://app.tango.us/app/workflow/676099df-e525-4eb2-9be4-dd41ec1e2feb?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Creating a New case and adding Client Information </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/676099df-e525-4eb2-9be4-dd41ec1e2feb?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Click on New Case</h3>
<img src="https://images.tango.us/public/screenshot_b2bad9e0-f75f-4ddd-9475-2074436b888f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8174&fp-y=0.2478&fp-z=3.0239&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on New Case" />
</div>

<div><h3>3. Click on +</h3>
<img src="https://images.tango.us/public/screenshot_f107baa4-f614-4404-a3ee-0b1aae7dde26.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2440&fp-y=0.3158&fp-z=3.1276&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on +" />
</div>

<div><h3>4. Type "Doreen"</h3>
<img src="https://images.tango.us/public/screenshot_d8bb29da-6e7f-408e-bdae-aa96e2727677.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.2034&fp-z=1.9473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Doreen&quot;" />
</div>

<div><h3>5. Type "12"</h3>
<img src="https://images.tango.us/public/screenshot_6279f90f-024d-48a8-822c-0c038ccb4e4d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6094&fp-y=0.2034&fp-z=2.4427&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;12&quot;" />
</div>

<div><h3>6. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_f05849e1-3876-49f7-b55a-35bfe034f776.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.2774&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>7. Click on CENTRAL</h3>
<img src="https://images.tango.us/public/screenshot_5538675d-a4ec-4ced-ab59-f8f9c6cc1a26.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5109&fp-y=0.3514&fp-z=1.6189&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on CENTRAL" />
</div>

<div><h3>8. Click on BUKOMANSIMBI</h3>
<img src="https://images.tango.us/public/screenshot_c903f9e9-32de-4dfb-b52f-de726ef10dbb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5161&fp-y=0.4243&fp-z=1.6467&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on BUKOMANSIMBI" />
</div>

<div><h3>9. Click on BUKOMANSIMBI</h3>
<img src="https://images.tango.us/public/screenshot_6965bb1c-11e2-48e9-875a-b7d8d0eafe7c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5214&fp-y=0.4232&fp-z=1.6754&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on BUKOMANSIMBI" />
</div>

<div><h3>10. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_d6bde4b1-ad66-4dcc-8b71-d010ebefb91b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.2774&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>11. Click on ^Male</h3>
<img src="https://images.tango.us/public/screenshot_c86958c7-1867-48e8-9dde-650d1b8c95c4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.3887&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Male" />
</div>

<div><h3>12. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_0eed60de-4a5e-485b-be17-19e0374626b1.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.3542&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>13. Click on ^Acholi</h3>
<img src="https://images.tango.us/public/screenshot_b9f0f31c-d112-47c0-a5a2-09b75901bc1d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.3931&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Acholi" />
</div>

<div><h3>14. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_084aa233-e976-4890-ac94-abc2df52a368.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5044&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>15. Click on ^Kenyan</h3>
<img src="https://images.tango.us/public/screenshot_269060fc-03ce-40e1-90fb-8631977da5b6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.5433&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Kenyan" />
</div>

<div><h3>16. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_9d80c3c4-6177-4ebf-a41b-d5457e126750.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.5044&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>17. Click on ^National ID</h3>
<img src="https://images.tango.us/public/screenshot_7f913cfd-8d5f-4044-812e-e0f8d668831c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.5433&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^National ID" />
</div>

<div><h3>18. Click on ???</h3>
<img src="https://images.tango.us/public/screenshot_ed306c22-fee1-4e4b-89a9-62560547bf1c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4945&fp-y=0.5055&fp-z=3.0441&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ???" />
</div>

<div><h3>19. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_4128dd0b-d136-4b54-99c7-1580349596c9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5822&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>20. Click on ^Acholi</h3>
<img src="https://images.tango.us/public/screenshot_3645e9b5-7ae4-4aa5-885c-99e54f82efcf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.6212&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Acholi" />
</div>

<div><h3>21. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_e9923d4b-c9a0-4a1e-b7a0-292728c14ed8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3880&fp-y=0.6782&fp-z=2.4742&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>22. Click on ^Father</h3>
<img src="https://images.tango.us/public/screenshot_0157676b-5db3-4fdc-a10a-4fa39caf1bea.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3885&fp-y=0.7889&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Father" />
</div>

<div><h3>23. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_06b32f52-9445-4b70-a914-a492f4781c34.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5417&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>24. Click on ^Single</h3>
<img src="https://images.tango.us/public/screenshot_5412aff5-396f-44f3-afa2-58953df675a0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.7253&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Single" />
</div>

<div><h3>25. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_b181f318-96e6-4c04-b468-34787ababb33.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3445&fp-y=0.8405&fp-z=3.2598&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>26. Type "Teso primary "</h3>
<img src="https://images.tango.us/public/screenshot_faf86257-55ff-426f-8e9d-677d17bbaa6a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.6650&fp-z=1.9473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Teso primary &quot;" />
</div>

<div><h3>27. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_43944f4a-1274-4b8d-83d2-b61e6ec0afcb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.6645&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>28. Click on ^Primary</h3>
<img src="https://images.tango.us/public/screenshot_6d48a948-e860-4724-bb7a-5aa9d7a04846.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6073&fp-y=0.7396&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Primary" />
</div>

<div><h3>29. Type "Buru"</h3>
<img src="https://images.tango.us/public/screenshot_73a18924-dfbf-4cdf-9463-c04bd7b81b10.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.7429&fp-z=1.9473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Buru&quot;" />
</div>

<div><h3>30. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_78e8e373-9fcb-4429-9351-0fcd496bd192.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.7396&fp-z=3.1683&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>31. Click on ^Government Boarding</h3>
<img src="https://images.tango.us/public/screenshot_d0bd3d64-c6ec-4837-98f9-0161016982d3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5951&fp-y=0.7834&fp-z=2.7080&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Government Boarding" />
</div>

<div><h3>32. Type "Regular"</h3>
<img src="https://images.tango.us/public/screenshot_70b923a6-03ac-460a-8575-48f7839d7057.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.8383&fp-z=1.9473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Regular&quot;" />
</div>

<div><h3>33. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_11a93efe-5ac3-419c-87ca-66c553b729a2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3445&fp-y=0.9249&fp-z=3.2598&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>34. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_b2083830-a2d9-43d6-892e-b71f16b089cb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.8947&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>35. Click on ^Intellectual</h3>
<img src="https://images.tango.us/public/screenshot_20bbdaa6-6fd1-44d5-8e2f-ee749728c0de.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3594&fp-y=0.9720&fp-z=2.9814&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Intellectual" />
</div>

<div><h3>36. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_9e2d5c19-49c3-4eee-9f40-5df1489b2fb7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4539&fp-y=0.8964&fp-z=3.2598&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>37. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_41e93ed0-a857-458d-a6ed-1f3bea564cea.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5547&fp-y=0.8871&fp-z=1.9277&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>38. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_dd1acdb6-edaa-40f0-af52-968e1a7a335f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4547&fp-y=0.8706&fp-z=3.2542&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>39. Click on Add</h3>
<img src="https://images.tango.us/public/screenshot_b722139b-9e00-4010-ac04-b093ffb2f03e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3880&fp-y=0.8476&fp-z=2.4742&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Add" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/676099df-e525-4eb2-9be4-dd41ec1e2feb?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>


<h1><a href="https://app.tango.us/app/workflow/dbe3e275-9cba-4ab2-a916-85a2db9ef1b3?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Adding Perpetrator Details </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/dbe3e275-9cba-4ab2-a916-85a2db9ef1b3?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Type "Douglas"</h3>
<img src="https://images.tango.us/public/screenshot_48c687ad-948c-4103-99c9-424f257b4868.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.2034&fp-z=1.9473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Douglas&quot;" />
</div>

<div><h3>3. Type "25"</h3>
<img src="https://images.tango.us/public/screenshot_751f7cd9-e5be-44de-b42c-72341076ed69.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6094&fp-y=0.2034&fp-z=2.4427&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;25&quot;" />
</div>

<div><h3>4. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_32e92cda-7e89-4faf-93ce-0ba303bcd02b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.2774&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>5. Click on CENTRAL</h3>
<img src="https://images.tango.us/public/screenshot_90aab655-7f7f-4918-9c4a-1edad2b102cf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5109&fp-y=0.3542&fp-z=1.6189&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on CENTRAL" />
</div>

<div><h3>6. Click on BUIKWE</h3>
<img src="https://images.tango.us/public/screenshot_523f01ed-2464-4add-8972-0c8cd91a3934.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5161&fp-y=0.3854&fp-z=1.6467&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on BUIKWE" />
</div>

<div><h3>7. Click on LUGAZI MUNICIPALITY</h3>
<img src="https://images.tango.us/public/screenshot_1cf316d2-919b-44e0-ac20-4520e2e14f0f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5214&fp-y=0.4594&fp-z=1.6754&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on LUGAZI MUNICIPALITY" />
</div>

<div><h3>8. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_620896b7-612b-4b2d-992b-55fc7f9cf0e0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.2774&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>9. Click on ^Male</h3>
<img src="https://images.tango.us/public/screenshot_cef97293-ab8b-4996-ab85-726b14f4ddb5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.3887&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Male" />
</div>

<div><h3>10. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_6f3591db-bad8-4be9-9be2-523f6c9b3217.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5066&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>11. Click on ^Kenyan</h3>
<img src="https://images.tango.us/public/screenshot_f8dd337a-07fb-4abd-880f-6553dbe32748.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.5455&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Kenyan" />
</div>

<div><h3>12. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_8e2277e1-3094-49cd-a1e0-352ea3fa967b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.5066&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>13. Click on ^National ID</h3>
<img src="https://images.tango.us/public/screenshot_1a8a13d9-3a1d-47dd-8c2a-0f1a749c42cf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.5455&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^National ID" />
</div>

<div><h3>14. Type "21212"</h3>
<img src="https://images.tango.us/public/screenshot_213d31d4-890e-47f6-9723-1db5c348b718.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6094&fp-y=0.5071&fp-z=2.4427&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;21212&quot;" />
</div>

<div><h3>15. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_ab4dc136-ff65-454a-8b30-e4ae4c9cb175.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.5795&fp-z=3.0543&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>16. Click on ^Acholi</h3>
<img src="https://images.tango.us/public/screenshot_f261e741-5c78-4e46-a716-ec469ec6a275.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.6212&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Acholi" />
</div>

<div><h3>17. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_810757db-d189-4d98-98de-6e5b2f9eec57.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.6579&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>18. Type "nei"</h3>
<img src="https://images.tango.us/public/screenshot_c5bb82f4-f5e0-4724-b524-9ade0c44b3cd.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3880&fp-y=0.6584&fp-z=2.4742&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;nei&quot;" />
</div>

<div><h3>19. Click on ghbor</h3>
<img src="https://images.tango.us/public/screenshot_3bdfc174-607f-460f-a394-e69c98b73720.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3648&fp-y=0.6990&fp-z=3.1527&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ghbor" />
</div>

<div><h3>20. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_0610d9d9-d475-473e-b3d7-1ab1eb0da001.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5417&fp-y=0.5439&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>21. Click on ^No</h3>
<img src="https://images.tango.us/public/screenshot_9636681e-d6ed-4705-a603-4726e129276c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4979&fp-y=0.5828&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^No" />
</div>

<div><h3>22. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_a1b5bed6-2ff8-4433-8b56-7349fe8b2552.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6563&fp-y=0.5439&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>23. Click on ^Casual Laborer</h3>
<img src="https://images.tango.us/public/screenshot_b53a2359-af5b-409b-b71c-1433dc376b6d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.5828&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Casual Laborer" />
</div>

<div><h3>24. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_97c57774-dadb-4662-9e11-29e0fbcc0aff.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.6195&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>25. Click on ^Divorced</h3>
<img src="https://images.tango.us/public/screenshot_da02a920-6d27-445d-a9f2-aa7ea61ee08d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3565&fp-y=0.6968&fp-z=3.0332&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Divorced" />
</div>

<div><h3>26. Click on ^Cohabiting</h3>
<img src="https://images.tango.us/public/screenshot_3b6f82f9-5e7b-4e98-a28a-51fe4527b2bf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.6563&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Cohabiting" />
</div>

<div><h3>27. Click on Perpetrator's Guardian's Name</h3>
<img src="https://images.tango.us/public/screenshot_7fe76b1c-07e6-44aa-8c4e-f423e4a2bd3d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6765&fp-z=1.5920&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Perpetrator&#039;s Guardian&#039;s Name" />
</div>

<div><h3>28. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_40a6d3e6-72cf-4585-942b-adc68766675d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4323&fp-y=0.6195&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>29. Click on ^Unknown</h3>
<img src="https://images.tango.us/public/screenshot_426e8b49-30aa-4a89-815d-90d8accb9905.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3911&fp-y=0.8372&fp-z=2.5065&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Unknown" />
</div>

<div><h3>30. Click on Add</h3>
<img src="https://images.tango.us/public/screenshot_ffe17459-502c-494d-9416-16f7e2fcb0e9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3880&fp-y=0.9079&fp-z=2.4742&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Add" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/dbe3e275-9cba-4ab2-a916-85a2db9ef1b3?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>


<h1><a href="https://app.tango.us/app/workflow/a77995d5-de64-4783-bb22-9b2b9572024a?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Creating  case </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/a77995d5-de64-4783-bb22-9b2b9572024a?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_6342800a-61ac-4a55-98e9-017115ebcd43.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2422&fp-y=0.6568&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>3. Click on ^Report to Police</h3>
<img src="https://images.tango.us/public/screenshot_34dcb337-5040-4a6c-9d9f-7e2fb6f76c67.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2023&fp-y=0.9386&fp-z=1.6827&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Report to Police" />
</div>

<div><h3>4. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_eac6203a-3e58-4e28-8f23-d610dc1a21ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2422&fp-y=0.5757&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>5. Type "OB35663653N"</h3>
<img src="https://images.tango.us/public/screenshot_039696ea-93ef-4784-8b3b-3b20fafeff6f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1260&fp-y=0.7473&fp-z=2.1918&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;OB35663653N&quot;" />
</div>

<div><h3>6. Click on highlight</h3>
<p>You can indicated if the case is GBV Related or not</p>
<img src="https://images.tango.us/public/screenshot_ede050dd-fdaa-4369-8929-89d2fb6e57e4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6589&fp-y=0.4068&fp-z=3.1063&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>7. Click on Child Neglect</h3>
<img src="https://images.tango.us/public/screenshot_ab19d585-9cda-460b-80e6-146a6b1b2761.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4745&fp-y=0.5170&fp-z=1.5534&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Child Neglect" />
</div>

<div><h3>8. Click on Denial of Education</h3>
<img src="https://images.tango.us/public/screenshot_2dc50f68-7506-477a-8247-5a8c7d06899b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4797&fp-y=0.6272&fp-z=1.5789&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Denial of Education" />
</div>

<div><h3>9. Click on UCHL-???</h3>
<img src="https://images.tango.us/public/screenshot_3da11ffb-f277-42a4-a3c2-089445867ea5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.6009&fp-z=1.0350&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on UCHL-???" />
</div>

<div><h3>10. Type "Child is not going to school "</h3>
<img src="https://images.tango.us/public/screenshot_59ff9576-aa1a-4abe-87be-acc7b6c42472.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4766&fp-y=0.5230&fp-z=1.4701&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Child is not going to school &quot;" />
</div>

<div><h3>11. Click on plan</h3>
<img src="https://images.tango.us/public/screenshot_9f82427a-e460-43b6-926a-36a087ea488d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4766&fp-y=0.6743&fp-z=1.4701&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on plan" />
</div>

<div><h3>12. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_90ac8ff8-3d15-44e7-a8e0-741822783612.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3828&fp-y=0.7873&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>13. Click on ^Social Worker</h3>
<img src="https://images.tango.us/public/screenshot_d2d528b0-8ba5-45e6-b189-912cd6ef2dab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3651&fp-y=0.9084&fp-z=2.2430&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Social Worker" />
</div>

<div><h3>14. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_ceebddd1-9490-4b90-a811-48e4df7bfafd.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4922&fp-y=0.7873&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>15. Click on ^Progressing</h3>
<img src="https://images.tango.us/public/screenshot_353fed00-8b6c-414b-aab2-59c103c03709.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4745&fp-y=0.8262&fp-z=2.2430&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on ^Progressing" />
</div>

<div><h3>16. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_c701ddc7-150b-4092-a4d7-179d830b305a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3828&fp-y=0.8706&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>17. Click on Low</h3>
<img src="https://images.tango.us/public/screenshot_658cabe7-97b0-4426-851d-3555408a0f3c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3391&fp-y=0.9145&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Low" />
</div>

<div><h3>18. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_0f0fd227-d1c8-47c1-9804-4940086d4146.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4974&fp-y=0.8706&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>19. Click on Ongoing</h3>
<img src="https://images.tango.us/public/screenshot_8a865781-4b36-4556-8f64-46e61f87a058.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4536&fp-y=0.9145&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Ongoing" />
</div>

<div><h3>20. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_c78fec68-dee6-40bc-89ff-81109b910838.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6589&fp-y=0.8706&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>21. Click on UCHL-???</h3>
<img src="https://images.tango.us/public/screenshot_1e8a80ef-cf77-4552-be6e-49cbd8cf2b4d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4427&fp-y=0.6020&fp-z=1.0350&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on UCHL-???" />
</div>

<div><h3>22. Click on Create</h3>
<img src="https://images.tango.us/public/screenshot_030ba596-f879-4d77-bb40-f63bcd97eb4f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6354&fp-y=0.9572&fp-z=2.7586&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Create" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/a77995d5-de64-4783-bb22-9b2b9572024a?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>


<h1><a href="https://app.tango.us/app/workflow/894ebda8-a664-4c31-92fc-8189505f5888?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Editing a Case </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/894ebda8-a664-4c31-92fc-8189505f5888?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Click on Edit</h3>
<img src="https://images.tango.us/public/screenshot_3c1d76d2-9898-4b53-a97c-21d0a007511f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7651&fp-y=0.2862&fp-z=3.0239&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Edit" />
</div>

<div><h3>3. Type "Child is not going to school father refused to listen to us "</h3>
<img src="https://images.tango.us/public/screenshot_4f778343-37f2-4963-915e-2321fd0b34d2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4766&fp-y=0.5329&fp-z=1.4701&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Child is not going to school father refused to listen to us &quot;" />
</div>

<div><h3>4. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_3d989fdb-5ef7-4df3-b7fd-ea90d01b6c69.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3828&fp-y=0.8783&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>5. Click on Medium</h3>
<img src="https://images.tango.us/public/screenshot_335afa6c-f639-4631-895b-1bda4e449195.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3391&fp-y=0.9583&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Medium" />
</div>

<div><h3>6. Click on Update</h3>
<img src="https://images.tango.us/public/screenshot_93e1ecce-c9d8-4515-ac14-1e10df65ba03.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6354&fp-y=0.9572&fp-z=2.7586&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Update" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/894ebda8-a664-4c31-92fc-8189505f5888?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>

<h1><a href="https://app.tango.us/app/workflow/894ebda8-a664-4c31-92fc-8189505f5888?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Editing a Case </a></h1>
<div><b>Date:</b> June 20, 2022</div>
<div><b>Author:</b> Nelson Adagi</div>
<div><b>Source:</b> <a href="https://app.tango.us/app/workflow/894ebda8-a664-4c31-92fc-8189505f5888?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank">Tango</a></div>
<hr/>


<div><h3>1. <a href="https://openchs.bitz-itc.com/helpline/" target="_blank">Go to Helpline</a></h3>
</div>

<div><h3>2. Click on Edit</h3>
<img src="https://images.tango.us/public/screenshot_3c1d76d2-9898-4b53-a97c-21d0a007511f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7651&fp-y=0.2862&fp-z=3.0239&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Edit" />
</div>

<div><h3>3. Type "Child is not going to school father refused to listen to us "</h3>
<img src="https://images.tango.us/public/screenshot_4f778343-37f2-4963-915e-2321fd0b34d2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4766&fp-y=0.5329&fp-z=1.4701&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Type &quot;Child is not going to school father refused to listen to us &quot;" />
</div>

<div><h3>4. Click on highlight</h3>
<img src="https://images.tango.us/public/screenshot_3d989fdb-5ef7-4df3-b7fd-ea90d01b6c69.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3828&fp-y=0.8783&fp-z=3.2215&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on highlight" />
</div>

<div><h3>5. Click on Medium</h3>
<img src="https://images.tango.us/public/screenshot_335afa6c-f639-4631-895b-1bda4e449195.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3391&fp-y=0.9583&fp-z=2.5397&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Medium" />
</div>

<div><h3>6. Click on Update</h3>
<img src="https://images.tango.us/public/screenshot_93e1ecce-c9d8-4515-ac14-1e10df65ba03.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6354&fp-y=0.9572&fp-z=2.7586&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A912" width="600" alt="Click on Update" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/894ebda8-a664-4c31-92fc-8189505f5888?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This workflow was created with Tango.</em></a>
</div>

