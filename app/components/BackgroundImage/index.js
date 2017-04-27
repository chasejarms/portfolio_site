import styled from 'styled-components';
import Wrapper from '../Wrapper';
import React from 'react';

const StyledImage = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  flex: 1;
  background-position-x: ${props => props.backgroundPositionX || 'center'};
  background-position-y: ${props => props.backgroundPositionY || 'center'};
  transition: all .3s ease-in-out;
  &:hover {
    background-size: 100%;
    background-color: black;
    opacity: .2;
    cursor: pointer;
  }
`
const BackgroundImage = (props) => {
  return (
    <Wrapper display='block' backgroundColor='black' flex='0 0'>
    <StyledImage
      src='https://s3-us-west-1.amazonaws.com/portfolio-bucket-chase-armstrong/Screen+Shot+2017-04-17+at+4.40.49+PM.png'
    />
    </Wrapper>
  )
}

export default BackgroundImage;
