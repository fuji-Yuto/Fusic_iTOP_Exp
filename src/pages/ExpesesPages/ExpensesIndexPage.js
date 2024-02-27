import React from 'react';
import { Link } from 'react-router-dom';

function ExpensesIndexPage() {
    return (
        <div>
            <h1>イベントの一覧（新しい順）</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/show">詳細表示</Link>
            </button>


        </div>


  );
}

export default ExpensesIndexPage;