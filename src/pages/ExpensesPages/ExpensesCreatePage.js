import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { collection, Timestamp, addDoc, doc, getDoc } from 'firebase/firestore';

function EventCreatePage() {

  let { userId,eventId } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRef = doc(db, "user", userId);
      const userSnap = await getDoc(userRef);
      setUser(userSnap.data());

      const eventRef = doc(db, "event", eventId);
      const eventSnap = await getDoc(eventRef);
      
      const eventData = eventSnap.data()

      if (eventData.date) {
        eventData.date = eventData.date.toDate().toLocaleDateString();
      }
      
      setEvent(eventData);
    };
    fetchData();
  }, []);

  console.log(user, event);
  console.log(user.name, event.event_name);
  
  const [detail, setDetail] = useState('');
  const [value, setValue] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "expenses"), {
      detail: detail,
      value: value,
      created_at: Timestamp.now(),
      payment_states: "未払い",
      payyed_at: null,
      event_id: eventId,
      user_id: userId,
    })

    alert('申請しました。')
    navigate(-1);

  }
  

  return (
    <div className="max-w-4xl mx-auto p-8">
      <form
        onSubmit={handleSubmit}
        className="space-x-4 bg-white p-4 rounded-lg shadow border border-gray-300">
          
          <h2 className='text-center text-xl mb-2'>イベントの費用を登録</h2>
          <div>
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <label htmlFor="name" className="text-lg">名前</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input px-4 py-2 border border-gray-300 rounded-md"
              placeholder={user.name}
            />
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <label htmlFor="email" className="text-lg">イベント</label>
            <input
              type="text"
              id="event"
              name="event"
              className="form-input px-4 py-2 border border-gray-300 rounded-md"
              placeholder={event.event_name}
            />
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <label htmlFor="value" className="text-lg">価格</label>
            <input
              type="number"
              id="value"
              name="value"
              value={value}
              onChange={(e)=> setValue(e.target.value)}
              className="form-input px-4 py-2 border border-gray-300 rounded-md"
              placeholder="出費を入力"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <label htmlFor="detail" className="text-lg">説明</label>
            <textarea
              id="detail"
              name="detail"
              value={detail}
              onChange={(e)=> setDetail(e.target.value)}
              className="form-textarea px-4 py-2 border border-gray-300 rounded-md"
              placeholder="詳細を入力"
              rows="4" 
            ></textarea>
          </div>
          <div className="flex justify-center mb-3">
            <button
              type="submit"
              className="self-end px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              申請
            </button>
            <button className="w-1/6 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/expenses/index">戻る</Link>
            </button>
          </div>
        </form>
    </div>
  )
}

export default EventCreatePage;