import React, { useState, useReducer } from 'react';

import './ExpenseForm.css';

const formReducer = (state, action) => {
  if (action.type === 'FORM_INPUT') {
    return {
      title: action.title,
      amount: action.amount,
      date: action.date
  }
}
  
  return {
    title: '',
    amount: 'hello',
    date: ''
  }
}

const ExpenseForm = (props) => {

  const [formState, dispatchForm] = useReducer(formReducer, {
    title: '',
    amount: 'hello',
    date: ''
  })

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);
    dispatchForm({ type: 'FORM_INPUT', title: event.target.value });
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value)
    dispatchForm({ type: 'FORM_INPUT', amount: event.target.value });
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    dispatchForm({ type: 'FORM_INPUT', date: event.target.value });
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
    const submitHandler = (event) => {
    event.preventDefault();
    
        const expenseData = {
            title: formState.title,
            amount: formState.amount,
            date: new Date(formState.date)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')

    }
  //const { amount } = formState;
  return (
    <>
   
     amount {formState.amount}
    <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input value={formState.title} type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
                  <input
                      value={formState.amount}
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
                  <input
                      value={formState.date}
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      
      <div className='new-expense__actions'>
        <button  type='submit'>Add Expense</button>
      </div>
      </form>
       </>
     
  );
};

export default ExpenseForm;