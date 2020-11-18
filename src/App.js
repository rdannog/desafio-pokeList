import React, { Component } from 'react'
import pokeballImg from './img/Pokeball-icon@2x.png'
import './App.css'
import axios from 'axios'
import PokeImg from './PokeImg'

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=105"
});


export default class Pokedex extends Component {
  
  state = {
    pokeList: []
  }
  
  async componentDidMount() {
    const response = await api.get();
    console.log(response.data.results);

    this.setState({
      pokeList: response.data.results,
    });
  }


  render(){
    return (
      <div className="body">
        <div className="container-img-title">
          <img className="main-img" src={pokeballImg} alt="pokeball"></img>
          <h1 className="title">POKEDEX</h1>
        </div>
          <div className="box-map" >
            {this.state.pokeList.map((item,index) =>(
            <div className="map-items" key ={index}>
              <div className="img-div" >
                <PokeImg url={item.url} alt="" />
              </div>
              <div className="text-div">
                <h2>{item.name}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}