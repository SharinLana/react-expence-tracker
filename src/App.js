import { useState } from "react";
import InputMain from "./components/IncomingData/InputMain";
import ExpensesMain from "./components/OutcomingData/Expenses/ExpensesMain";
import { data } from './data';



function App() {
  const [userInput, setUserInput] = useState(data);

  const getUserInput = (object) => {
    setUserInput(prevState => {
      return [object, ...userInput]
    });
  };

  return (
    <div>
      <InputMain data={data} getUserInput={getUserInput}/>
      <ExpensesMain userInput={userInput}/>
    </div>
  );
}

export default App;
