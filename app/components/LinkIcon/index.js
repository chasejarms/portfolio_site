import React from 'react';
import A from '../A';
import I from '../I';

const LinkIcon = ({ href, iconClass }) => {
  return (
    <A href={href} target='_blank'>
      <I className={iconClass}></I>
    </A>
  )
}

export default LinkIcon;
