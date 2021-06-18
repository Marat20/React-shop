import {useEffect} from 'react'
import Alert from '@material-ui/lab/Alert';


export default function Prompt (props) {
    const {name ='', removePrompt = Function.prototype} = props
    useEffect (() => {
        const timerId = setTimeout(removePrompt, 2000)

        return () => clearTimeout(timerId)
// eslint-disable-next-line
    }, [name])
    return (
        <Alert className='prompt' severity="success">{name} добавлен в корзину</Alert>
    )
}