import React, {useState} from 'react';

export default function BookingForm() {

  const [form, setForm] = useState({})

  const onChange = (event) => {
    form[event.target.id] = event.target.value;
    setForm(form);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    postBooking(form).then((data) => {})

  }
  return (
    <div>
        <form onSubmit={onSubmit}>
          <h2>Add a booking</h2>
          <label>Name</label>
          <input type="text"/>
          <label>Email</label>
          <input type="text"/>
          <label>Check in Status</label>
          <input type="text"/>
          <button type ="submit">Add Booking</button>
        </form>
    </div>
  )
}
