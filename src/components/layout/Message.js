import { useState, useEffect } from 'react' 

import styles from "./Message.module.css"


function Message( {type, msg}) {

    const [visible,setVisible] = useState(false)//muda a exibição da mensagem

    useEffect(() => {
        if(!msg) { //se não houver msg não mostra msg
            setVisible(false)
            return
        }

        //else: (não precisa de else)
        setVisible(true) //se houver msg mostra por 3s
        const timer = setTimeout(() => {
            setVisible(false)
        },3000) 


        return () => clearTimeout(timer) //retorna para não dar erro, e limpa o timer

    },[msg])//ligado a mensagem que vai exibir ou ocultar


    return(
        <>
            {visible && ( //if visible==true mostra a mensagem
                <div className={` ${styles.message} ${styles[type]} `}>{msg}</div>
            )}
        </>

        
    )
}

export default Message