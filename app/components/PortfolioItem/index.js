import React from 'react';
import Wrapper from '../Wrapper';

class PortfolioItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper flexDirection='row' wrapperHeight='100vh' backgroundColor='white' padding='40px'>
        <Wrapper flexDirection='column'>
          <Wrapper flex='2'>
            <Wrapper></Wrapper>
            <Wrapper flex='0 0 50px'></Wrapper>
          </Wrapper>
          <Wrapper flex='1'>

          </Wrapper>
        </Wrapper>
        <Wrapper backgroundColor='white' flex='0 0 100px'></Wrapper>
      </Wrapper>
    )
  }


}

export default PortfolioItem;
