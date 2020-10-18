import React, { Component } from 'react';

export default class Weather extends Component{
    constructor(){
        super()
        this.state = {
            weather: 'No data'
        }
    }
    render(){
        return(
            <div>
                <h1> The Weather in Thrissur is : {this.state.weather} </h1>
                <button>Get Weather</button>
            </div>
        )
    }    
}
