import { useState } from 'react'
import Header from './components/Header'
import IconNewBudget from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {
	const [budget, setBudget] = useState(0)
	const [budgetIsValid, setBudgetIsValid] = useState(false)
	const [modal, setModal] = useState(false)

	const handleNewBudget = () => {
		console.log('click to add a new expense');
		setModal(true)
	}

  return (
    <div>
			<Header
				budget={budget}
				setBudget={setBudget}
				budgetIsValid={budgetIsValid}
				setBudgetIsValid={setBudgetIsValid}
			/>

			{
				budgetIsValid && (
				<div className='nuevo-gasto'>
					<img
						src={IconNewBudget}
							alt='icon new budget'
							onClick={handleNewBudget}
					/>
					</div>
				)
			}

			{modal && (<Modal setModal={setModal} />)}


    </div>
  )
}

export default App
