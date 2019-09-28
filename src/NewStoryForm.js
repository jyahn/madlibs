import React, { Component } from "react";

import './Forms.css'

class NewStoryForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.storyOption === "sickNote") {
      this.state = {
        lastName: "",
        sillyWord1: "",
        sillyWord2: "",
        adjective1: "",
        adjective2: "",
        illness: "",
        place: "",
        number1: "",
        number2: ""
      }
    } else if (this.props.storyOption === "prison") {
      this.state = {
        name1: "",
        name2: "",
        name3: "",
        relative1: "",
        relative2: "",
        verbEd: "",
        verbIng: "",
        adjective1: "",
        adjective2: "",
        nounPlural1: "",
        nounPlural2: "",
        adverb: "",
        number: "",
        bodyPart: "",

      }
    } else if (this.props.storyOption === "fortuneCookie") {
      this.state = {
        noun1: "",
        noun2: "",
        noun3: "",
        adjective1: "",
        adjective2: "",
        adjective3: "",
        verb1: "",
        verb2: "",
        verb3: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchRandomWord = this.fetchRandomWord.bind(this);
    this.fetchRandomNumber = this.fetchRandomNumber.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addStory(this.state);
    this.setState({
      noun: "",
      noun2: "",
      adj: "",
      color: ""
    });
  }

  fetchRandomWord(evt, type) {
    // Credit for evt.persist(): https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6
    evt.persist();
    fetch(`/${type}.txt`)
      .then((r) => r.text())
      .then(text => {
        //The following line gets rid of all white spaces without losing \n
        //Credit user: Minstel, https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
        let textNoWhiteSpace = text.split(' ').join('')
        let textArr = textNoWhiteSpace.split("\n");
        let randomWord = textArr[Math.floor(Math.random() * textArr.length)]
        this.setState({
          [evt.target.name]: randomWord
        })
      })
  }

  fetchRandomNumber(evt) {
    evt.persist();
    let randomNumber = Math.floor(Math.random() * 50)
    this.setState({
      [evt.target.name]: randomNumber
    })
  }

  render() {
    const { storyOption } = this.props;
    return (
      <div className="Form">
        {storyOption === "sickNote"
          ?
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName} /> <br />
            <label htmlFor="sillyWord1">Silly Word 1:</label>
            <input
              type="text"
              name="sillyWord1"
              onChange={this.handleChange}
              value={this.state.sillyWord1} /> <br />
            <label htmlFor="sillyWord2">Silly Word 2:</label>
            <input
              type="text"
              name="sillyWord2"
              onChange={this.handleChange}
              value={this.state.sillyWord2} /> <br />
            <label htmlFor="adjective1">Adjective 1:</label>
            <input
              type="text"
              name="adjective1"
              onChange={this.handleChange}
              value={this.state.adjective1} />
            {/* Got help on how to pass the event along with a parameter in an onClick from:
              Credit link: https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter
              Credit user: Jyothi Babu Araja */}
            <button type="button" name="adjective1" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button><br />
            <label htmlFor="adjective2">Adjective 2:</label>
            <input
              type="text"
              name="adjective2"
              onChange={this.handleChange}
              value={this.state.adjective2} />
            <button type="button" name="adjective2" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button> <br />
            <label htmlFor="illness">Illness:</label>
            <input
              type="text"
              name="illness"
              onChange={this.handleChange}
              value={this.state.illness} /> <br />
            <label htmlFor="place">Place:</label>
            <input
              type="text"
              name="place"
              onChange={this.handleChange}
              value={this.state.place} /> <br />
            <label htmlFor="number1">Number 1:</label>
            <input
              type="text"
              name="number1"
              onChange={this.handleChange}
              value={this.state.number1} />
            <button type="button" name="number1" onClick={this.fetchRandomNumber}>Get me a random number!</button> <br />
            <label htmlFor="number2">Number 2:</label>
            <input
              type="text"
              name="number2"
              onChange={this.handleChange}
              value={this.state.number2} />
            <button type="button" name="number2" onClick={this.fetchRandomNumber}>Get me a random number!</button> <br />
            <button disabled={Object.values(this.state).some(x => !x)}>Generate Mad Lib</button>
          </form>
          : null}
        {storyOption === "prison"
          ?
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name1">Name 1:</label>
            <input
              type="text"
              name="name1"
              onChange={this.handleChange}
              value={this.state.name1} /> <br />
            <label htmlFor="name2">Name 2:</label>
            <input
              type="text"
              name="name2"
              onChange={this.handleChange}
              value={this.state.name2} /> <br />
            <label htmlFor="name3">Name 3:</label>
            <input
              type="text"
              name="name3"
              onChange={this.handleChange}
              value={this.state.name3} /> <br />
            <label htmlFor="relative1">Relative 1:</label>
            <input
              type="text"
              name="relative1"
              onChange={this.handleChange}
              value={this.state.relative1} /> <br />
            <label htmlFor="relative2">Relative 2:</label>
            <input
              type="text"
              name="relative2"
              onChange={this.handleChange}
              value={this.state.relative2} /> <br />
            <label htmlFor="verbEd">Verb ending in "ED":</label>
            <input
              type="text"
              name="verbEd"
              onChange={this.handleChange}
              value={this.state.verbEd} />
            <button type="button" name="verbEd" onClick={(e) => { this.fetchRandomWord(e, 'verbs') }}>Get me a random verb!</button> <br />
            <label htmlFor="verbIng">Verb ending in "ING":</label>
            <input
              type="text"
              name="verbIng"
              onChange={this.handleChange}
              value={this.state.verbIng} />
            <button type="button" name="verbIng" onClick={(e) => { this.fetchRandomWord(e, 'verbs') }}>Get me a random verb!</button> <br />
            <label htmlFor="adjective1">Adjective 1:</label>
            <input
              type="text"
              name="adjective1"
              onChange={this.handleChange}
              value={this.state.adjective1} />
            <button type="button" name="adjective1" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button> <br />
            <label htmlFor="adjective2">Adjective 2:</label>
            <input
              type="text"
              name="adjective2"
              onChange={this.handleChange}
              value={this.state.adjective2} />
            <button type="button" name="adjective2" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button> <br />
            <label htmlFor="nounPlural1">Noun 1 (Plural):</label>
            <input
              type="text"
              name="nounPlural1"
              onChange={this.handleChange}
              value={this.state.nounPlural1} />
            <button type="button" name="nounPlural1" onClick={(e) => { this.fetchRandomWord(e, 'pluralnouns') }}>Get me a random plural noun!</button> <br />
            <label htmlFor="nounPlural2">Noun 2 (Plural):</label>
            <input
              type="text"
              name="nounPlural2"
              onChange={this.handleChange}
              value={this.state.nounPlural2} />
            <button type="button" name="nounPlural2" onClick={(e) => { this.fetchRandomWord(e, 'pluralnouns') }}>Get me a random plural noun!</button> <br />
            <label htmlFor="adverb">Adverb:</label>
            <input
              type="text"
              name="adverb"
              onChange={this.handleChange}
              value={this.state.adverb} />
            <button type="button" name="adverb" onClick={(e) => { this.fetchRandomWord(e, 'adverbs') }}>Get me a random adverb!</button> <br />
            <label htmlFor="number">Number :</label>
            <input
              type="text"
              name="number"
              onChange={this.handleChange}
              value={this.state.number} />
            <button type="button" name="number" onClick={this.fetchRandomNumber}>Get me a random number!</button> <br />
            <label htmlFor="bodyPart">Body Part:</label>
            <input
              type="text"
              name="bodyPart"
              onChange={this.handleChange}
              value={this.state.bodyPart} />
            <button type="button" name="bodyPart" onClick={(e) => { this.fetchRandomWord(e, 'bodyparts') }}>Get me a random body part!</button> <br />
            <button disabled={Object.values(this.state).some(x => !x)}>Generate Mad Lib</button>
          </form>
          : null}

        {storyOption === "fortuneCookie"
          ?
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="noun1">Noun 1:</label>
            <input
              type="text"
              name="noun1"
              onChange={this.handleChange}
              value={this.state.noun1} />
            <button type="button" name="noun1" onClick={(e) => { this.fetchRandomWord(e, 'nouns') }}>Get me a random noun!</button> <br />
            <label htmlFor="noun2">Noun 2:</label>
            <input
              type="text"
              name="noun2"
              onChange={this.handleChange}
              value={this.state.noun2} />
            <button type="button" name="noun2" onClick={(e) => { this.fetchRandomWord(e, 'nouns') }}>Get me a random noun!</button> <br />
            <label htmlFor="noun3">Noun 3:</label>
            <input
              type="text"
              name="noun3"
              onChange={this.handleChange}
              value={this.state.noun3} />
            <button type="button" name="noun3" onClick={(e) => { this.fetchRandomWord(e, 'nouns') }}>Get me a random noun!</button> <br />
            <label htmlFor="adjective1">Adjective 1:</label>
            <input
              type="text"
              name="adjective1"
              onChange={this.handleChange}
              value={this.state.adjective1} />
            <button type="button" name="adjective1" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button> <br />
            <label htmlFor="adjective2">Adjective 2:</label>
            <input
              type="text"
              name="adjective2"
              onChange={this.handleChange}
              value={this.state.adjective2} />
            <button type="button" name="adjective2" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button> <br />
            <label htmlFor="adjective3">Adjective 3:</label>
            <input
              type="text"
              name="adjective3"
              onChange={this.handleChange}
              value={this.state.adjective3} />
            <button type="button" name="adjective3" onClick={(e) => { this.fetchRandomWord(e, 'adjectives') }}>Get me a random adjective!</button> <br />
            <label htmlFor="verb1">Verb 1:</label>
            <input
              type="text"
              name="verb1"
              onChange={this.handleChange}
              value={this.state.verb1} />
            <button type="button" name="verb1" onClick={(e) => { this.fetchRandomWord(e, 'verbs') }}>Get me a random verb!</button> <br />
            <label htmlFor="verb2">Verb 2:</label>
            <input
              type="text"
              name="verb2"
              onChange={this.handleChange}
              value={this.state.verb2} />
            <button type="button" name="verb2" onClick={(e) => { this.fetchRandomWord(e, 'verbs') }}>Get me a random verb!</button> <br />
            <label htmlFor="verb3">Verb 3:</label>
            <input
              type="text"
              name="verb3"
              onChange={this.handleChange}
              value={this.state.verb3} />
            <button type="button" name="verb3" onClick={(e) => { this.fetchRandomWord(e, 'verbs') }}>Get me a random verb!</button> <br />
            <button disabled={Object.values(this.state).some(x => !x)}>Generate Mad Lib</button>
          </form>
          : null}
      </div>
    )
  }
}


export default NewStoryForm;
