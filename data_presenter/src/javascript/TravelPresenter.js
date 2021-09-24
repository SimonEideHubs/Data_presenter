import '../css/TravelPresenter.css';
import * as Boot from 'react-bootstrap'
import route from '../assets/route.png'

function TravelPresenter() {
    return (
        <div id={'TravelPresenter'}>
            <div id={'routeSideBar'}>
                <h1>Choose your ports:</h1>
                <div id={'fra'}>
                <label>Fra: </label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
                <div id={'til'}>
                    <label>Til: </label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
            <img id={'mapImage'} src={route} alt={'Route illustration'}/>
        </div>
    );
}

export default TravelPresenter;