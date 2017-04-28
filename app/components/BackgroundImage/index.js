import styled from 'styled-components';
import Wrapper from '../Wrapper';
import React from 'react';
import A from '../A';

const StyledImage = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  flex: 1;
  background-position-x: ${props => props.backgroundPositionX || 'center'};
  background-position-y: ${props => props.backgroundPositionY || 'center'};
  transition: all .3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
const BackgroundImage = ({backgroundColor, imageUrl, imageLink}) => {
  return (
    <A href={imageLink} target='_blank'>
      <Wrapper display='block' backgroundColor={`${backgroundColor}`} flex='0 0'>
        <StyledImage
          src={imageUrl}
          />
      </Wrapper>
    </A>
  )
}

export default BackgroundImage;
