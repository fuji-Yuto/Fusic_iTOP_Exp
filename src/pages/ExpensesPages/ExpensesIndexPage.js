import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const ExpensesIndexPage = () => {
  // ユーザーデータのサンプル
  const users = [
    { id: 1, values: ['value(1,1)', 'value(1,2)', ''] },
    { id: 2, values: ['value(2,1)', 'value(2,2)', ''] },
    { id: 3, values: ['value(3,1)', 'value(3,2)', ''] },
    { id: 4, values: ['value(4,1)', 'value(4,2)', ''] },
  ];

    return (
        <div>
        <Navbar></Navbar>    
        <div className="flex justify-center mt-5">
        <div className="overflow-hidden rounded-lg shadow-lg max-w-4xl w-full mx-4">
            <table className="min-w-full divide-y divide-x divide-gray-200 border border-gray-300 text-sm">
            <thead className="bg-gray-200">
                <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">User\Item</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Item 1</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Item 2</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Item 3</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {users.map((user, index) => (
                <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">User {user.id}</td>
                    {user.values.map((value, valueIndex) => (
                    <td key={valueIndex} className="px-6 py-4 whitespace-nowrap">{value}</td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
      </div>
  );
};

export default ExpensesIndexPage;
