import React from 'react';
import PortfolioItem from '../PortfolioItem';
import Wrapper from '../Wrapper';
import scrollIt from '../../../test.js';

// test out in here
// add in element and see if you scroll to it

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
      scrollItems: 4
    }
    this.handleScroll = this.handleScroll.bind(this);
    this._canScrollDown = this._canScrollDown.bind(this);
    this._canScrollUp = this._canScrollUp.bind(this);
    this._scrollToPosition = this._scrollToPosition.bind(this);
    this._recursiveScrollingDown = this._recursiveScrollingDown.bind(this);
    this._recursiveScrollingUp = this._recursiveScrollingUp.bind(this);
    this._easeInOutQuint = this._easeInOutQuint.bind(this);
  }

  componentDidMount() {
    this.pageHeight = document.getElementsByClassName('eDINXw')[0].clientHeight;
    this.fakeScroll = document.getElementById('scroll-handler');
    this.fakeScroll.style.top = '0px';
    this.canScroll = true
    this.startTime = 0;
  }

  handleScroll(e) {
    const downScroll = e.deltaY > 0;
    e.stopPropagation();
    e.preventDefault();


    if (this.canScroll) {
      this.startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      this.canScroll = false;
      this._scrollToPosition(downScroll);
    }
  }

  _scrollToPosition(downScroll) {
    const { scrollPosition } = this.state;

    if (downScroll && this._canScrollDown()) {
      this._recursiveScrollingDown();
    } else if (!downScroll && this._canScrollUp()){
      this._recursiveScrollingUp();
    } else {
      this.canScroll = true;
    }
  }

  _recursiveScrollingDown() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = this._easeInOutQuint((now - this.startTime) / 800);
    let newScrollPosition = Math.floor(this.state.scrollPosition - (this.pageHeight * time));
    if (newScrollPosition < this.state.scrollPosition - this.pageHeight) {
      newScrollPosition = this.state.scrollPosition - this.pageHeight;
    }

    this.fakeScroll.style.top = `${newScrollPosition}px`;
    if (newScrollPosition === this.state.scrollPosition - this.pageHeight) {
      this.setState({
        scrollPosition: this.state.scrollPosition - this.pageHeight
      })
      window.setTimeout(() => {
        this.canScroll = true;
      }, 500);
      return;
    }

    requestAnimationFrame(this._recursiveScrollingDown);
  }

  _recursiveScrollingUp() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = this._easeInOutQuint((now - this.startTime) / 600);
    let newScrollPosition = Math.floor(this.state.scrollPosition + (this.pageHeight * time));
    if (newScrollPosition > this.state.scrollPosition + this.pageHeight) {
      newScrollPosition = this.state.scrollPosition + this.pageHeight;
    }

    this.fakeScroll.style.top = `${newScrollPosition}px`;
    if (newScrollPosition === this.state.scrollPosition + this.pageHeight) {
      this.setState({
        scrollPosition: this.state.scrollPosition + this.pageHeight
      })
      window.setTimeout(() => {
        this.canScroll = true;
      }, 500);
      return;
    }

    requestAnimationFrame(this._recursiveScrollingUp);
  }

  _easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
  }

  _canScrollDown() {
    return this.state.scrollPosition !== -((this.state.scrollItems - 1) * this.pageHeight);
  }

  _canScrollUp() {
    return this.state.scrollPosition !== 0;
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
            imageUrl='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-30+at+4.08.22+PM.png'
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
