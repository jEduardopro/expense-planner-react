import { Expense as ExpenseItem } from '../types/Expense'
import Expense from './Expense'

type Props = {
	expenses: ExpenseItem[]
	setExpenseEdit: (expense: ExpenseItem | null) => void;
	deleteExpense: (id: string) => void;
}

const ExpenseList = ({expenses, setExpenseEdit, deleteExpense}: Props) => {
	return (
		<div className='listado-gastos contenedor'>
			<h2>{expenses.length ? 'Expenses' : 'No Expenses Yet'}</h2>

			{
				expenses.map(expense => (
					<Expense
						key={expense.id}
						expense={expense}
						setExpenseEdit={setExpenseEdit}
						deleteExpense={deleteExpense}
					/>
				))
			}
		</div>
	)
}

export default ExpenseList
