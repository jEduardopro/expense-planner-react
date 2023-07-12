import React, { useState } from 'react';
import CloseBtn from '../img/cerrar.svg'
import Message from './Message';
import { Expense } from '../types/Expense';

type Props = {
	setModal: (status: boolean) => void;
	animateModal: boolean;
	setAnimateModal: (status: boolean) => void;
	saveExpense: (expense: Expense) => void;
}

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense}: Props) => {

	const [message, setMessage] = useState('')
	
	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState(0)
	const [category, setCategory] = useState('')

	const closeModal = () => {
		setAnimateModal(false)
		setTimeout(() => {
			setModal(false)
		}, 200);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if ([name, quantity, category].includes('')) {
			setMessage('All fields are required')

			setTimeout(() => {
				setMessage('')
			}, 2000);
			return
		}
			
		saveExpense({name, quantity, category})
	}

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img
					src={CloseBtn}
					alt="close modal"
					onClick={closeModal}
				/>
			</div>

			<form
				onSubmit={handleSubmit}
				className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
				<legend>New Expense</legend>
				{message && <Message type="error" >{message}</Message>}
				<div className='campo'>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						placeholder="Name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className='campo'>
					<label htmlFor="qty">Quantity</label>
					<input
						id="qty"
						type="number"
						placeholder="Quantity"
						value={quantity}
						onChange={e => setQuantity(parseFloat(e.target.value))}
					/>
				</div>
				<div className='campo'>
					<label htmlFor="category">Category</label>
					<select id="category" value={category} onChange={e => setCategory(e.target.value)}>
						<option value="">-- Select --</option>
						<option value="saving">saving</option>
						<option value="food">food</option>
						<option value="home">home</option>
						<option value="expenses">miscellaneous expenses</option>
						<option value="leisure">leisure</option>
						<option value="health">health</option>
						<option value="subscriptions">subscriptions</option>
					</select>
				</div>

				<input type="submit" value="Add Expense" />
			</form>
		</div>
	)
}

export default Modal
