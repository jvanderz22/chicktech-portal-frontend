function jsonResponse(json, status = 200) {
  return [status, {"Content-Type": "application/vnd.api+json"}, JSON.stringify(json)];
}

export default new Pretender(function(){
  this.get('api/events', function(){
    return jsonResponse(eventsJson());
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
          "title": "New Event!",
          "volunteers_needed": 10,
          "volunteers_registered": 3
        }
      },
      {
        "id": "2",
        "type": "event",
        "attributes": {
          "date": "10/15/2015",
          "description": "super fun event",
          "title": "Let's have fun!",
          "volunteers_needed": 12,
          "volunteers_registered": 8
        }
      }
    ]
  }
}
