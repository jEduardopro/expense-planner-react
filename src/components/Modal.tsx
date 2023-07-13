import React, { useEffect, useState } from 'react';
import CloseBtn from '../img/cerrar.svg'
import Message from './Message';
import { Expense } from '../types/Expense';

type Props = {
	setModal: (status: boolean) => void;
	animateModal: boolean;
	setAnimateModal: (status: boolean) => void;
	saveExpense: (expense: Expense) => void;
	expenseEdit: Expense | null;
	setExpenseEdit: (expense: Expense | null) => void;
}

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense, expenseEdit, setExpenseEdit}: Props) => {

	const [message, setMessage] = useState('')
	
	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState(0)
	const [category, setCategory] = useState('')
	const [date, setDate] = useState(0)
	const [id, setId] = useState('')

	useEffect(() => {
		if (expenseEdit) {
			setName(expenseEdit.name)
			setQuantity(expenseEdit.quantity)
			setCategory(expenseEdit.category)
			setDate(expenseEdit.date!)
			setId(expenseEdit.id!)
		}
	},[expenseEdit])

	const closeModal = () => {
		setAnimateModal(false)
		setExpenseEdit(null)
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
			
		saveExpense({name, quantity, category, id, date})
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
				<legend>{expenseEdit ? 'Edit Expense' : 'New Expense'}</legend>
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
						<option value="saving">Saving</option>
						<option value="food">Food</option>
						<option value="home">Home</option>
						<option value="expenses">Miscellaneous expenses</option>
						<option value="leisure">Leisure</option>
						<option value="health">Health</option>
						<option value="subscriptions">Subscriptions</option>
					</select>
				</div>

				<input type="submit" value={expenseEdit ? 'Save Changes' : 'Add Expense'} />
			</form>
		</div>
	)
}

export default Modal
