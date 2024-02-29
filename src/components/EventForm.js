import React, { useState } from 'react';
import db from "../firebase";
import { Link } from "react-router-dom";
import { doc, setDoc,collection ,addDoc,Timestamp } from "firebase/firestore"; 


function EventForm () {

  const [eventName, setEventName] = useState('');
  const [theme, setTheme] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "event"), {
      event_name: eventName,
      theme: theme,
      date: Timestamp.fromDate(new Date(date)),
    })

    alert('以下の内容を登録しました\nイベント名:'+eventName+'\n実験テーマ:'+theme+'\n日付:'+date)
 
    // フォーム送信後は、フォームのフィールドをクリアするなどの後処理
  }


  return (
    
    <div className="w-4/5 bg-gray-200 mx-auto border border-solid border-brack" >
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mb-5">
          <label htmlFor="eventName" className="mr-4 block text-sm font-medium text-gray-900 dark:text-white">
            イベント名
          </label>
          <input required type="text" value={eventName} id="eventName" onChange={(e) => setEventName(e.target.value)}
            className="block w-1/2  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="flex justify-center items-center mb-5">
          <label htmlFor="theme" className=" block text-sm font-medium text-gray-900 dark:text-white">
            実験テーマ
          </label>
          <input required type="text" value={theme} id="theme" onChange={(e) => setTheme(e.target.value)}
            className="ml-4 block w-1/2  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="date" className="ml-4 block text-sm font-medium text-gray-900 dark:text-white">
            日付
          </label>
          <input required type="date" value={date} id="date" onChange={(e) => setDate(e.target.value)}
            className="ml-10 block w-1/2  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mt-5 flex justify-center" >
          <button type="submit"className="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            登録
          </button>
        </div>
      </form>
          <button className="w-1/6 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/event/index">戻る</Link>
          </button>

    </div>
  );
};

export default EventForm;
