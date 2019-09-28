import React, { Component } from 'react';
import "./Story.css"

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { words, storyOption } = this.props;
    if (storyOption === "prison") {
      var { name1, name2, name3, relative1,
        relative2, verbEd, verbIng, adjective1, adjective2,
        nounPlural1, nounPlural2, adverb, number, bodyPart
      } = words.words;
    }
    else if (storyOption === "sickNote") {
      var { lastName, sillyWord1, sillyWord2, adjective1, adjective2,
        illness, place, number1, number2
      } = words.words;
    }
    else if (storyOption === "fortuneCookie") {
      var { noun1, noun2, noun3, adjective1, adjective2,
        adjective3, verb1, verb2, verb3
      } = words.words;
    }

    return (
      <div className="Story">
        {storyOption === "sickNote"
          ? <div className="sickNote">
            <h3>Dear school office,</h3>
            <h3>
              <span className="words">{sillyWord1} {lastName} </span> will not be attending school today. <br />
              He/she has come down with a case of the <span className="words">{illness}</span>. <br />
              We have made an appointment with the <span className="words">{adjective1} </span> Dr. <span className="words">{sillyWord2}</span>,
              who studied for many years in <span className="words">{place}</span> and has <span className="words">{number1} </span> degrees. <br />
              It is <span className="words"> {adjective2} </span>that there was a project due today.
              <br></br>
              <br></br>
              Please extend my child a <span className="words">{number2} </span>day extension for the project.
              <br></br>
              <br></br>
              Signed, <br></br>
              <span className="words">{sillyWord1}</span>'s mom
            </h3>
          </div>
          : null}

        {storyOption === "prison"
          ? <div>
            <h3>Dear <span className="words">{relative1}</span>,</h3>

            <h3>
              I have not heard from you in <span className="words">{number}</span> months. <br />
              I <span className="words">{adverb} </span> hope you have not forgot about me. <br />
              I met <span className="words">{name1} </span> last week and we became <span className="words">{adjective1}</span> friends. <br />
              Unfortunately, Correctional Officer, <span className="words">{name2} </span> is still <span className="words">{adjective2} </span>
              and I <span className="words">{verbEd} </span> my entire<span className="words"> {bodyPart} </span>
              so I couldn’t go <span className="words"> {verbIng} </span> with the rest of the prisoners today.
              <br />
              I need more<span className="words"> {nounPlural1} </span> and a bag of <span className="words">{nounPlural2} </span>wouldn’t hurt.
              <br />
              <br />
              Please write me back.
              <br />
              <br />
              Your <span className="words"> {relative2} </span>, <br></br>
              <span className="words">{name3}</span>
            </h3>
          </div>
          : null}

        {storyOption === "fortuneCookie"
          ? <div>
            <h3>A lifetime of <span className="words">{noun1}</span> lies ahead of you.</h3>
            <h3>{vowels.includes(noun2[0]) ? "An" : "A"}<span className="words"> {noun2} </span>is never too old to <span className="words"> {verb1}</span>.</h3>
            <h3>{vowels.includes(adjective1[0]) ? "An" : "A"}<span className="words"> {adjective1} </span>friend will be coming into your life.</h3>
            <h3>Accept something that you cannot <span className="words"> {verb2} </span>and you will feel better.</h3>
            <h3>Life is <span className="words">{adjective2}</span>.<span className="words"> {verb3} </span>while you can.</h3>
            <h3>Lately, you're as <span className="words"> {adjective3} </span>as {vowels.includes(noun3[0]) ? "an" : "a"} <span className="words"> {noun3} </span></h3>
          </div>
          : null}
        <button className="restart" onClick={this.props.restartGame}>Restart Game</button>
      </div>
    )
  }
}


export default Story;