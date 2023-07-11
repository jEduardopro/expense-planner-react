
type Props = {
	type: string;
	children: React.ReactNode;
}

const Message = ({children, type}: Props) => {
	return (
		<div className={`alerta ${type}`}>{children}</div>
	)
}

export default Message
