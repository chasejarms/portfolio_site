import React from 'react';
import PortfolioItem from '../PortfolioItem';
import Wrapper from '../Wrapper';

const PortfolioContainer = (props) => {
  return (
    <Wrapper display='block' height='100vh' overflowY='scroll'>
      <PortfolioItem />
      <PortfolioItem />
    </Wrapper>
  )
}

export default PortfolioContainer;


/*


*/
