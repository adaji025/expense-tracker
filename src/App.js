import "./App.css";
import Header from "./compnents/Header/Header";
import Balance from "./compnents/Balance/Balance";
import IncomeExpense from "./compnents/IncomeExpense/IncomeExpense";
import { GlobalProvider } from "./contexts/GlobalState";
import AddTransaction from "./compnents/AddTransaction/AddTransaction";
import TransactionList from "./compnents/TransactionList/TransactionList";

function App() {
  return (
    <div className="App">
      <div className="header">
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionList />
        <IncomeExpense />
        <AddTransaction />
      </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
