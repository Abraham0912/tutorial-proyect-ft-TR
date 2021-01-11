import React, {Component} from 'react'
import Table from './Table'

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


  removeCharacter = (index) => {
    const {characters} = this.state//this.state.characters
  
    this.setState({
      characters: characters.filter((character, i) => {
        //return i !== index
        return character.id !== index;

      }),
    })
  }


  addCharacter = (index) => {
    const {characters} = this.state//this.state.characters
  
    this.setState({
      characters: characters.filter((character, i) => {
        //return i !== index
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
        </div>
    )
  }
}

export default App