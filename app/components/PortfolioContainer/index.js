import React from 'react';
import PortfolioItem from '../PortfolioItem';
import Wrapper from '../Wrapper';

const PortfolioContainer = (props) => {
  return (
    <Wrapper display='block' height='100vh' overflowY='scroll'>
      <PortfolioItem
        backgroundColor='black'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.40.49+PM.png'
        React
        Ruby
        HTML5
        CSS3
        />
      <PortfolioItem image icons backgroundColor />
    </Wrapper>
  )
}

export default PortfolioContainer;


/*


*/
