import React from "react"
import { Route } from "react-router-dom"
import { News} from "./Component"
import Homepage from './home'

const Routes = () => {
    return <div>
        <Route exact path="/covid-tracker">
            <Homepage />
        </Route>
        <Route path="/news">
            <News />
        </Route>
    </div>
}

export default Routes