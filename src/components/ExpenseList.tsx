import { Expense as ExpenseItem } from '../types/Expense'
import Expense from './Expense'

type Props = {
	expenses: ExpenseItem[]
}

const ExpenseList = ({expenses}: Props) => {
	return (
		<div className='listado-gastos contenedor'>
			<h2>{expenses.length ? 'Expenses' : 'No Expenses Yet'}</h2>

			{
				expenses.map(expense => (
					<Expense key={expense.id} expense={expense} />
				))
			}
		</div>
	)
}

export default ExpenseList
