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
    this.pageHeight = window.outerHeight;
    this.fakeScroll = document.getElementById('scroll-handler');
    this.canScroll = true
  }

  handleScroll(e) {

    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const down = e.deltaY > 0;
    e.stopPropagation();
    e.preventDefault();

    const { scrollPosition, scrollItems, canScroll } = this.state;

    this.canScroll = false;

    const scroll = () => {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / 2000));
      const timeFunction = time;
      this.fakeScroll.style.bottom = `${Math.ceil((this.pageHeight) / time)}px`

      const compareNumber = this.fakeScroll.style.bottom.match(/[0-9]+/)[0];
      console.log(parseInt(compareNumber), (this.state.scrollPosition + this.pageHeight));
      if (parseInt(compareNumber) === (this.state.scrollPosition)) {
        if (down && scrollPosition < ((scrollItems - 1) * this.pageHeight) ) {
          this.setState({
            scrollPosition: scrollPosition + this.pageHeight
          });
          this.canScroll = true;
        } else if (!down && scrollPosition > 0) {
          this.setState({
            scrollPosition: scrollPosition - this.pageHeight
          });
          this.canScroll = true;
        }
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();


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
