import {cartActions} from '../actions/shoppingCartActions';
import { items } from '../../../data/data';

const initialState = {
    items: [],
    currentlyEditedItems: [],
    totalPrice: 0,
    totalCount: 0
};

const calculateTotalPrice = (items) => items.reduce((acc, {price, quantity}) => acc += price * quantity, 0).toFixed(2);
const calculateTotalItems = (items) => items.reduce((acc, { quantity}) => acc += quantity, 0);

export const shoppingCartReducer = (state = initialState, action) => {
    const { payload } = action;
        
    switch (action.type) {   
        case cartActions.LOAD_ITEMS:
            return { ...state, items: items, totalCount: calculateTotalItems(items), totalPrice: calculateTotalPrice(items)};
        
        case cartActions.CLEAR_SHOPPING_CART:
          return {...state, ...initialState};
        
        case cartActions.CHANGE_QTY:
            return {...state, currentlyEditedItems: [...state?.currentlyEditedItems, { id: payload.id, runningQty: payload.runningQty}]};
        
        case cartActions.REMOVE_ITEM:
            const filteredItems = state.items.filter(item => item.id !== payload.id);

            return { ...state, 
                    items: filteredItems,
                    totalCount: calculateTotalItems(filteredItems),
                    totalPrice: calculateTotalPrice(filteredItems)
                   };
        
        case cartActions.ADD_ONE:
                return { ...state, currentlyEditedItems: state.currentlyEditedItems.map(item => {
                    if (item.id === payload.id) {
                        item.runningQty = payload.runningQty;
                    }
                    
                    return item;
                })};
        
        case cartActions.REMOVE_ONE:
                return { ...state, currentlyEditedItems: state.currentlyEditedItems.map(item => {
                    if (item.id === payload.id) {
                        item.runningQty = payload.runningQty;
                    } 
                    
                    return item;
                })};
        
        case cartActions.SAVE_QTY:
            const items = state.items.map(item => {
                if (item.id === payload.id) {
                    item.quantity = payload.runningQty;
                }
                
                return item;
            });
            return {...state, 
                    items, currentlyEditedItems: state?.currentlyEditedItems.filter(item => item.id !== payload.id),
                    totalCount: calculateTotalItems(items),
                    totalPrice: calculateTotalPrice(items)
                   };
        
        case cartActions.CANCEL_CHANGE_QTY:   
            return {...state, currentlyEditedItems: state?.currentlyEditedItems.filter(item => item.id !== payload.id)};
            
      default:
          return state;
  }
};
            
