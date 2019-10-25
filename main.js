// Create a Room
function createRoom(
  room,
  subject,
  date,
  time,
  occupants,
  capacity,
  privacy = 'Open',
  join = false
) {
  newRoom = {
    room,
    subject,
    date,
    time,
    occupants,
    capacity,
    privacy,
    join
  };
  addRoomToList(newRoom);
  joinRoom(newRoom);
  return;
}

// Add Room to the List of Rooms
function addRoomToList(room) {
  rooms.push(room);
}

// Join the Room
function joinRoom(room) {
  room.join = true;
  if (room.occupants >= room.capacity - 1) {
    room.privacy = 'Full';
  }
  room.occupants += 1;
}

// TODO: Change privacy if occupants == capacity, remove 1 from occupants, set join to false
function leaveRoom(room) {
  //...
}

// List of available rooms
var rooms = [
  {
    room: 'Love 101',
    subject: 'CSCE 421',
    date: '10/15/19',
    time: '2:00 P.M.',
    occupants: 3,
    capacity: 5,
    privacy: 'Open',
    join: false
  },
  {
    room: 'Love 103',
    subject: 'CSCE 155E',
    date: '10/15/19',
    time: '2:00 P.M.',
    occupants: 2,
    capacity: 4,
    privacy: 'Open',
    join: false
  },
  {
    room: 'Love 110',
    subject: 'JGEN 200',
    date: '10/15/19',
    time: '6:15 P.M.',
    occupants: 1,
    capacity: 7,
    privacy: 'Open',
    join: false
  }
];

// List of reservations
var reservations = [];

// How it would look to create a room...
const room1 = createRoom('Love 105', 'CHEM 109', '10/15/19', '8:15 P.M.', 3, 6);
console.log(rooms);

var columns = [
  'room',
  'subject',
  'date',
  'time',
  'occupants',
  'capacity',
  'privacy',
  'join'
];

// TODO: Add the "remove" button for the reservations
window.addEventListener('DOMContentLoaded', event => {
  // Finds the table in the HTML after the DOM is loaded
  var table = document.querySelector('#reservation-table');

  // Filters the rooms to only get the rooms joined
  reservations = rooms.filter(room => {
    return room.join == true;
  });

  // Loops through the reservations and displays them
  for (var i = 0; i < reservations.length; i++) {
    var row = table.insertRow(-1);
    for (var j = 0; j < columns.length - 1; j++) {
      var cell = row.insertCell(-1); // -1 is insert as last
      cell.className = columns[j].toString(); //
      cell.innerHTML = reservations[i][columns[j]];
    }
  }
});
