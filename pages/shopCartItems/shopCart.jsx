import React from 'react';
import Shop from '~/components/shopp/shopItems';
import { CartProvider } from 'react-use-cart';
const shop = () => {
    return (
        <CartProvider>
            <Shop />
        </CartProvider>
    );
};

export default shop;
