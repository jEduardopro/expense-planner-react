import React, { useState } from "react";
import Message from "./Message";

type Props = {
	budget: number;
	setBudget: (budget: number) => void;
	setBudgetIsValid: (isValid: boolean) => void;
}

const NewBudget = ({ budget, setBudget, setBudgetIsValid }: Props) => {

	const [message, setMessage] = useState<string>('')
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!budget || budget < 0) {
			setMessage('Budget must be greater than 0')
			return
		}

		setMessage('')
		setBudgetIsValid(true)
	}

	const handleBudget = (value: string) => {
		if (!value) {
			return
		}
		setBudget(parseFloat(value))
	}
 
	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form className='formulario' onSubmit={handleSubmit}>
				<div className='campo'>
					<label>Define budget</label>
					<input
						className='nuevo-presupuesto'
						type="number"
						placeholder='enter your budget'
						value={budget}
						onChange={e => handleBudget(e.target.value)}
					/>

					<input type="submit" value="Add" />

					{message && <Message type="error">{message}</Message>}
				</div>
			</form>
		</div>
	)
}

export default NewBudget
