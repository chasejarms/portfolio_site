import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: ${props => props.flex || '1'};
  flex-direction: ${props => props.flexDirection || 'row' };
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  position: ${props => props.position || 'static'};
  height: ${props => props.wrapperHeight || '100%'};
  width: ${props => props.wrapperWidth || '100%'};
  padding: ${props => props.padding || '0'};
  background-color: ${props => props.backgroundColor || 'inherit'}
`

export default Wrapper;
