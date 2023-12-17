
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    
}
    const [showForm, setShowForm] = useState(false)
    const startEditingHandler = () => {
        setShowForm((prevState) => {
            return prevState = !prevState
        });
    }
    return (
        <div className='new-expense'>
            {showForm && <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler} />}
            {(<button onClick={startEditingHandler}>{!showForm?'Add New Expense':'Close form'}</button>)}
            
    </div>
)
}

export default NewExpense;