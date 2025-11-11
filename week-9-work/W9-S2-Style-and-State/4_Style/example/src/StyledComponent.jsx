import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: lightcoral;
  padding: 10px;
  border-radius: 5px;
  color: darkred;
  font-weight: bold;
`;

const StyledComponent = () => {
  return <StyledDiv>This is styled using styled-components</StyledDiv>;
};

export default StyledComponent;
