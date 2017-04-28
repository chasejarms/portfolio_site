import React from 'react';
import PortfolioItem from '../PortfolioItem';
import Wrapper from '../Wrapper';

const PortfolioContainer = (props) => {
  return (
    <Wrapper display='block' height='100vh' overflowY='scroll'>
      <PortfolioItem
        backgroundColor='#13131f'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.40.49+PM.png'
        icons={['React', 'Babel', 'HTML5', 'CSS3']}
        iconColor='white'
        languageBackground='#e20144'
        imageLink='http://www.babelr.com/'
        />
      <PortfolioItem
        backgroundColor='white'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.59.11+PM.png'
        icons={['Javascript', 'HTML5', 'React', 'CSS3']}
        iconColor='white'
        languageBackground='#039be5'
        imageLink='http://www.materialyouandi.com/'
        />
      <PortfolioItem
        backgroundColor='white'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-27+at+4.20.01+PM.png'
        icons={['Rails', 'React', 'Ruby', 'CSS3']}
        iconColor='white'
        languageBackground='#2ab27b'
        imageLink='http://www.quack.today/#/chat/general'
        />
      <PortfolioItem
        backgroundColor='black'
        imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-27+at+4.31.55+PM.png'
        icons={['HTML5', 'CSS3', 'Chrome', 'Firefox']}
        iconColor='white'
        languageBackground='#2c737f'
        imageLink='https://shopblushandbrulee.com/'
        />
    </Wrapper>
  )
}

export default PortfolioContainer;


/*


*/
