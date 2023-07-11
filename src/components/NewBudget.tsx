
type Props = {
	budget: number;
	setBudget: (budget: number) => void;
}

const NewBudget = ({budget, setBudget}: Props) => {
	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form className='formulario'>
				<div className='campo'>
					<label>Define budget</label>
					<input
						className='nuevo-presupuesto'
						type="number"
						placeholder='enter your budget'
						value={budget}
						onChange={e => setBudget(parseFloat(e.target.value))}
					/>

					<input type="submit" value="Add" />
				</div>
			</form>
		</div>
	)
}

export default NewBudget
