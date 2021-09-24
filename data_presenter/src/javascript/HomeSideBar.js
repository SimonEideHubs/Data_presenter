import '../css/HomeSideBar.css';
import * as Boot from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function HomeSideBar() {
    return (
        <div id={'HomeSideBar'} className={'container'}>
            <div id={'logoContainer'}>
                <h1>Selskap</h1>
            </div>
            <div id={'buttonContainer'}>
                <Link to={'/route'}>
                    <Boot.Button variant="primary" id={'routeButton'}> Plan your route </Boot.Button>{' '}
                </Link>
            </div>
        </div>
    );
}

export default HomeSideBar;