import React, { Component } from 'react'
import Feedback from './Feedback';
class Form extends Component {
    state = {
        name: "",
        department: "",
        rating: "",
        arr: [],
        showBOX: true,
        showFeedback: false
    }
    OnSubmit(e) {
        e.preventDefault();
        const tempObj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        this.state.arr.push(tempObj)
        this.setState({
            name: "",
            department: "",
            rating: "",
            showBOX: false,
            showFeedback: true
        })
    }

    handlestateChange = (e) => {
        this.setState({
            showBOX: true,
            showFeedback: false
        })
    }

    render() {
        return (
            <>
                {this.state.showBOX &&
                    <div className='container'>
                        <h1>Employee Feedback Form</h1>
                        <form>
                            <label htmlFor="ipt1">Name : </label>
                            <input type="text" id='ipt1' value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }}></input><br></br>
                            <label htmlFor="ipt2">Department: </label>
                            <input type="text" id='ipt2' value={this.state.department} onChange={(event) => { this.setState({ department: event.target.value }) }}></input><br></br>
                            <label htmlFor="ipt3">Rating : </label>
                            <input type="number" id='ipt3' value={this.state.rating} onChange={(event) => { this.setState({ rating: event.target.value }) }}></input><br></br>


                        </form>
                        <button type='submit' className='slide_me' onClick={this.OnSubmit.bind(this)}>SUBMIT</button>

                    </div>}
                {this.state.showFeedback && <Feedback data={this.state.arr} stateobj={this.state} statechange={this.handlestateChange} />}
            </>
        )
    }
}

export default Form