import React from 'react';
import PortfolioItem from '../PortfolioItem';
import Wrapper from '../Wrapper';
import scrollIt from '../../../test.js';

// test out in here
// add in element and see if you scroll to it

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrollPosition: 0,
      scrollItems: 4
    }
  }

  componentDidMount() {
    this.pageHeight = document.getElementsByClassName('eDINXw')[0].clientHeight;
    this.fakeScroll = document.getElementById('scroll-handler');
    this.canScroll = true
  }

  handleScroll(e) {
    const downScroll = e.deltaY > 0;
    e.stopPropagation();
    e.preventDefault();

    if (this.canScroll) {
      console.log(downScroll);
      this.canScroll = false;
      this._scrollToPosition(downScroll);
    }
  }

  _scrollToPosition(downScroll) {
    window.setTimeout(() => {
      this.canScroll = true;
    }, 1000);

    if (downScroll) {
      this.fakeScroll.style.top = `-${this.pageHeight}px`;
    } else {
      this.fakeScroll.style.top = '0px';
    }
  }

  _recursiveScrolling() {

  }

  render() {
    return (
      <Wrapper display='block' height='100vh' overflowY='scroll' onWheel={this.handleScroll}>
        <Wrapper position='relative' display='block' id='scroll-handler'>
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
      </Wrapper>
    )
  }
}

export default PortfolioContainer;


/*


*/
