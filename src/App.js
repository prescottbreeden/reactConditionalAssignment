// dependencies
import React, { Component } from 'react';

// style-sheets
import './App.css';
import './CharComponent/CharComponent.css'
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

/*
Assignment instructions:
1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)
2. Create a new component(=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. takes 5 as min length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop
6. When you click a CharComponent, it should be removed from the entered text.

Hint: keep in mind that JS strings are basically arrays!

*/


class App extends Component {

  state = {
    text: ''
  }

  changedInputHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteChar = (charIndex) => {
    const chars = this.state.text.split('')
    chars.splice(charIndex, 1);
    const newChars = chars.join('');
    this.setState({ text: newChars })
  }

  render() {
    const charsString = this.state.text.split('').map((char, index) => {
      return (
        <CharComponent 
          text={char}
          key={index}
          clicked={() => this.deleteChar(index)} />
      ) 
    })

    return (
      <div className="App">
        <h1>Conditionals Assignment</h1>
        <p>Enter text in the input box below</p>
        <input type="text" 
          onChange={this.changedInputHandler}
          value={this.state.text}
        />
        <ValidationComponent
            text={this.state.text} />
        <div>
          {charsString}
        </div>
      </div>
    );
  }
}

export default App;
