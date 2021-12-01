use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Donald Duck",
    email: "donaldhunt74@gmail.com",
    status: "checked-in"
  },
  {
    name: "Karen Hugh",
    email: "karen88@yahoo.com",
    status: "checked-in"
  },
  {
    name: "Kyle Smith",
    email: "smitthy111@gmail.com",
    status: "checked-in"
  },

]);