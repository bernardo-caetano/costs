import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'


function LinkButon({to , text}) {
    return(
        <Link className={styles.btn} to={to}>{text}</Link>
    )
}

export default LinkButon   