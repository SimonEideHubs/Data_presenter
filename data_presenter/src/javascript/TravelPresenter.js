import '../css/TravelPresenter.css';
import * as Boot from 'react-bootstrap'
import route from '../assets/route.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function TravelPresenter() {
    return (
        <div id={'TravelPresenter'}>
                <h1>Choose your ports:</h1>
                <div id={'fra'} className={'dest'}>
                <h3>Fra: </h3>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
                <div id={'til'} className={'dest'}>
                    <h3>Til: </h3>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            <img id={'mapImage'} src={route} alt={'Route illustration'}/>
            <Link to={'ships'}>
                <button id={'findShipButton'}>Find ships!</button>
            </Link>
        </div>
    );
}

export default TravelPresenter;