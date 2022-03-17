import styles from './Button.module.css';
import { Button as BsButton } from 'react-bootstrap';

const Button = ({children, ...rest})=> {
    return (
        <>
            <BsButton className={styles.button} {...rest}>
                {children}
            </BsButton>
        </>
    )
}

export default Button