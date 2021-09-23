import React from 'react'
import CategorySelect from './CategorySelect';
import {CartProvider} from 'react-use-cart';
import { useLocation, useParams }  from 'react-router-dom';
function category() {
  
    return (
        <div>
              <CartProvider>
                   <CategorySelect />
              </CartProvider>
        </div>
    )
}

export default category
