import { useEffect, useState } from 'react'
import Header from './components/Header'
import IconNewBudget from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { Expense } from './types/Expense';
import { generateId } from './helpers';
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';

function App() {

	const budgetInitialState = parseFloat(localStorage.getItem('budget') || '0')
	const expensesInitialState = JSON.parse(localStorage.getItem('expenses') || '[]')
	const [budget, setBudget] = useState(budgetInitialState)
	const [budgetIsValid, setBudgetIsValid] = useState(false)
	const [modal, setModal] = useState(false)
	const [animateModal, setAnimateModal] = useState(false)
	const [expenses, setExpenses] = useState<Expense[]>(expensesInitialState)
	const [expenseEdit, setExpenseEdit] = useState<Expense | null>(null)
	const [filter, setFilter] = useState('')
	const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([])

	useEffect(() => {
		if (expenseEdit) {
			openModalToEdit()
		}
	}, [expenseEdit])

	useEffect(() => {
		localStorage.setItem('budget', budget.toString())
	}, [budget])

	useEffect(() => {
		localStorage.setItem('expenses', JSON.stringify(expenses))
	}, [expenses])

	useEffect(() => {
		const budgetLS = parseFloat(localStorage.getItem('budget') || '0')
		if (budgetLS > 0) {
			setBudgetIsValid(true)
		}
	}, [])

	useEffect(() => {
		if (filter) {
			const filteredExpenses = expenses.filter(exp => exp.category === filter)
			setFilteredExpenses(filteredExpenses)
		}
	},[filter])

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
				setExpenses={setExpenses}
			/>

			{
				budgetIsValid && (
					<>
						<main>
							<Filters filter={filter} setFilter={setFilter} />
							<ExpenseList
								expenses={expenses}
								setExpenseEdit={setExpenseEdit}
								deleteExpense={deleteExpense}
								filter={filter}
								filteredExpenses={filteredExpenses}
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
