import React from 'react' 
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercises extends React.Component{
    render(){
        return(
            <div>
                    <Welcome
                        username="Stebs"
                    />
                    <Card 
                        title = "Technique guides of workout"
                        description = "Learn how to workout and results quickly"
                        img = "https://raw.githubusercontent.com/rulpalacios/FitnessApp/styles/src/images/exercise.png"
                        leftColor = "#a97dcc"
                        rightColor = "#617BFB"
                    />
            </div>
        )
    }   
}

export default Exercises