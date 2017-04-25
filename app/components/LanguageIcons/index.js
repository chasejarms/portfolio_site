import React from 'react';
import I from '../I';
import Wrapper from '../Wrapper';

class LanguageIcons extends React.PureComponent {
  constructor (props) {
    super(props);
    this._correctIcon = this._correctIcon.bind(this);
  }

  render () {
    const properties = Object.keys(this.props);
    const propCount = properties.length;
    const icons = properties.map(prop => {
      return <I
        fontSize={`${propCount / .8}em`}
        color='#e20144'
        scale='1.0'
        className={this._correctIcon(prop)}></I>;
    });

    return (
      <Wrapper
        justifyContent='space-between'
        flexDirection='column'
        flex='0 0 50px'
        padding='0 0 0 40px'>
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
