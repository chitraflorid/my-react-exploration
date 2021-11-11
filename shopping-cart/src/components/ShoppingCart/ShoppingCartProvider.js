import React, { useReducer } from 'react';
import { debounce } from 'lodash';

import { ShoppingCartContext } from './context/shoppingCartContext';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

export const ShoppingCartProvider = ({ children }) => {
    const initialState = {
        items: [],
        currentlyEditedItems: [],
        totalPrice: 0,
        totalCount: 0
    };

    const [state, dispatch] = useReducer(shoppingCartReducer, initialState);
    
    return (
        <ShoppingCartContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
