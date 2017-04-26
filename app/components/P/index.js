import styled from 'styled-components';

const P = styled.p`
  font-size: 17px;
  font-family: ${props => props.theme.fontFamily};
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  line-height: 1.2;
  padding-top: 20px;
  color: ${props => props.theme.primaryOne};
  text-align: left;
  font-weight: 300;
`

export default P;
