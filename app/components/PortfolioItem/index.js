import React from 'react';
import Wrapper from '../Wrapper';
import BackgroundImage from '../BackgroundImage';
import LanguageIcons from '../LanguageIcons';

class PortfolioItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { backgroundColor, imageUrl, icons, iconColor, languageBackground } = this.props;
    console.log(icons);
    return (
      <Wrapper flexDirection='row' wrapperHeight='100vh' wrapperWidth='calc(100vw - 300px)' backgroundColor='white'>
        <Wrapper flexDirection='column' justifyContent='space-between'>
          <BackgroundImage
            imageUrl={imageUrl}
            backgroundColor={backgroundColor}
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
