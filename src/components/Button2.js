import React from 'react' 
import './styles/Button2.css'
import {Link} from 'react-router-dom'

function Button2 (){
    return(
        <div className="text-center m-5 button2">
            <Link to="/exerciseNew">
                <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" alt="button" />
            </Link>
            
        </div>
    )
}

export default Button2