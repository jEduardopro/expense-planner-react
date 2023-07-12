import { Expense } from '../types/Expense';
import BudgetControl from './BudgetControl';
import NewBudget from './NewBudget'

type Props = {
	expenses: Expense[];
	budget: number;
	setBudget: (budget: number) => void;
	budgetIsValid: boolean;
	setBudgetIsValid: (isValid: boolean) => void;
}

const Header = ({expenses, budget, setBudget, budgetIsValid, setBudgetIsValid}: Props) => {
	return (
		<header>
			<h1>Expense Planner</h1>

			{
				budgetIsValid ? (
					<BudgetControl
						expenses={expenses}
						budget={budget}
					/>
				) : (
					<NewBudget
						budget={budget}
						setBudget={setBudget}
						setBudgetIsValid={setBudgetIsValid}
					/>
				)
			}

		</header>
	)
}

export default Header
