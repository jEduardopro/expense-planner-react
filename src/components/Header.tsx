import NewBudget from './NewBudget'

type Props = {
	budget: number;
	setBudget: (budget: number) => void;
}

const Header = ({budget, setBudget}: Props) => {
	return (
		<header>
			<h1>Expense Planner</h1>
			<NewBudget
				budget={budget}
				setBudget={setBudget}
			/>
		</header>
	)
}

export default Header
