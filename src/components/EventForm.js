import React, { useState } from 'react';
import db from "../firebase";


function EventForm () {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('events').add({
        name: eventName,
        date: eventDate,
      });
      alert('イベントが追加されました！');
      // フォームをリセット
      setEventName('');
      setEventDate('');
    } catch (error) {
      console.error("エラーが発生しました：", error);
      alert('イベントの追加に失敗しました。');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventName">イベント名:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="eventDate">日付:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <button type="submit">イベントを追加</button>
    </form>
  );
};

export default EventForm;
