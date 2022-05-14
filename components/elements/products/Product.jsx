import React from 'react';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product, title, price, img }) => {
    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <img src={img} alt="product" height={150} />

                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    {title}
                    <div className="ps-product__rating"></div>

                    {price}
                </div>
            </div>
        </div>
    );
};

export default Product;
