import React, { Component } from 'react';
import Story from './Story'
import NewStoryForm from './NewStoryForm';
import StoryOptionForm from './StoryOptionForm'


class Madlib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      storySubmitted: false,
      storyOption: null
    }
    this.addStory = this.addStory.bind(this);
    this.addStoryOption = this.addStoryOption.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  addStory(words) {
    this.setState({
      words: [{ words }],
      storySubmitted: true
    });
  }

  addStoryOption(input) {
    this.setState({
      storyOption: input.storyOption
    });
  }

  restartGame() {
    this.setState({
      words: [],
      storySubmitted: false,
      storyOption: null
    })
  }

  render() {
    const { words, storySubmitted, storyOption } = this.state;
    return (
      <div>
        {!storyOption ? <StoryOptionForm addStoryOption={this.addStoryOption} /> : null}
        {storyOption && !storySubmitted ? <NewStoryForm storyOption={storyOption} addStory={this.addStory} /> : null}
        {storySubmitted ? <Story storyOption={storyOption} words={words[0]} restartGame={this.restartGame} /> : null}
      </div>
    )
  }
}


export default Madlib;