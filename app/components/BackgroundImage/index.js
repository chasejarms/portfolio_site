import styled from 'styled-components';

const BackgroundImage = styled.img`
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

export default BackgroundImage;
