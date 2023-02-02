import React from "react";
import Toaster from "./toaster";
import Kettle from "./kettle";
import './mainswitch.css';


class MainPowerSwitch extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = {
    	isOn: true
  	};
	}
 
	togglePower() {
  	this.setState(prevState => ({
    	isOn: !prevState.isOn
  	}));
	}
 
	render() {
  	return (
        	<div className="neumorphic-card">
            	<div>
                	<button className="neomorphic-mainbutton" onClick={() => this.togglePower()}>
                	{this.state.isOn ? 'Switch Off' : 'Switch On'}
                	</button>
                	{this.state.isOn ? (
                	<div className="power-on">
                    	<Toaster />
                    	<Kettle />
                	</div>
                	) : (
                	<div className="power-off">Power is Off</div>
                	)}
            	</div>
        	</div>
  	);
	}
  }

  export default MainPowerSwitch;