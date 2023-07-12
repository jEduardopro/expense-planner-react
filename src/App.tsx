import { useState } from 'react'
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

	const handleNewBudget = () => {
		console.log('click to add a new expense');
		setModal(true)
		
		setTimeout(() => {
			console.log('animando modal');
			setAnimateModal(true)
			
		}, 200);
	}

	const saveExpense = (expense: Expense) => {
		expense.id = generateId()
		expense.date = Date.now()
		setExpenses([...expenses, expense])

		setAnimateModal(false)
		setTimeout(() => {
			setModal(false)
		}, 200);
	}

  return (
    <div className={modal ? 'fijar' : ''}>
			<Header
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
				/>
			)
			}


    </div>
  )
}

export default App
