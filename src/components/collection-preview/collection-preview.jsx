import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../collection-item/collection-item';

const StyledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </StyledCollectionPreview>
  );
};

export default CollectionPreview;
