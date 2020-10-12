import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import './style.scss';
import Weather from './weather';

export default class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelectLocationOpen: false,
        };
        this.onToggleSelectLocation = this.onToggleSelectLocation.bind(this);
    }

    onToggleSelectLocation() {
        this.setState((prevState) => ({
            isSelectLocationOpen: !prevState.isSelectLocationOpen
        }))
    }

    render() {

        const { isSelectLocationOpen } = this.state;

        return (
            <div className="top-container">
                <h1 className="title">Weather Up</h1>
                <Weather {...this.props} />

                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <button
                                className="btn btn-select-location"
                                ref={ref}
                                onClick={this.onToggleSelectLocation}>
                                Select location
                            </button>
                        )}
                    </Reference>
                    <Popper placement="top" >
                        {({ ref, style, placement, arrowProps }) => (isSelectLocationOpen &&
                            <div className="poppup-container" ref={ref} style={style} data-placement={placement}>
                                <div className="form-container">
                                    <label htmlFor="location-name">Location Name:</label>
                                    <input id="location-name" type="text" placeholder="City name"></input>
                                    <button className="btn btn-select-location" >Select</button>
                                </div>
                                <div ref={arrowProps.ref} style={arrowProps.style} />
                            </div>
                        )}
                    </Popper>
                </Manager>

            </div>

        )
    }
}