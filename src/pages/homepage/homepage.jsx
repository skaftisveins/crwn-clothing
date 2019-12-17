import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/directory/Directory';

// #region Styled Compontents
const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
// #endregion

const HomePage = () => (
  <StyledHomePage>
    <Directory />
  </StyledHomePage>
);

export default HomePage;
