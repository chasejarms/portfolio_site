import React from 'react';
import PortfolioItem from '../PortfolioItem';
import Wrapper from '../Wrapper';

const PortfolioContainer = (props) => {
  return (
    <Wrapper display='block' height='100vh' overflowY='scroll'>
      <PortfolioItem
        backgroundColor='#13131f'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.40.49+PM.png'
        icons={['React', 'HTML5', 'Ruby', 'CSS3']}
        iconColor='white'
        languageBackground='#e20144'
        />
      <PortfolioItem
        backgroundColor='white'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-27+at+4.20.01+PM.png'
        icons={['React', 'HTML5', 'Ruby', 'CSS3']}
        iconColor='white'
        languageBackground='#2ab27b'
        />
      <PortfolioItem
        backgroundColor='white'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.59.11+PM.png'
        icons={['React', 'HTML5', 'Ruby', 'CSS3']}
        iconColor='white'
        languageBackground='#039be5'
        />
      <PortfolioItem
        backgroundColor='black'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-27+at+4.22.53+PM.png'
        icons={['React', 'HTML5', 'Ruby', 'CSS3']}
        iconColor='white'
        languageBackground='#2c737f'
        />
    </Wrapper>
  )
}

export default PortfolioContainer;


/*


*/
