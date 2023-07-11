import { useState } from 'react'
import Header from './components/Header'

function App() {
	const [budget, setBudget] = useState(0)
	const [budgetIsValid, setBudgetIsValid] = useState(false)

  return (
    <div>
			<Header
				budget={budget}
				setBudget={setBudget}
				budgetIsValid={budgetIsValid}
				setBudgetIsValid={setBudgetIsValid}
			/>
    </div>
  )
}

export default App
