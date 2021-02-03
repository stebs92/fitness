import React from 'react' 
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import Button2 from '../components/Button2'

class Exercises extends React.Component{
   
        state = {
            data: 
                [] 
            }
            
    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        let res = await fetch('http://localhost:8000/api/exercises')
        let data = await res.json()

        this.setState({
            data
        })
        console.log(data)
    } 
    
    render(){
        return(
            <div>
                    <Welcome
                        username="Stebs"
                    />
                   <ExerciseList 
                   exercise = {this.state.data}
                   />

                   <Button2 />
                    
            </div>
        )
    }   
}

export default Exercises