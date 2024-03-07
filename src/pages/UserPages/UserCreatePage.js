import { React,useState,useEffect } from "react";
import Navbar from '../../components/Navbar';
import { doc, setDoc} from "firebase/firestore";
import db from "../../firebase"
import { Link,useNavigate } from "react-router-dom" 
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";


function UserCreatePage() {

    const [users, setUsers] = useState([{ name: "", email: "", role: "" }]);

    const navigate = useNavigate();
    const [registertionData, setRegistertionData] = useState(null);

    const ValidationEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleInputChange = (index, event) => {
        const newUsers = users.map((user, i) => {
            if (i !== index) return user;
            return { ...user, [event.target.name]: event.target.value };
        });
        setUsers(newUsers);
    };

    const handleAddFields = () => {
        setUsers([...users, { name: "", email: "", role: "" }]);
    };

    const handleRemoveFields = index => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
    };

    const generatePassword = () => {
        const length = 8;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };


    const registerUser = async (user) => {
        const auth = getAuth();
        const password = generatePassword(); // パスワード自動生成
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, password);
            const uid = userCredential.user.uid;

            await setDoc(doc(db, "user",uid), {
               ...user
            });

            return { uid, password }; 
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let PWs= [];
        let RegisterFlag = true;

        // console.log(RegisterFlag);

        for (const user of users) {
            if (!ValidationEmail(user.email)) {
                alert('有効なメールアドレスを入力してください');
                return;
            }

            const registrationResult = await registerUser(user);
            console.log(user);
            if (registrationResult) {
                console.log(`Registered ${user.email} with UID: ${registrationResult.uid},Passwprd: ${registrationResult.password}`);
                PWs.push(registrationResult.password);
            } else {
                RegisterFlag = false;
                break
            }
        }

        if (RegisterFlag) {
            setRegistertionData({ users, PWs });
            navigate('/user/confirm', { state: { users, PWs } });
        } else {
            alert("登録に失敗しました。")   
        }
        setUsers([{ name: "", email: "", role: "" }]); // フォームリセット
    };
    


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto p-8">
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow border border-gray-300">
                    {users.map((user, index) => (
                        <div key={index} className="flex space-x-4">
                            <input
                                required
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={event => handleInputChange(index, event)}
                                className="form-input px-4 py-2 border border-gray-300 rounded-md"
                                placeholder="Enter your name"
                            />
                            <input
                                required
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={event => handleInputChange(index, event)}
                                className="form-input px-4 py-2 border border-gray-300 rounded-md"
                                placeholder="Enter your email"
                            />
                            <select
                                required
                                name="role"
                                value={user.role}
                                onChange={event => handleInputChange(index, event)}
                                className="form-select px-4 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="一般">一般</option>
                                <option value="人事">人事</option>
                                <option value="会計">会計</option>
                                <option value="代表">代表</option>
                                <option value="引退">引退</option>
                            </select>
                            <button
                                type="button"
                                onClick={() => handleRemoveFields(index)}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-red-700"
                            >
                                削除
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddFields}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
                    >
                        追加
                    </button>
                    <button
                        type="submit"
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                        登録
                    </button>
                </form>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    <Link to="/user/index">戻る</Link>
                </button>
            </div>
        </div>
      );
}

export default UserCreatePage;