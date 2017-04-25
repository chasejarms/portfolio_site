import styled from 'styled-components';

const BackgroundImage = styled.img`
  background-image: url(${props => props.backgroundImage});
  background-repeat: ${props => props.backgroundRepeat || 'no-repeat'};
  background-size: ${props => props.backgroundSize || 'cover'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-position-x: ${props => props.backgroundPositionX || 'right'};
  background-position-y: ${props => props.backgroundPositionY || 'right'};
`

export default BackgroundImage;
