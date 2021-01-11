import React, { Component } from 'react'

export default class componentName extends Component {

    
    initialState = {
        name: '',
        job: '',
      }
    
    state = this.initialState


    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })
      }

    render() {
        const nombrexd = "abraham";
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.handleChange} />
            </form>
        )
    }
}
