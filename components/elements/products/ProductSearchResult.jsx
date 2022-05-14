import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';
import useProduct from '~/hooks/useProduct';

const ProductSearchResult = ({ product }) => {
    console.log(product);
    // const { thumbnailImage, price, title } = useProduct();

    return (
        <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <div
                className="ps-product ps-product--wide ps-product--search-result"
                style={{ cursor: 'pointer' }}>
                <div className="ps-product__thumbnail">
                    {/* <a>{thumbnailImage(product)}</a> */}
                    <img src={product.imgUrl} alt="product" />
                </div>
                <div className="ps-product__content">
                    {/* {title(product)} */}
                    {product.title}
                    <div className="ps-product__rating">
                        {/* <Rating /> */}
                        {/* <span>{product.ratingCount}</span> */}
                    </div>
                    {/* {price(product)} */}
                    {product.price}
                </div>
            </div>
        </Link>
    );
};
export default ProductSearchResult;
