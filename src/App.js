
import React, { Component } from 'react';
class Name extends Component{
  state = {
    pessoas:[
      {
        nome:'goku',
        idade: 62,
      },{
        nome:"wolverine",
        idade:999999,
      },{
        nome:"Vegeta",
        idade:60,
      },{
        nome:"kakashi",
        idade: 40,
      },{
        nome:"Boruto",
        idade: 15,
      },{
        nome:"bruce-lee",
        idade: 45,
      }
    ]
  };
  render(){
    return(
      <div className = "map-box">
      {this.state.pessoas.map((item) => (
        <div className = "loca">
          <h1 className ="nome">Meu nome é: {item.nome}</h1>
           <h2 className ="idade">tenho: {item.idade} anos,</h2> 
        </div>
      ))}
      </div>
    );
  }
}

export default Name;

