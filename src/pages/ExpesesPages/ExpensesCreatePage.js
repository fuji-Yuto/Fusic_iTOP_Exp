import React from 'react';
import { Link } from 'react-router-dom';


function EventCreatePage() {
  return (
    <div>
      <h1>会計申請</h1>;

      <p>いい感じにフォーム作る</p>
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

export default EventCreatePage;