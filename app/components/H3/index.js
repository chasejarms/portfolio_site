import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 25px;
  font-family: ${props => props.theme.fontFamily};
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  font-weight: 500;
  line-height: 1.2;
  color: ${props => props.theme.primaryOne};
  padding: 30px 0 10px 0;
  text-align: center;
`

export default H3;
