import { useEffect, useState } from "react";
import { Expense } from "../types/Expense";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Props = {
	budget: number;
	expenses: Expense[];
}

const BudgetControl = ({ budget, expenses }: Props) => {

	const [available, setAvailable] = useState(0)
	const [spent, setSpent] = useState(0)
	const [percentage, setPercentage] = useState(0)
	
	useEffect(() => { 
		const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
		const totalAvailable = budget - totalSpent;

		const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2)
		
		setAvailable(totalAvailable)
		setSpent(totalSpent)
		
		setTimeout(() => {
			setPercentage(parseFloat(newPercentage))
		}, 600);

	}, [expenses])
	
	const formatBudget = (budget: number) => {
		return budget.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
	}

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<CircularProgressbar
					styles={buildStyles({
						pathColor: '#3b82f6',
						trailColor: '#f5f5f5',
						textColor: '#3b82f6',
					})}
					value={percentage}
					text={`${percentage}% spent`}
				/>
			</div>
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
