import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component{
    constructor(){
        super()
        this.state = {
            weather: 'No data'
        }
    }
    handleButtonClick = () => {
        axios.get('/thrissur').then(response => {
            // console.log(response.data.temp)
            this.setState({
                weather: response.data.temp
            })
        })
    }
    render(){
        return(
            <div>
                <h1> The Weather in Thrissur is : {this.state.weather} </h1>
                <button onClick={this.handleButtonClick}>Get Weather</button>
            </div>
        )
    }    
}
