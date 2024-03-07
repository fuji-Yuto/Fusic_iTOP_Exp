import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LogOutButton() {
    
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        signOut(auth).then(() => {
            alert("ログアウトしました。");
            navigate('/');
        }).catch((error) => {
            alert("ログアウトできませんでした")
        });
    }

    return (
        <button onClick={ handleLogout } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            ログアウト
        </button>
    );
}

export default LogOutButton;