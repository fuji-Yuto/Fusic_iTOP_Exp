import React from 'react';
import { Link } from 'react-router-dom';
import EventForm from '../../components/EventForm'

function EventCreatePage() {
  return (
    <div>
      <h1>イベント名の追加</h1>;

      <EventForm/>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/event/index">発火用ボタン</Link>
      </button>

      
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/event/index">戻るボタン</Link>
      </button>
    </div>
  )
}

export default EventCreatePage;