import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ExpensesTable from '../../components/ExpensesTable';

const ExpensesIndexPage = () => {
  // ユーザーデータのサンプル
  return (
    <div>
      <ExpensesTable></ExpensesTable>
    </div>
  );
};

export default ExpensesIndexPage;
