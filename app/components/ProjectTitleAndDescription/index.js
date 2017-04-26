import React from 'react';
import Wrapper from '../Wrapper';
import HeaderParagraph from '../HeaderParagraph';

class ProjectTitleAndDescription extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      chatText: ''
    }
  }

  componentDidMount() {
    this.typeText();
  }

  typeText() {
    let chatInfo = 'React, React Native, Git, ';
    let chatLength = chatInfo.length;
    let time = 0;
    for (let i = 0; i < chatLength; i++) {
      window.setTimeout(() => {
        this.setState({
          chatText: this.state.chatText + chatInfo[i]
        })
      }, time);
      if (chatInfo[i] === ',') {
        time += 50;
      } else {
        time += 50;
      }
    }
  }

  render () {
    console.log(this.state.chatText);
    return (
      <HeaderParagraph>
        Technologies: { this.state.chatText }
      </HeaderParagraph>
    )
  }

}

export default ProjectTitleAndDescription;
