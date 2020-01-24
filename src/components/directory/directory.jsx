import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import styled from 'styled-components';

import MenuItem from '../menu-item/Menu-item';

const StyledDirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ sections }) => {
  return (
    <StyledDirectoryMenu>
      {sections.map(({ id, ...state }) => (
        <MenuItem key={id} {...state} />
      ))}
    </StyledDirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(Directory);
