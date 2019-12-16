import React from 'react';
import styled from 'styled-components';

// #region Styled Compontents
const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const StyledDirectoyMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledMenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;
// #endregion

const HomePage = () => (
  <StyledHomePage>
    <StyledDirectoyMenu>
      <StyledMenuItem>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </StyledMenuItem>
      <StyledMenuItem>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </StyledMenuItem>

      <StyledMenuItem>
        <div className='content'>
          <h1 className='title'>SNEAKERS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </StyledMenuItem>
      <StyledMenuItem>
        <div className='content'>
          <h1 className='title'>WOMENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </StyledMenuItem>
      <StyledMenuItem>
        <div className='content'>
          <h1 className='title'>MENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </StyledMenuItem>
    </StyledDirectoyMenu>
  </StyledHomePage>
);

export default HomePage;
