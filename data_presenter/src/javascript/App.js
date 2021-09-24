import '../css/App.css';
import * as Boot from 'react-bootstrap'
import TravelPresenter from '../javascript/TravelPresenter'
import HomeSideBar from "./HomeSideBar";
import ShipList from "./ShipList";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/route'>
                        <TravelPresenter />
                    </Route>
                    <Route path={'/ships'}>

                    </Route>
                    <Route path='/'>
                        <HomeSideBar />
                        <ShipList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;