import { createContext } from 'react';

import SHOP_DATA from '../../redux/shop/Shop.data';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
