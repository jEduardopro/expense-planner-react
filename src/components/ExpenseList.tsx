import { Expense as ExpenseItem } from '../types/Expense'
import Expense from './Expense'

type Props = {
	expenses: ExpenseItem[]
	setExpenseEdit: (expense: ExpenseItem | null) => void;
	deleteExpense: (id: string) => void;
	filter: string;
	filteredExpenses: ExpenseItem[];
}

const ExpenseList = ({expenses, setExpenseEdit, deleteExpense, filter, filteredExpenses}: Props) => {
	return (
		<div className='listado-gastos contenedor'>

			{
				filter ? (
					<>
						<h2>{filteredExpenses.length ? 'Expenses' : `No Expenses by ${filter}`}</h2>
						
						{filteredExpenses.map(expense => (
							<Expense
								key={expense.id}
								expense={expense}
								setExpenseEdit={setExpenseEdit}
								deleteExpense={deleteExpense}
							/>
						))}
					</>
				) : (
						<>
							<h2>{expenses.length ? 'Expenses' : 'No Expenses Yet'}</h2>
							
							{expenses.map(expense => (
								<Expense
									key={expense.id}
									expense={expense}
									setExpenseEdit={setExpenseEdit}
									deleteExpense={deleteExpense}
								/>
							))}
						</>
				)
			}
		</div>
	)
}

export default ExpenseList
