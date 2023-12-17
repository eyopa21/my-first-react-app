
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
function ExpensesList(props) {

let expensesContent = <h2 className='expenses-list__fallback'>No expenses found</h2>
    if (props.filteredExpenses.length > 0) {
        expensesContent = props.filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }
    return (
        <div>
            {expensesContent}
        </div>
    )
}
export default ExpensesList