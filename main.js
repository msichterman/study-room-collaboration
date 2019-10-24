// NEED A WAY TO ADD AN ID
function createRoom(room, subject, date, time, people, join = false) {
  return {
    room,
    subject,
    date,
    time,
    people,
    join
  };
}

function addRoomToList(room) {
  rooms.push(room);
}

function joinRoom(room) {
  room.join = true;
}

// List of available rooms
var rooms = [
  {
    room: 'Love 101',
    subject: 'CSCE 421',
    date: '10/15/19',
    time: '2:00 P.M.',
    people: '3/5',
    join: false
  },
  {
    room: 'Love 103',
    subject: 'CSCE 155E',
    date: '10/15/19',
    time: '2:00 P.M.',
    people: '2/4',
    join: false
  },
  {
    room: 'Love 110',
    subject: 'JGEN 200',
    date: '10/15/19',
    time: '6:15 P.M.',
    people: '1/7',
    join: false
  }
];

// List of reservations
var reservations = [];

const room1 = createRoom(
  'Love 105',
  'CHEM 109',
  '10/15/19',
  '8:15 P.M.',
  '3/6'
);

joinRoom(room1);
addRoomToList(room1);
console.log(rooms);
