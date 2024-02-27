import { useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs,query,orderBy } from "firebase/firestore";
import { Link } from 'react-router-dom';


function EventTable() {
  const [events, setEvent] = useState([]);
  
  useEffect(() => {
    const eventData = collection(db, "event");
    const q = query(eventData,orderBy("date","desc"))
    getDocs(q).then((snapShot) => {
      const events = snapShot.docs.map((doc) => {
        const data = doc.data();

        if (data.date) {
          // console.log(data.date);
          data.date = data.date.toDate();
          data.date = data.date.toLocaleDateString();
        }
        return data;
      });
      console.log(events);
      setEvent(events);
    });
  },[] )

  return (
    <div className="EventTable">
      <table>
        <thead>
          <tr>
            <th>イベント会場</th>
            <th>実験テーマ</th>
            <th>日時</th>
            <th>編集ボタン</th>
          </tr>
        </thead>
        <tbody>
        {events.map((event) => (
          <tr>
            <td>{event.event_name}</td>
            <td>{event.theme}</td>
            <td>{event.date}</td>
            <td>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/event/edit">編集</Link>
              </button>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/expenses/create">会計申請</Link>
              </button>
            </td>
          </tr>
        ) )}
        </tbody>
      </table>

    </div>
  );
}

export default EventTable;
