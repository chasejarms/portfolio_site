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
      <Wrapper flexDirection='row' wrapperHeight='100vh' backgroundColor='white'>
        <Wrapper flexDirection='column' justifyContent='space-between'>
          <BackgroundImage />
          <LanguageIcons React Git Ruby HTML5/>
        </Wrapper>
      </Wrapper>
    )
  }


}

export default PortfolioItem;
