import React from 'react';
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import IncomeExpenses from "./Components/IncomeExpenses"
import './App.css';
import TransactionList from './Components/TransactionList';
import AddTransactionList from './Components/AddTransactionList';
import GlobalProvider from "./Context/GlobalState"
function App() {
  return (<GlobalProvider>
    <div className="App">
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransactionList/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
