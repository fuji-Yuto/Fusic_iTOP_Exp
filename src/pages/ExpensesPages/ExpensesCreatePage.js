import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

function EventCreatePage() {

  let { userId,eventId } = useParams();

  const [user, setUser] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRef = doc(db, "user", userId);
      const userSnap = await getDoc(userRef);
      setUser(userSnap.data());
    

      const eventRef = doc(db, "event", eventId);
      const eventSnap = await getDoc(eventRef);
      setEvent(eventSnap.data());
    };
    fetchData();
  }, []);

  console.log(user, event);
  console.log(user.name,event.event_name);
  
  

  return (
    <div className="max-w-4xl mx-auto p-8">
        <form className="flex space-x-4 bg-white p-4 rounded-lg shadow border border-gray-300">
          <div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="self-end px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
    </div>
  )
}

export default EventCreatePage;