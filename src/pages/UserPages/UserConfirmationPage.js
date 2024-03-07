import React from 'react';
import { useLocation } from 'react-router-dom';

function UserConfirmationPage() {
    const location = useLocation();
    const { users, PWs } = location.state || {};
    
    return (
        <div>
        <h2>登録内容確認</h2>
        {users && users.map((user, index) => (
            <div key={index}>
            <p>名前: {user.name}</p>
            <p>メール: {user.email}</p>
            <p>役職: {user.role}</p>
            <p>パスワード: {PWs[index]}</p>
            </div>
        ))}
        </div>
    );
}

export default UserConfirmationPage;