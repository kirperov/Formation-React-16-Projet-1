import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'
const family = {
  member1: {
      name: "Kirill",
      age: 27,
      profession: "Softwere Developer"
  },
  member2: {
      name: "Léa",
      age: 18,
      profession: "Designer"
  }
}

class App extends Component {
  state = {
    family
  }

  handleClick = (num) => {
    const family = { ...this.state.family }
    family.member1.age += num
    this.setState({ family })
  }

  
  handleChange = event => {
    const family = { ...this.state.family }
    const name = event.target.value
    family.member1.name = name 
    this.setState({ family })
  }


  render() {
    const { title } = this.props
    const { family } = this.state
    return (
    <div className="App">
      <h1>{ title }</h1>
      <input value={ family.member1.name } type="text" onChange={ this.handleChange } />
      <Membre 
        name={ family.member1.name }
         age={ family.member1.age }> 
          <strong>Je suis un { family.member1.profession }</strong>
          <p>Hello</p>
      </Membre>
      <Membre
        age={ family.member2.age}
        name={ family.member2.name}>
          <strong>Je suis un { family.member2.profession }</strong>
      </Membre> 
      <Button addAge={() => this.handleClick(2) }/>
    </div>
  )
}
}

export default App;