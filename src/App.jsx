import React from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput..jsx';
import { useState } from "react"
import Results from './components/Results.jsx';

export default function App() {
  const [userInput, setUserInput] = useState({ initialInvestment: 1000, annualInvestment: 1200, expectedReturn: 6, duration: 40 })
  function handleChange(inputIdentefer, value) {
    setUserInput((prev) => {
        return {
            ...prev,
            [inputIdentefer]:+ value
        }
    })


}
  return (
    <>
    <Header/>
    <UserInput handleChange = {handleChange} userInput = {userInput}/>
    <Results input = {userInput}/>
    </>
  );
}

