import React from 'react';
import Booking from './Booking';

  const BookingsList = ({bookings}) => {
  const bookingItem=bookings.map((booking)=>{
    return (
      <div>
        <Booking booking={booking} key={booking.id}/>
        <button>Delete</button>
      </div>
    )
 });
  return(
   <>
    {bookingItem}
   </>
 )

}

export default BookingsList
