import { React,useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import db from "../../firebase"
import { collection, getDocs, query } from "firebase/firestore";


function UserIndexPage() {
    
    const [users, setUser] = useState([]);
    
    useEffect(() => {
        const userdata = collection(db, 'user');
        const q = query(userdata)
        getDocs(q).then((snapShot) => {
            const users = snapShot.docs.map((doc) => {
                const docData = doc.data();
                const docId = doc.id;
                
                return { ...docData, id: docId };
            
            });
            setUser(users);
        });
        }
    )

    return (
            <div>

                <div className="flex justify-center mt-5">
                <div className="overflow-hidden rounded-lg shadow-lg max-w-4xl w-full mx-4">
                    <table className="min-w-full divide-y divide-x divide-gray-200 border border-gray-300 text-sm">
                    <thead className="bg-gray-200">
                        <tr>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">User\Item
                        </th>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                            メールアドレス
                        </th>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">役職</th>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {users.map((user, index) => (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">{user.email}</td>                                
                                <td className="px-6 py-4 whitespace-nowrap font-medium">{user.role}</td>
                            </tr>
                        ))}
                        <div className="text-center">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <Link to="/user/create">メンバ―登録</Link>
                            </button>
                        </div>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
    );
}

export default UserIndexPage;


