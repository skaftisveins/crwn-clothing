import React, { useState } from 'react';

import SHOP_DATA from './Shop.data';

import CollectionPreview from '../../components/collection-preview/Collection-preview';

const ShopPage = () => {
  const [state] = useState({
    collections: SHOP_DATA
  });

  const { collections } = state;

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
