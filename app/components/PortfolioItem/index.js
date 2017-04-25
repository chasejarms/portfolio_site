import React from 'react';
import Wrapper from '../Wrapper';
import BackgroundImage from '../BackgroundImage';
import LanguageIcons from '../LanguageIcons';

class PortfolioItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper flexDirection='row' wrapperHeight='100vh' backgroundColor='white' padding='40px'>
        <Wrapper flexDirection='column'>
          <Wrapper flex='2'>
            <Wrapper>
              <BackgroundImage
                backgroundImage='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.40.49+PM.png'/>
            </Wrapper>
            <LanguageIcons React HTML5 CSS3 Git/>
          </Wrapper>
          <Wrapper flex='1'>

          </Wrapper>
        </Wrapper>
      </Wrapper>
    )
  }


}

export default PortfolioItem;
