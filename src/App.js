import React from 'react';
// import logo from './logo.svg';
import UserList from './components/UsersList/index';
import Counter from './components/Counter';
import Users from './IncomeData/index';
import './App.css';

function App() {
  return (
    <div className="Container">
      <Counter label="PRESS ME"/>
      <UserList name={Users} />
    </div>
  );
}

export default App;
