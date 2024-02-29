import { useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs,query,orderBy,deleteDoc,doc } from "firebase/firestore";
import { Link } from 'react-router-dom';


function EventTable() {
  const [events, setEvent] = useState([]);
  
  useEffect(() => {
    const eventData = collection(db, "event");
    const q = query(eventData,orderBy("date","desc"))
    getDocs(q).then((snapShot) => {
      const events = snapShot.docs.map((doc) => {
        const docData = doc.data();
        const docId = doc.id;

        if (docData.date) {
          // console.log(data.date);
          docData.date = docData.date.toDate();
          docData.date = docData.date.toLocaleDateString();
        }
        return { ...docData, id: docId };
      });
      console.log(events);
      setEvent(events);
    });
  }, [])
  
  const deleteEvent = async (eventId) => {
    const isConfirmed = window.confirm("このイベントを削除してもよろしいですか？");
    if (isConfirmed) {
      const eventRef = doc(db, "event", eventId);
      await deleteDoc(eventRef);
      setEvent(events.filter(event => event.id !== eventId));
    }
  };

  return (
    <div class="container mx-auto">
      <table class="w-11/12 text-sm border border-solid border-black text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs border-b border-solid border-black text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" class=" border border-solid border-gray-300 px-6 py-1">id</th> */}
            <th scope="col" class=" border border-solid border-gray-300 px-6 py-1">イベント会場</th>
            <th scope="col" class=" border border-solid border-gray-300 px-6 py-1">実験テーマ</th>
            <th scope="col" class=" border border-solid border-gray-300 px-6 py-1">日時</th>
            <th scope="col" class=" border border-solid border-gray-300 px-6 py-1">ボタン</th>
          </tr>
        </thead>
        <tbody class="border-solid border-black border">
        {events.map((event) => (
          <tr calss="bg-white dark:bg-gray-800 dark:border-gray-700">
            {/* <td class="border border-solid border-gray-300 px-6 py-1">{event.id}</td> */}
            <td class="border border-solid border-gray-300 px-6 py-1">{event.event_name}</td>
            <td class="border border-solid border-gray-300 px-6 py-1">{event.theme}</td>
            <td class="border border-solid border-gray-300 px-6 py-1">{event.date}</td>
            <td class="border border-solid border-gray-300 px-6 py-1">
              <div class="container flex">
                <button class="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/expenses/create">申請</Link>
                </button>
                <button class="mr-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link key={event.id} to={`/event/edit/${event.id}`} >編集</Link>
                </button>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteEvent(event.id)}>
                    削除
                </button>
              </div>
            </td>
          </tr>
        ) )}
        </tbody>
      </table>
      
      

    </div>
  );
}

export default EventTable;
