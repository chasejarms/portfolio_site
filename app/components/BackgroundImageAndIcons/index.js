import React from 'react';
import Wrapper from '../Wrapper';
import BackgroundImage from '../BackgroundImage';
import LanguageIcons from '../LanguageIcons';

class BackgroundImageAndIcons extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper display='block' backgroundColor='black' flex='0 0'>
        <BackgroundImage
          src='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.40.49+PM.png'
          />
      </Wrapper>
    )
  }
}

export default BackgroundImageAndIcons;
