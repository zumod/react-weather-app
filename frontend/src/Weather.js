import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component{
    constructor(){
        super()
        this.state = {
            weather: '_'
        }
    }
    handleButtonClick = () => {
        axios.get('/thrissur').then(response => {
            // console.log(response.data)
            this.setState({
                weather : response.data.temp,
                string : ' Observed Time is ',
                observationTime : response.data.observationTime
            })
        })
    }
    render(){
        return(
            <div>
                <h1> The temperature in Thrissur is : {this.state.weather}°C</h1>
                <h3>{this.state.string}{this.state.observationTime}</h3>
                <button onClick={this.handleButtonClick}>Get Data</button>
            </div>
        )
    }    
}
