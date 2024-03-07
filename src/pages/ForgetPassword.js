import { React, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"

function ForgetPasswordPage() {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // フォームのデフォルト送信を防ぐ
        setMessage('');
        setError('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('パスワードリセットメールを送信しました。メールを確認してください。\n迷惑メールフォルダに送信されている可能性もあります。');
            })
            .catch((error) => {
                setError('パスワードリセットメールの送信に失敗しました。');
                console.error('Password reset error:', error);
            });
    };
  
    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    パスワード再設定
                </h2>
                <p className="mt-10 text-center font-bold leading-9 tracking-tight text-gray-900">
                    登録したメールアドレスに
                    パスワード再設定用のリンクを送信します
                </p>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            メールを送信
                        </button>
                    </div>
                </form>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}
  
export default ForgetPasswordPage; 