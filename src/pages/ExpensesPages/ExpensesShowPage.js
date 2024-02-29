import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function ExpensesShowPage() {
    return (
        <div>
            <Navbar></Navbar>
            <h1>会計情報の詳細確認</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/index">戻る</Link>
            </button>
        </div>


  );
}

export default ExpensesShowPage;