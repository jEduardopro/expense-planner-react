
type Props = {
	filter: string;
	setFilter: (filter: string) => void;
}

const Filters = ({filter, setFilter}: Props) => {
	return (
		<div className='filtros sombra contenedor'>
			<form>
				<div className='campo'>
					<label>Filter Expenses</label>
					<select value={filter} onChange={e => setFilter(e.target.value)}>
						<option value="">-- All categories --</option>
						<option value="saving">Saving</option>
						<option value="food">Food</option>
						<option value="home">Home</option>
						<option value="expenses">Miscellaneous expenses</option>
						<option value="leisure">Leisure</option>
						<option value="health">Health</option>
						<option value="subscriptions">Subscriptions</option>
					</select>
				</div>
			</form>
		</div>
	)
}

export default Filters
