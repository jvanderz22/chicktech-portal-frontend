function jsonResponse(json, status = 200) {
  return [status, {"Content-Type": "application/vnd.api+json"}, JSON.stringify(json)];
}

export default new Pretender(function(){
  this.get('/announcements', function(){
    return jsonResponse(announcementsJson());
  });
  this.get('/events', function(){
    return jsonResponse(eventsJson());
  });
  this.get('/projects', function(){
    return jsonResponse(projectsJson());
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
