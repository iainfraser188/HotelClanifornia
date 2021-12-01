import React, {useState, useEffect} from 'react';
import BookingForm from '../components/BookingForm';
import BookingsList from '../components/BookingsList';
import BookingsService from '../services/BookingsService';

export default function BookingsContainer() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    BookingsService.getBookings()
    .then(bookings => setBookings(bookings))
  }, [])

  return (
    <div>
      <p>Welcome to the Hotel Clanifornia!</p>
      <BookingForm />
      <BookingsList bookings={bookings} />
    </div>
  )
}
