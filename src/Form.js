import React, { Component } from 'react'

export default class componentName extends Component {

    
    initialState = {
        name: '',
        job: '',
      }
    
    state = this.initialState


    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }

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
                    <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}
