import React from 'react';
import I from '../I';
import Wrapper from '../Wrapper';

class LanguageIcons extends React.PureComponent {
  constructor (props) {
    super(props);
    this._correctIcon = this._correctIcon.bind(this);
  }

  render () {
    console.log(this.props);
    const propCount = this.props.icons.length;
    const icons = this.props.icons.map((prop, idx) => {
      return <I
        key={idx}
        fontSize={`${20 / propCount}vw`}
        color='white'
        scale='1.0'
        className={this._correctIcon(prop)}></I>;
    });

    return (
      <Wrapper
        justifyContent='space-around'
        flex='1 0 100px'
        padding='0 0 0 0'
        backgroundColor='#e20144'
        alignItems='center'
        >
        { icons }
      </Wrapper>
    )
  }

  _correctIcon(iconType) {
    switch(iconType) {
      case 'React':
        return 'devicon-react-original';
      case 'Ruby':
        return 'devicon-ruby-plain';
      case 'Git':
        return 'devicon-git-plain';
      case 'CSS3':
        return 'devicon-css3-plain';
      case 'HTML5':
        return 'devicon-html5-plain';
      default:
        return '';
    }
  }
}

export default LanguageIcons;
