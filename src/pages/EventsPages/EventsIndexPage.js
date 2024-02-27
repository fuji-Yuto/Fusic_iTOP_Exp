import React from 'react';
import EventTable from '../../components/EventTable';
import { Link } from 'react-router-dom';

function EventsIndexPage() {
    return (
        <div>
            <h1>イベントの一覧（新しい順）</h1>
            <EventTable/>
        
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/create">新しいイベントの追加</Link>
            </button>


        </div>


  );
}

export default EventsIndexPage;