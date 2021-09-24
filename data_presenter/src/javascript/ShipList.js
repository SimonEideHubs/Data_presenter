import '../css/HomeSideBar.css';
import * as Boot from 'react-bootstrap'
import Collapsible from 'react-collapsible'
import '../css/ShipList.css'

function ShipList() {
    return (
        <div id={'ShipList'}>
            <Collapsible trigger="Start here" className={'collapsible'}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
            <Collapsible trigger="Start here" className={'collapsible'}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
            <Collapsible trigger="Start here" className={'collapsible'}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
            <Collapsible trigger="Start here" className={'collapsible'}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
        </div>
    );
}

export default ShipList;