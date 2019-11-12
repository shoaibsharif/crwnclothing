import React, { useState } from 'react';
import SHOP_DATA from './shop.data';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return <div>Shop Page</div>;
};

export default ShopPage;
