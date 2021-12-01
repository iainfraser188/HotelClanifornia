import React from 'react';
// import { useState } from 'react';

export default function Booking({booking}) {

  return (
    <div>

      <h1>{Booking.name}</h1>
      <h3>{Booking.email}</h3>
      <h3>{booking.status}</h3>
      <details>
        <summary>Edit Booking</summary>
        <form>
          <h2>Edit Booking</h2>
          <label>Name</label>
          <input type="text"/>
          <label>Email</label>
          <input type="text"/>
          <label>Check in Status</label>
          <input type="text"/>
          <button type ="submit">Add Booking</button>
        </form>
      </details>



    </div>
  )
}
