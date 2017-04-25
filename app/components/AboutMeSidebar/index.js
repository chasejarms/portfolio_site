import React, { PropTypes, Children } from 'react';
import Aside from './aside';
import Wrapper from '../Wrapper';
import H3 from '../H3';
import H4 from '../H4';
import P from '../P';
import LinkIcon from '../LinkIcon';
import ProfilePicture from '../ProfilePicture';

export default class AboutMeSidebar extends React.PureComponent {
  render () {
    return (
      <Aside>
        <div>
          <ProfilePicture />
          <H3>Chase Armstrong</H3>
          <H4>Software Engineer</H4>
          <P>
            I love golfing, spending time with friends and family, and watching the Utah Jazz.
            I find happiness in pushing myself to be the best software engineer I can be and in making those around me laugh.
          </P>
          <P>
            From a professional standpoint, I'm addicted to React with Redux
            and would love to contribute to the core at some point. I also have
            experience with Ruby on Rails, SQL, HTML5, and CSS3.
          </P>
        </div>
        <Wrapper flexDirection='row' alignItems='flex-end'>
          <Wrapper justifyContent='space-between'>
            <LinkIcon href='https://github.com/chasejarms' iconClass='fa fa-github'></LinkIcon>
            <LinkIcon href='https://www.linkedin.com/in/chasearmstrong/' iconClass='fa fa-linkedin'></LinkIcon>
            <LinkIcon href='mailto:chasejarms@gmail.com' iconClass='fa fa-envelope'></LinkIcon>
            <LinkIcon href='https://twitter.com/chasejarms' iconClass='fa fa-twitter'></LinkIcon>
          </Wrapper>
        </Wrapper>
      </Aside>
    )
  }
}
