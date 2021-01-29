import React from 'react' 
import Exercises from './Exercises'
import ExerciseNew from './ExerciseNew'
import NotFound from './NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/exercises" component={Exercises}/>
                <Route exact path="/exerciseNew" component={ExerciseNew} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
)

export default App 