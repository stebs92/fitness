import React from 'react' 

class ExerciseNew extends React.Component {

    handleClick = () =>{
        console.log("clicked!")
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        )
    }
}


export default ExerciseNew