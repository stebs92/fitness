import React from 'react' 
import './styles/Welcome.css'

const Welcome = ({username}) => (
    <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {username} </h1>
                <p>Let's Workout to get some gains!</p>
            </div>
        </div>
)

export default Welcome