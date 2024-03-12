import React from 'react';
import { Link } from 'react-router-dom';
import EventForm from '../../components/EventForm'
import Navbar from '../../components/Navbar';

function EventCreatePage() {
  return (
    <div>     
      <h1>イベント名の追加</h1>

      <EventForm/>
    </div>
  )
}

export default EventCreatePage;