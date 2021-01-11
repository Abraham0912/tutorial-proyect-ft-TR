import React, {Component} from 'react'
import Table from './Table';
import Form from './Form';

class App extends Component {

  state = {
    characters: [{
          id: "1",
          name: 'Charlie',
          job: 'Janitor',
          nuevoDato: "NDCharlie"
        },
        {
          id: "2",
          name: 'Mac',
          job: 'Bouncer',
          nuevoDato: "NDMac"
        },
        {
          id: "3",
          name: 'Dee',
          job: 'Aspring actress',
          nuevoDato: "NDDee"
        },
        {
            id: "4",
            name: 'Dennis',
            job: 'Bartender',
            nuevoDato: "NDDennis"
          },
          {
            id: "5",
            name: 'Abraham',
            job: 'Developer',
            nuevoDato: "NDAbraham"
          }]
  }

//actualizará el estado
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return character.id !== index;

      }),
    })
  }


  addCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return character.id !== index;

      }),
    })
  }

  render() {

    return (
        <div className="container">
            <Table 
                characterData={this.state.characters} 
                removeCharacter={this.removeCharacter}
            />
            <Form />
        </div>
    )
  }
}

export default App