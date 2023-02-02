import React from "react";

class Kettle extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
        	isBoiling: false,
        	kettleTimer: null,
        	isBoiled: false,
        	temperature: 40
    	};
	}
 
	// start boiling and set a timer for 30 seconds
	startBoiling() {
    	this.setState({
        	isBoiling: true,
        	kettleTimer: setInterval(() => this.increaseTemperature(), 1000)
    	});
	}
 
	// stop boiling and clear the timer, update the state to set temperature to 100
	stopBoiling() {
    	clearInterval(this.state.kettleTimer);
    	this.setState({
        	isBoiling: false,
        	kettleTimer: null,
        	temperature: 100,
        	isBoiled: true
    	});
	}
 
	// increase temperature by 1 degree every second
	increaseTemperature() {
    	if (this.state.temperature < 100) {
        	this.setState({
            	temperature: this.state.temperature + 1
        	});
    	} else {
        	this.stopBoiling();
    	}
	}

	reset(){
    	clearInterval(this.state.kettleTimer);
    	this.setState({
        	isBoiling: false,
        	kettleTimer: null,
        	temperature: 40
    	});
	}
 
	render() {
    	return (
        	<div>
            	{this.state.isBoiling ? (
                	<div>
                    	<button className="neumorphic-boil-kettle" onClick={() => this.stopBoiling()}>Switch off</button>
                    	<div>Temperature: {this.state.temperature}°C</div>
                	</div>
            	) : (
                	<div>
                    	<button className="neumorphic-stop-boil" onClick={() => this.startBoiling()}>Switch on</button>
                    	{this.state.isBoiled ? <div>Kettle has boiled</div> : null}
                	</div>
            	)}
        	</div>
    	);
	}
}

export default Kettle;