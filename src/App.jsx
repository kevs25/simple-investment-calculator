import { useState } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInput(inputIdentifer, newValue) {
    setUserInput((prevValues) => {
        return {
            ...prevValues, 
            [inputIdentifer] : +newValue
        }
    })
  }

  return (
    <>
      <HeaderComponent />
      <UserInput onChangeInput={handleInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please Enter duration greater than zero. </p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
