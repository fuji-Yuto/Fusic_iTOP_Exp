import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function ExpensesEditPage() {
    return (
        <div>

            <h1>会計情報の修正</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/show">詳細表示</Link>
            </button>


        </div>


  );
}

export default ExpensesEditPage;