import styled from 'styled-components';

const I = styled.i`
  pointer: cursor;
  font-size: 30px;
  color: ${props => props.theme.primaryOne};

  &:hover {
    transform: scale(1.2);
  }
`

export default I;
