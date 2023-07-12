import { useEffect, useState } from 'react'
import Header from './components/Header'
import IconNewBudget from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { Expense } from './types/Expense';
import { generateId } from './helpers';
import ExpenseList from './components/ExpenseList';

function App() {
	const [budget, setBudget] = useState(0)
	const [budgetIsValid, setBudgetIsValid] = useState(false)
	const [modal, setModal] = useState(false)
	const [animateModal, setAnimateModal] = useState(false)

	const [expenses, setExpenses] = useState<Expense[]>([])

	const [expenseEdit, setExpenseEdit] = useState<Expense | null>(null)

	useEffect(() => {
		if (expenseEdit) {
			openModalToEdit()
		}
	}, [expenseEdit])

	const openModalToEdit = () => {
		setModal(true)
		setTimeout(() => {
			setAnimateModal(true)
		}, 200);
	}

	const handleNewBudget = () => {
		setModal(true)
		setExpenseEdit(null)
		
		setTimeout(() => {
			setAnimateModal(true)
			
		}, 200);
	}

	const saveExpense = (expense: Expense) => {

		if (expense.id) {
			const expensesUpdated = expenses.map(exp => exp.id === expense.id ? expense : exp)
			setExpenses(expensesUpdated)
			setExpenseEdit(null)
		} else {
			expense.id = generateId()
			expense.date = Date.now()
			setExpenses([...expenses, expense])
		}

		setAnimateModal(false)
		setTimeout(() => {
			setModal(false)
		}, 200);
	}

	const deleteExpense = (id: string) => {
		setExpenses(expenses.filter(exp => exp.id !== id))
	}

  return (
    <div className={modal ? 'fijar' : ''}>
			<Header
				expenses={expenses}
				budget={budget}
				setBudget={setBudget}
				budgetIsValid={budgetIsValid}
				setBudgetIsValid={setBudgetIsValid}
			/>

			{
				budgetIsValid && (
					<>
						<main>
							<ExpenseList
								expenses={expenses}
								setExpenseEdit={setExpenseEdit}
								deleteExpense={deleteExpense}
							/>
						</main>
						<div className='nuevo-gasto'>
							<img
								src={IconNewBudget}
									alt='icon new budget'
									onClick={handleNewBudget}
							/>
						</div>

					</>
				)
			}

			{modal && (<Modal
					setModal={setModal}
					animateModal={animateModal}
					setAnimateModal={setAnimateModal}
					saveExpense={saveExpense}
					expenseEdit={expenseEdit}
					setExpenseEdit={setExpenseEdit}
				/>
			)
			}


    </div>
  )
}

export default App
