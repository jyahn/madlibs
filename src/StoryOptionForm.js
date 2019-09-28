import React, { Component } from "react";
import './Forms.css'

class StoryOptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyOption: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addStoryOption(this.state);
    this.setState({
      storyOption: ""
    });
  }

  render() {
    return (
      <div className="Form">
        <h2 className="themeText">Select your Mad Lib theme!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="storyOption"
            id = "sickNote"
            value="sickNote"
            checked={this.state.storyOption === "sickNote"} onChange={this.handleChange} /> Sick Note 🤢🤥<br />
          <input
            type="radio"
            name="storyOption"
            id = "prison"
            value="prison"
            checked={this.state.storyOption === "prison"} onChange={this.handleChange} /> Behind Bars 🔒😔<br />
          <input
            type="radio"
            name="storyOption"
            id = "fortuneCookie"
            value="fortuneCookie"
            checked={this.state.storyOption === "fortuneCookie"} onChange={this.handleChange} /> Fortune Cookie 🥠🔮<br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default StoryOptionForm;
