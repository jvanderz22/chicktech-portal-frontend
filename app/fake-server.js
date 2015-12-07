import Pretender from 'pretender'

function jsonResponse(json, status = 200) {
  return [status, {"Content-Type": "application/vnd.api+json"}, JSON.stringify(json)];
}

export default new Pretender(function(){
  this.get('/announcements', function(){
    return jsonResponse(announcementsJson());
  });
  this.get('/announcements/:id', function(req){
    var json = announcementsJson();
    var announcement = json.data.findBy('id', req.params.id);
    return jsonResponse({data: announcement});
  });
  this.get('/events', function(){
    return jsonResponse(eventsJson());
  });
  this.get('/events/:id', function(req){
    var json = eventsJson();
    var event = json.data.findBy('id', req.params.id);
    return jsonResponse({data: event});
  });
  this.get('/projects', function(){
    return jsonResponse(projectsJson());
  });
  this.post('/projects', function(req){
    var requestBody = JSON.parse(req.requestBody);
    requestBody.data.id = Math.floor((Math.random() * 100) + 10);
    return jsonResponse(requestBody, 201)
  });
  this.get('/projects/:id', function(req){
    var json = projectsJson();
    var project = json.data.findBy('id', req.params.id);
    return jsonResponse({data: project});
  });
  this.patch('/projects/:id', function(req){
    //ehh close enough
    return jsonResponse(JSON.parse(req.requestBody))
  });
  this.get('/users/:id', function(req){
    var json = usersJson();
    var user = json.data.findBy('id', req.params.id);
    return jsonResponse({data: user});
  });
  this.post("/sessions", function(){
    return jsonResponse(sessionJson());
  });
  this.get("/sessions", function(){
    return jsonResponse(sessionJson());
  });
});

function eventsJson(){
  return {
    data: [
      {
        "id": "1",
        "type": "event",
        "attributes": {
          "date": "10/12/2015",
          "description": "example description",
          "title": "New Event",
        }
      },
      {
        "id": "2",
        "type": "event",
        "attributes": {
          "date": "10/15/2015",
          "description": "super fun event",
          "title": "Let's have fun!",
        }
      }
    ]
  };
}

function projectsJson(){
  return {
    data: [
      {
        "id": "1",
        "type": "project",
        "attributes": {
          "description": "example description",
          "end_date": "10/12/2015",
          "project_coordinator": "Jane Smith",
          "start_date": "10/12/2015",
          "title": "New Project",
          "volunteers_needed": 9,
          "volunteers_registered": 3
        },
        "links": {
          "self": "projects/1"
        },
        "relationships": {
          "volunteers": {
            "links": {
              "self": "/articles/1/relationships/volunteers"
            },
            "data": [
              { "type": "user", "id": 1 },
              { "type": "user", "id": 2 }
            ]
          }
        }
      },
      {
        "id": "2",
        "type": "project",
        "attributes": {
          "description": "Ongoing High School Mentorship program",
          "end_date": "9/1/2015",
          "project_coordinator": "Jane Smith",
          "start_date": "12/12/2015",
          "title": "High School Mentorship",
          "volunteers_needed": 23,
          "volunteers_registered": 22
        },
        "links": {
          "self": "/projects/2"
        },
        "relationships": {
          "volunteers": {
            "data": [
              { "type": "user", "id": "2" }
            ]
          }
        }
      }
    ]
  };
}

function announcementsJson(){
  return {
    data: [
      {
        "id": "1",
        "type": "announcement",
        "attributes": {
          "title": "help needed!",
          "text": "help needed this saturday for an event - let me know if you can make it!"
        },
        "relationships": {
          "project": {
            "data": {
              "type": "project",
              "id": 2
            }
          }
        }
      },
      {
        "id": "2",
        "type": "announcement",
        "attributes": {
          "title": "Welcome new volunteers!",
          "text": "Please welcome all of our new volunteers - we're so excited to have them join us!"
        }
      }
    ]
  };
}

function sessionJson(){
  return {
    data: {
      "type": "sessions",
      "id": "abc123",
      "attributes": {
        "token": "abc123"
      },
      "relationships": {
        "user":  {
          "type": "users",
          "id": "1"
        }
      }
    }
  };
}

function usersJson(){
  return {
    data: [
      {
        "id": "1",
        "type": "user",
        "attributes": {
          "bio": "Hi! I'm a software engineer with Enova.",
          "email": "abc@123.com",
          "first_name": "Jordan",
          "last_name": "VanderZwaag",
          "location": "Chicago",
          "phone_number": "612-123-1231",
          "role": "admin"
        },
        "links": {
          "self": "/users/1"
        }
      },
      {
        "id": "2",
        "type": "user",
        "attributes": {
          "bio": "Hi! I'm a software engineer no longer with Enova.",
          "email": "gef@123.com",
          "first_name": "Katie",
          "last_name": "Schilling",
          "location": "Chicago",
          "phone_number": "611-123-1231",
          "role": "volunteer"
        },
        "links": {
          "self": "/users/2"
        }
      }
    ]
  };
}

function volunteerObligationJson(){
  return {
    data: [
      {
        "id": "1",
        "type": "volunteer_obligation",
        "attributes": {
          "start_time": "08/07/2015",
          "end_time": "11/03/2015"
        },
        "relationships": {
          "project": {
            "data": {
              "type": "project",
              "id": 2
            }
          },
          "user": {
            "data": {
              "type": "user",
              "id": 1
            }
          }
        }
      },
      {
        "id": "2",
        "type": "volunteer_obligation",
        "attributes": {
          "start_time": "11/03/2015",
          "end_time": "11/03/2015"
        },
        "relationships": {
          "event": {
            "data": {
              "type": "event",
              "id": 1
            }
          },
          "user": {
            "data": {
              "type": "user",
              "id": 1
            }
          }
        }
      }
    ]
  };
}
