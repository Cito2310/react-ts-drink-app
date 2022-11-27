import "../styles/text-warning.scss"

interface props { msg: string }

export const TextWarning = ({ msg }: props) => <p className='text-warning'>{msg}</p>