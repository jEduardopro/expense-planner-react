import { useEffect, useState } from "react";
import { Expense } from "../types/Expense";

type Props = {
	budget: number;
	expenses: Expense[];
}

const BudgetControl = ({ budget, expenses }: Props) => {

	const [available, setAvailable] = useState(0)
	const [spent, setSpent] = useState(0)
	
	useEffect(() => { 
		const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
		const totalAvailable = budget - totalSpent;

		setAvailable(totalAvailable)
		setSpent(totalSpent)

	}, [expenses])
	
	const formatBudget = (budget: number) => {
		return budget.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
	}

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>graph</div>
			<div className="contenido-presupuesto">
				<p>
					<span>Budget: </span> {formatBudget(budget)}
				</p>
				<p>
					<span>Available: </span> {formatBudget(available)}
				</p>
				<p>
					<span>Spent: </span> {formatBudget(spent)}
				</p>
			</div>
		</div>
	)
}

export default BudgetControl
