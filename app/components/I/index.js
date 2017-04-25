import styled from 'styled-components';

const I = styled.i`
  pointer: cursor;
  font-size: ${props => props.fontSize || '30px'};
  color: ${props => props.color || props.theme.primaryOne};

  &:hover {
    transform: scale(${props => props.scale || 1.2});
  }
`

export default I;
