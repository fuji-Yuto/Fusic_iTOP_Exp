import React from 'react';
import EventTable from '../../components/EventTable';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function EventsIndexPage() {
    return (
        <div>
            <Navbar></Navbar>
            <h1>イベントの一覧（新しい順）</h1>
            <EventTable />

            <div class="mx-auto container">
                <button class="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/event/create">新しいイベントの追加</Link>
                </button>
            </div>


        </div>


  );
}

export default EventsIndexPage;