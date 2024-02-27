import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/index">申請</Link>
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/expenses/index">閲覧</Link>
            </button>
        </div>
  );
}

export default HomePage;