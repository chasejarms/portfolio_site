import styled from 'styled-components';

const Image = styled.div`
  background-image: url(${require('../../assets/profile_picture.jpg')});
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position-x: -91px;
  background-position-y: -10px;
  width: 260px;
  height: 260px;
`

export default Image;
