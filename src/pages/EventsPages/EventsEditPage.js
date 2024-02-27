import React from 'react';
import { Link } from 'react-router-dom';

function EventEditPage() {
    return (
        <div>
            < h1 > イベント名の編集</h1 >

            <p>現在のイベント情報を載せる</p>

            <p>
                ここに編集内容を記入（現在、簡単のためtextareaで代替）
            </p>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/index">発火用ボタン</Link>
            </button>

            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/event/index">戻るボタン</Link>
            </button>
    
        </div>

    )
}

export default EventEditPage;