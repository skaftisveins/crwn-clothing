import React, { useState } from 'react';
import styled from 'styled-components';

import MenuItem from '../menu-item/Menu-item';

const StyledDirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = () => {
  const [state] = useState({
    sections: [
      {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/5rSV0Jq/19.jpg',
        linkUrl: 'shop/hats'
      },
      {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        linkUrl: 'shop/jackets'
      },
      {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        linkUrl: 'shop/sneakers'
      },
      {
        id: 4,
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        linkUrl: 'shop/womens'
      },
      {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        linkUrl: 'shop/mens'
      }
    ]
  });

  return (
    <StyledDirectoryMenu>
      {state.sections.map(({ id, ...state }) => (
        <MenuItem key={id} {...state} />
      ))}
    </StyledDirectoryMenu>
  );
};

export default Directory;
