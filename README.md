# rabbies_backend
Rabbies Tour Backend MERN Stack



# cretae_Tour_API  POST
http://localhost:5000/booktour
#Body
{
	"title": "Tour 6 from DB",
    "adults": "1",
    "childrens": "2",
    "seniors": "3",
    "students": "4",
    "leavingOn":"2022-01-01",
    "cost": "10",
    "image":""
}

#GET_ALL_TOURS_API  GET

http://localhost:5000/api/booktour

#GET_TOUR_BY_ID  GET
http://localhost:5000/api/booktour/62ef857755a396cd0f587baa

#UPDATE_TOUR_API   PUT
#http://localhost:5000/api/booktour/id
http://localhost:5000/api/booktour/62e7d7db1bdc3468d5e808e0
#Body
{
	"title": "Tour 6 from DB",
    "adults": "1",
    "childrens": "2",
    "seniors": "3",
    "students": "4",
    "leavingOn":"2022-01-01",
    "cost": "10",
    "image":""
}

#DELETE_TOUR_BY_ID  DELETE
#http://localhost:5000/api/booktour/id
http://localhost:5000/api/booktour/62ef8833c6844d337e46c5eb


---------------------------------------------------------------------------------------

CREATE_CONTACT_US  POST
http://localhost:5000/api/contactus
#BODY
{
	"fullName": "Hamza Hashmi",
    "email":"hamzahashmi04@gmail.com",
    "message":"hi i want to book a tour"
}

GET_ALL_CONTACTS   GET

http://localhost:5000/api/contactus

GET_CONTACT_BY_ID  GET
http://localhost:5000/api/contactus/id

UPDATE_CONTACT  PUT
http://localhost:5000/api/contactus/id
#BODY
{
	"fullName": "Hamza Hashmi",
    "email":"hamzahashmi04@gmail.com",
    "message":"hi i want to book a tour"
}

DELETE_CONTACT
http://localhost:5000/api/contactus/id

-----------------------------------------------------------------------------------------

CREATE_PRIVATE_TOURS POST

http://localhost:5000/api/privateTours
#BODY
{
	"emailAdress":"HAMZAHASHMI04@GMAIL.COM",
    "yourname":"HAMZA HASHMI",
    "numberofAdults":"3",
    "numberofChildrens":"3",
    "startPoint":"lahore",
    "finishPoint":"islamabad",
    "startDate": "2022-01-01",
    "finishDate": "2022-02-02",
    "Describe":"i need a tour"
}

GET ALL PRIVATE TOURS  GET
http://localhost:5000/api/privateTours

GET_PRIVATE_TOURS_BY_ID
http://localhost:5000/api/privateTours/id

UPDATE_PRIVATE_TOUR   PUT
http://localhost:5000/api/privateTours/id
#BODY
{
	"emailAdress":"HAMZAHASHMI04@GMAIL.COM",
    "yourname":"HAMZA HASHMI",
    "numberofAdults":"3",
    "numberofChildrens":"3",
    "startPoint":"lahore",
    "finishPoint":"islamabad",
    "startDate": "2022-01-01",
    "finishDate": "2022-02-02",
    "Describe":"i need a tour"
}


DELETE_PRIVATE_TOUR   DELETE
http://localhost:5000/api/privateTours/id


-----------------------------------------------------------------------------------------------
CREATE_TOUR_DETAIL
SAME AS ABOVE


