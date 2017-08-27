import React, {Component} from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Stopwatch extends Component{
  constructor(props){
    super(props);

    this.state = {
      seconds: 10,
      interval: ''
    }
  }

  changeTime(){
    this.state.interval = setInterval(() => this.startStopwatch(this.state.seconds), 1000);
  }

  startStopwatch(seconds){
    if(seconds > 0){
      seconds--;
      this.setState({seconds:seconds});
    }
    else{
      alert('timer is 0');
      clearInterval(this.state.interval);
    }
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">
           Countdown to { this.state.seconds } Seconds
        </div>

        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new time'
            onChange={event => this.setState({seconds: event.target.value})}
          />
          <Button onClick = {() => this.changeTime()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Stopwatch;
