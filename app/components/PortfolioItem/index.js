import React from 'react';
import Wrapper from '../Wrapper';
import BackgroundImage from '../BackgroundImage';
import LanguageIcons from '../LanguageIcons';
import Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';

const scroll = Scroll.animateScroll;
const Element = Scroll.Element;

// create a sensor at the top of each page
// when we see the sensor, scroll to the bottom of the page for that component

class PortfolioItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.itemName = this.itemName.bind(this);
    this.smoothScrollDown = this.smoothScrollDown.bind(this);
  }

  itemName(forTop) {
    const top = forTop ? '-top' : '';
    switch (this.props.itemNumber) {
      case 'one':
        return `one${top}`;
      case 'two':
        return `two${top}`;
      case 'three':
        return `three${top}`;
      case 'four':
        return `four${top}`;
    }
  }

  smoothScrollDown(isVisible) {
    if (isVisible) {
    }
  }

  render() {
    const { backgroundColor, imageUrl, icons, iconColor, languageBackground, imageLink } = this.props;
    return (
      <Wrapper flexDirection='row' wrapperHeight='100vh' wrapperWidth='calc(100vw - 300px)' backgroundColor='white'>
        <Wrapper flexDirection='column' justifyContent='space-between'>
          <VisibilitySensor onChange={this.smoothScrollDown} />
          <BackgroundImage
            imageUrl={imageUrl}
            backgroundColor={backgroundColor}
            imageLink={imageLink}
            />
          <LanguageIcons
            icons={icons}
            iconColor={iconColor}
            languageBackground={languageBackground}
            />
        </Wrapper>
      </Wrapper>
    )
  }


}

export default PortfolioItem;
