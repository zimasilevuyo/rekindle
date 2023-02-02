import React from "react";
import './toaster.css';

//Defining class with that takes in props parameters and sets the states of a couple of variables
class Toaster extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = {
    	isToasting: false,
    	toastTimer: null,
    	toastPopped: false,
    	timeRemaining: 45,
    	level: 1,
  	};
	}
 
	//Function to handle the change of the value of a slider and update the state accordingly

handleSliderChange(event) {
  	this.setState({
    	level: event.target.value,
    	timeRemaining: 45 + (event.target.value - 1) * 10
  	});
	}
 
	//Function to start toasting and set a timer for timeRemaining seconds
startToasting() {
  	this.setState({
    	isToasting: true,
    	toastTimer: setInterval(() => this.updateTimer(), 1000)
  	});
	}
 //Function to update the timer and stop toasting if the time remaining is 0
updateTimer() {
  	if (this.state.timeRemaining === 0) {
    	this.stopToasting();
  	} else {
    	this.setState({
      	timeRemaining: this.state.timeRemaining - 1
    	});
  	}
	}
 
	//function to stop toasting and clear the timer, update the state to set toastPopped to true
	stopToasting() {
  	clearInterval(this.state.toastTimer);
  	this.setState({
    	isToasting: false,
    	toastTimer: null,
    	toastPopped: true
  	});
	}
 
 
	render() {
  	return (
    	<div>
      	{this.state.isToasting ? (
        	<div>
          	<button className="neumorphic-toaster"  onClick={() => this.stopToasting()}>Cancel</button>
          	<div className="neomorphic-toaster-timer">Time Remaining: {this.state.timeRemaining} seconds</div>
        	</div>
      	) : (
        	<div>
          	<button  className="neumorphic-toaster" onClick={() => this.startToasting()}>Toast</button>
          	<div className="neumorphic-toaster-slider-container">
            	<label>Toast Level</label>
            	<input type="range" min="1" max="5" value={this.state.level} onChange={(event) => this.handleSliderChange(event)} />
            	<span>{this.state.level}</span>
          	</div>
        	</div>
      	)}
      	{this.state.toastPopped ? <div>Toast is Ready</div> : null}
    	</div>
  	);
	}
  }

  export default Toaster;