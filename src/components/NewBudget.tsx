import React from 'react'

const NewBudget = () => {
	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form className='formulario'>
				<div className='campo'>
					<label>Define budget</label>
					<input
						className='nuevo-presupuesto'
						type="text"
						placeholder='enter your budget'
					/>

					<input type="submit" value="Add" />
				</div>
			</form>
		</div>
	)
}

export default NewBudget
