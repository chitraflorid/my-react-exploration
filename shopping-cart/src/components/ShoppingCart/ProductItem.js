import React, { useContext, useEffect, useRef, useState } from 'react';
import { ShoppingCartContext } from './context/shoppingCartContext';
import { cartActions } from './actions/shoppingCartActions';

export const ProductItem = ({item}) => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { state: { totalCount, totalPrice, currentlyEditedItems}, dispatch} = shoppingCartContext;  
    let runningQty = useRef();
    let runningPrice = useRef();
    let isEditable = false;
    let qtyAction = '';
    
    const [isRemoveDisabled, setRemoveDisabled] = useState(false);
    const [isSaveDisabled, setSaveDisabled] = useState(true);
    
    useEffect(()=>{
        runningQty.current = { value: item.quantity};
        runningPrice.current = item.price;
    },[]);
       
    useEffect(() => {
        isEditable = currentlyEditedItems.findIndex(ele => ele.id === item.id) !== -1;
    }, [currentlyEditedItems]);
  
    const handleQtyChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    
    const handleAddOne = (e) => {
        e.stopPropagation();
        runningQty.current.value += 1;
        calculateItemPrice();
        qtyAction = cartActions.ADD_ONE;
        setSaveDisabled(false);
        dispatch({type: cartActions.ADD_ONE, payload: {id: item.id, runningQty: runningQty.current.value}});        
    };

    const handleRemoveOne = () => {
        if (runningQty.current.value === 0) {
            setRemoveDisabled(true);
            return;
        }
        
        setSaveDisabled(false);
        runningQty.current.value = runningQty.current.value - 1;
        calculateItemPrice();
        dispatch({type: cartActions.REMOVE_ONE, payload: { id: item.id, runningQty: runningQty.current.value}});
    };
    
    const calculateItemPrice = () => {
        runningPrice.current = item.price * runningQty.current.value;
        runningPrice.current = runningPrice.current.toFixed(2);
    };

    const handleSaveQtyChange = () => {
        dispatch({type: cartActions.SAVE_QTY,payload: { id: item.id, runningPrice: runningPrice.current, runningQty: runningQty.current.value}});
    };
    
    const handleCancelQtyChange = () => {
        dispatch({type: cartActions.CANCEL_CHANGE_QTY, payload: {id: item.id}});
    };

    const handleRemoveItem = () => {
      dispatch({type: cartActions.REMOVE_ITEM, payload:{id: item.id}});  
    };
        
    const handleChangeQty = () => {
        dispatch({type: cartActions.CHANGE_QTY, payload: {id: item.id, runningQty: runningQty.current.value}});  
    }

    const showPrice = (() => {
        if (currentlyEditedItems.findIndex(ele => ele.id === item.id) !== -1) {
            return (
                <div><span>{runningPrice.current}</span></div>
            );
        }  else {
            return (
                <div><span>{item.quantity} x {item.price} = {(item.quantity * item.price).toFixed(2)}</span></div>
            );
        }
    })();
    
    
    const showEditQty = (() => {
        const isEditableIndx = currentlyEditedItems.findIndex(ele => ele.id === item.id);
        if (isEditableIndx !== -1) {
            return (
                <div>
                Quantity: <input onChange={handleQtyChange}  value={currentlyEditedItems[isEditableIndx].runningQty} type="number" />
                    <button onClick={handleAddOne}>Add One</button>
                    <button onClick={handleRemoveOne} disabled={isRemoveDisabled}>Remove One</button>
                    <button onClick={handleSaveQtyChange} disabled={isSaveDisabled}>Save</button>
                    <button onClick={handleCancelQtyChange}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={handleChangeQty}>Change Quantity</button>
                    <button onClick={handleRemoveItem}>Remove</button>
                </div>
            );
        }
    })();
    
    return (
        <li key={item.id}>
            <h3>{item.name}</h3>
            { showPrice }
            { showEditQty }
        </li>
    );
};
