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
    family,
    isShow: false
  }

  handleClick = (num) => {
    const family = { ...this.state.family }
    family.member1.age += num
    this.setState({ family })
  }

  
  handleChange = (event, id) => {
    const family = { ...this.state.family }
    const name = event.target.value
    family[id].name = name 
    this.setState({ family })
  }

  hideName = id => {
    const family = { ...this.state.family }
    family[id].name = 'X';
    this.setState({ family })
  }

  handleShowDescription = () => {
    // "!" means that it will be change by True (reversible on click)
    const isShow = !this.state.isShow;
    this.setState({ isShow});
  }


  render() {
    const { title } = this.props
    const { family, isShow } = this.state
    let description = null

    if(isShow) {
      description =  <strong>Je suis un { family.member2.profession }</strong>
    }
    
    const list = Object.keys(family)
      .map(member => (
        <Membre
          key = {member}
          hideName = { () => this.hideName(member) }
          handleChange = { event => this.handleChange(event, member)}
          age = { family[member].age }
          name = { family[member].name } />
      ))
      console.log(list);
    return (
    <div className="App">
      <h1>{ title }</h1>
      {/* <input value={ family.member1.name } type="text" onChange={ this.handleChange } /> */}
      { list }
      {/* <Membre 
        name={ family.member1.name }
         age={ family.member1.age }> 
        {
         isShow ? <strong>Je suis un { family.member1.profession }</strong> : null
        
        }
        
          <button onClick={ this.handleShowDescription }>
              {
              isShow ? 'Hide' : 'Show'
              }
          </button>
          { description }
          <p>Hello</p>
      </Membre> */}
 
      <Button addAge={() => this.handleClick(2) }/>
    </div>
  )
}
}


export default App;