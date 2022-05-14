import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
// import ProductWidgets from '~/components/partials/product/ProductWidgets';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
// import CustomerBought from '~/components/partials/product/CustomerBought';
// import RelatedProduct from '~/components/partials/product/RelatedProduct';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
// import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import PageContainer from '~/components/layouts/PageContainer';
// import Newletters from '~/components/partials/commons/Newletters';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import Axios from 'axios';
import { CartProvider } from 'react-use-cart';

const ProductDefaultPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    // console.log('asdasdasdasd');

    async function getProduct(pid) {
        // setLoading(true);
        // const responseData = await ProductRepository.getProductsById(pid);
        // if (responseData) {
        //     setProduct(responseData);
        //     setTimeout(
        //         function () {
        //             setLoading(false);
        //         }.bind(this),
        //         250
        //     );
        // }
        setLoading(true);
        const responseData = await Axios.get(
            // `http://localhost:8082/api/v1/product/${pid}`
            // `https://dawoodbackend.herokuapp.com/api/v1/product/${pid}`
            // `http://localhost:8080/api/v1/product/${pid}`
            `https://dawoodddocker.herokuapp.com/api/v1/product/${pid}`
        );
        // console.log({ responseData });
        if (responseData) {
            setProduct({
                ...responseData.data.data,
                images: [responseData.data.data?.imgUrl],
            });
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },

        {
            text: product ? product.title : 'Loading...',
        },
    ];
    // Views
    let productView, headerView;
    if (!loading) {
        if (product) {
            productView = <ProductDetailFullwidth product={product} />;
            headerView = (
                <>
                    <HeaderProduct product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            headerView = (
                <>
                    {/* <HeaderDefault />
                    <HeaderMobileProduct /> */}
                </>
            );
        }
    } else {
        productView = <SkeletonProductDetail />;
    }

    return (
        <CartProvider>
            <PageContainer
                header={headerView}
                title={product ? product.title : 'Loading...'}>
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">{productView}</div>
                            {/* <div className="ps-page__right">
                                <ProductWid gets />
                            </div> */}
                        </div>

                        {/* <CustomerBought
                            layout="fullwidth"
                            collectionSlug="deal-of-the-day"
                        /> */}
                        {/* <RelatedProduct collectionSlug="shop-recommend-items" /> */}
                    </div>
                </div>
                {/* <Newletters /> */}
            </PageContainer>
        </CartProvider>
    );
};

export default ProductDefaultPage;
