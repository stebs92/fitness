import React from 'react' 
import ReactDOM from 'react-dom' 
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

ReactDOM.render(<Card 
            title = "Technique guides of workout"
            description = "Learn how to workout and results quickly"
            img = "https://raw.githubusercontent.com/rulpalacios/FitnessApp/styles/src/images/exercise.png"
            leftColor = "#a97dcc"
            rightColor = "#617BFB"
/>, container)
