import { createContext } from 'react';

const shoppingCartContext = createContext([{}, () => {}]);

export { shoppingCartContext as ShoppingCartContext};

