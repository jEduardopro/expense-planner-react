import CloseBtn from '../img/cerrar.svg'

type Props = {
	setModal: (status: boolean) => void;
}

const Modal = ({setModal}: Props) => {

	const closeModal = () => {
		setModal(false)
	}

	return (
		<div className="modal">
			<p>from modal</p>
			<div className="cerrar-modal">
				<img
					src={CloseBtn}
					alt="close modal"
					onClick={closeModal}
				/>
			</div>
		</div>
	)
}

export default Modal
