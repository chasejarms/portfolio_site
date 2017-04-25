import styled from 'styled-components';

const Image = styled.div`
  background-image: url(${require('../../assets/profile_picture.jpg')});
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position-x: -108px;
  background-position-y: -16px;
  width: 220px;
  height: 220px;
  margin-right: auto;
  margin-left: auto;
`

export default Image;
