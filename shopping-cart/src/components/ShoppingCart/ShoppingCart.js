import React, { useContext, useEffect, useReducer } from 'react';
import { ShoppingCartContext } from './context/shoppingCartContext';
import { ProductItem } from './ProductItem';
import { cartActions } from './actions/shoppingCartActions';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';


export const ShoppingCart = () => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { state, dispatch } = shoppingCartContext;
    const handleClearShoppingCart = () => {
        dispatch({type: cartActions.CLEAR_SHOPPING_CART});    
    };
    
    useEffect(() => {
        dispatch({type: cartActions.LOAD_ITEMS});
    }, [state.currentlyEditedItems]);
        
    
    return (
        <>
        <div>Total Items: {state.totalCount}</div>
        <button onClick={handleClearShoppingCart} disabled={state.totalCount === 0}>Clear Shopping Cart</button>
        <ul>
        { state.items.length > 0 && state.items.map(item => <ProductItem key={item.id} item={item} />) }
        </ul>
        <div>Total Price: {state.totalPrice}</div>
        </>
    );
};
