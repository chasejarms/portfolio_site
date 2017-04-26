import styled from 'styled-components';

const H4 = styled.h4`
  font-size: 22px;
  font-family: ${props => props.theme.fontFamily};
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  font-weight: 300;
  line-height: 1.2;
  color: ${props => props.theme.primaryOne};
  padding-top: 0px;
  text-align: center;
`

export default H4;
