import React, { PropTypes, Children } from 'react';
import Aside from './aside';
import H1 from '../H1';
import ProfilePicture from '../ProfilePicture';

export default class AboutMeSidebar extends React.PureComponent {
  render () {
    return (
      <Aside>
        <ProfilePicture />
        <H1>Chase Armstrong</H1>
      </Aside>
    )
  }
}
