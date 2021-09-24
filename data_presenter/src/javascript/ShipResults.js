import '../css/TravelPresenter.css';
import * as Boot from 'react-bootstrap';
import ShipList from "./ShipList";
import '../css/ShipResult.css';


function ShipResults() {
    return (
        <div id={'ShipResults'}>
            <div id={'resultsContainer'}>
                <ShipList id={'resultList'}/>
            </div>
        </div>
    );
}

export default ShipResults;