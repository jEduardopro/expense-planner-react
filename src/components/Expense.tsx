import { Expense as ExpenseItem } from "../types/Expense"
import { formatDate } from '../helpers/index';

import IconSaving from '../img/icono_ahorro.svg'
import IconFood from '../img/icono_casa.svg'
import IconHome from '../img/icono_comida.svg'
import IconExpenses from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'

const iconDictionary: Record<string, any> = {
	'saving': IconSaving,
	'food': IconFood,
	'home': IconHome,
	'expenses': IconExpenses,
	'leisure': IconLeisure,
	'health': IconHealth,
	'subscriptions': IconSubscriptions
}

type Props = {
	expense: ExpenseItem
}

const Expense = ({ expense }: Props) => {
	const { category, name, quantity, id, date } = expense
	
	return (
		<div className="gasto sombra">
			<div className="contenido-gasto">
				<img
					src={iconDictionary[category]}
					alt=""
				/>
				<div className="descripcion-gasto">
					<p className="categoria">{category}</p>
					<p className="nombre-gasto">{name}</p>
					<p className="fecha-gasto">
						Added at: {''}
						<span>{formatDate(date!)}</span>
					</p>
				</div>
			</div>

			<p className="cantidad-gasto">${ quantity }</p>
		</div>
	)
}

export default Expense
