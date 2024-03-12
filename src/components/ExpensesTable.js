import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc,query,orderBy } from 'firebase/firestore';
import db from '../firebase';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function ExpensesTable() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [expenses, setExpenses] = useState([]);

    const { currentUser, CurrentUserData } = useAuth(); 
    console.log(currentUser.uid);
    
    useEffect(() => {
        const fetchData = async () => {

            // userの取得
            const usersSnap = await getDocs(collection(db, 'user'));
            const fetchedUsers = usersSnap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            const sortedUsers = [
                fetchedUsers.find(user => user.id === currentUser.uid),
                ...fetchedUsers.filter(user => user.id !== currentUser.uid)
            ].filter(user => user !== undefined); 
            setUsers(sortedUsers);
            
            // イベントの取得
            const EventRef = collection(db, "event");
            const EventQuery = query(EventRef, orderBy("date", "desc"));
            const eventsSnap = await getDocs(EventQuery);
            setEvents(eventsSnap.docs.map((doc) => {
                const docData = doc.data();
                const docId = doc.id;
                if (docData.date) {
                docData.date = docData.date.toDate();
                docData.date = docData.date.toLocaleDateString();
                }
                return { ...docData, id: docId }
            }));
            
            
            // 歳入の取得
            const expensesSnap = await getDocs(collection(db, 'expenses'));
            setExpenses(expensesSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));    
            console.log(expenses);
        };
      
        fetchData();
      }, [currentUser.uid]); 
  // データ取得ここまで 
  
  const navigate = useNavigate(); // ナビゲーション関数の取得

  // ボタンクリックで呼び出される関数
  const handleNavigateToExpenseCreate = (userId, eventId) => {
    navigate(`/expenses/create/${userId}/${eventId}`);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="text-sm font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b">
              <th className="px-4 py-3">User / Event</th>
                  {events.map(event =>
                    <th key={event.id} className="px-4 py-3">
                          <p>{event.event_name}</p>
                          <p className='font-light text-xs'>{ event.theme}</p>
                          <p className='font-light text-xs'>{ event.date}</p>
                    </th>)}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}  className={`text-gray-700 ${user.id === currentUser.uid ? 'border-4 border-blue-500' : 'border'}`} >
                <td className="px-4 py-3 border">{user.name}</td>
                {events.map(event => {
                  const expense = expenses.find(e => e.user_id === user.id && e.event_id === event.id);
                  return (
                    // <td key={event.id} className="px-4 py-3 border" onClick={() => handleOpenModal(user.id, event.id)}>
                    <td key={event.id} className="px-4 py-3 border" >
                      <p>
                        {expense ? expense.value : '0'}
                      </p>
                      <button onClick={() => handleNavigateToExpenseCreate(user.id, event.id)}>
                        Edit
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={handleCloseModal}>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Expense</h3>
              <div className="mt-2">
                <input
                  type="number"
                  className="mt-2 px-3 py-2 border rounded-md"
                  value={currentExpense.amount}
                  onChange={e => setCurrentExpense({ ...currentExpense, amount: Number(e.target.value) })}
                />
              </div>
              <div className="items-center px-4 py-3">
                <button
                  className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700"
                  onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ExpensesTable;