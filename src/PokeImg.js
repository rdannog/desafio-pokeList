import React, { Component } from 'react'
import axios from 'axios'

export default class PokeImg extends Component {

    state = {
        img: []
    }

    async componentDidMount() {
        const response = await axios.get(this.props.url)
        console.log(response.data.sprites.other.dream_world.front_default, )

        this.setState({
            img: response.data.sprites.other.dream_world.front_default
        })
    }
    
    render() {
        return(
            <div>
                <img className="poke-img" src={this.state.img} alt=""/>
            </div>
        )
    }
}