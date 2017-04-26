import React from 'react';
import Wrapper from '../Wrapper';
import BackgroundImageAndIcons from '../BackgroundImageAndIcons';
import ProjectTitleAndDescription from '../ProjectTitleAndDescription';

class PortfolioItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper flexDirection='row' wrapperHeight='100vh' backgroundColor='white' padding='40px'>
        <Wrapper flexDirection='column' justifyContent='space-between'>
          <ProjectTitleAndDescription />
          <BackgroundImageAndIcons>
            Babelr is a chat app that eliminates the language barrier for international
            collaborators. I built out numerous React Native components, authored multiple
            Redux cycles, and integrated with React Native Router Flux and React Native
            Swiper.
          </BackgroundImageAndIcons>
        </Wrapper>
      </Wrapper>
    )
  }


}

export default PortfolioItem;
