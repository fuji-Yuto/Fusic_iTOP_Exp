import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

import EventsIndexPage from './pages/EventsPages/EventsIndexPage';
import EventsCreatePage from './pages/EventsPages/EventsCreatePage';
import EventsEditPage from './pages/EventsPages/EventsEditPage';

import ExpensesIndexPage from './pages/ExpensesPages/ExpensesIndexPage';
import ExpensesCreatePage from './pages/ExpensesPages/ExpensesCreatePage';
import ExpensesEditPage from './pages/ExpensesPages/ExpensesEditPage';
import ExpensesShowPage from './pages/ExpensesPages/ExpensesShowPage';

function App() {

  return (
    <Router>
     {/* ルートの設定 */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/event/index" element={<EventsIndexPage />} />
        <Route path="/event/create" element={<EventsCreatePage />} />
        <Route path="/event/edit" element={<EventsEditPage />} />
      
        <Route path="/expenses/index" element={<ExpensesIndexPage />} />
        <Route path="/expenses/create" element={<ExpensesCreatePage />} />
        <Route path="/expenses/show" element={<ExpensesShowPage />} />
        <Route path="/expenses/edit" element={<ExpensesEditPage />} />
        
      </Routes>


    </Router>
  );
}

export default App;
