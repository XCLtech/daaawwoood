import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Product from '~/components/elements/products/DemoProduct';
import ProductGroupGridItems from '~/components/partials/product/ProductGroupGridItems';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';
import useGetProducts from '~/hooks/useGetProducts';
import { useRouter } from 'next/router';
import Axios from 'axios';
import { CartProvider } from 'react-use-cart';

const SearchPage = () => {
    const [pageSize] = useState(100);
    const [keyword, setKeyword] = useState('');
    // const { productItems, loading, getProducts } = useGetProducts();
    const Router = useRouter();
    const { query } = Router;

    function handleSetKeyword() {
        if (query && query.keyword !== '') {
            setKeyword(query.keyword);
        } else {
            setKeyword('');
        }
    }

    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState([]);

    const getProducts = async (queries) => {
        console.log(queries);
        setLoading(true);
        const response = await Axios.get(
            // `http://localhost:8080/api/v1/product?query=${queries.title_contains}`
            `https://dawoodddocker.herokuapp.com/api/v1/product?query=${queries.title_contains}`
        );

        setProductItems(response.data.data);
        setLoading(false);
    };

    useEffect(() => {
        if (query && query.keyword) {
            handleSetKeyword(query.keyword);
            const queries = {
                _limit: pageSize,
                title_contains: query.keyword,
            };
            getProducts(queries);
        }
    }, [query]);

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Search Result',
        },
    ];

    let shopItemsView, statusView;
    if (!loading) {
        if (productItems) {
            shopItemsView = (
                <ProductGroupGridItems columns={6} pageSize={pageSize} />
            );
            if (productItems.length > 0) {
                const items = productItems.map((item, index) => {
                    return (
                        <div className="col-md-3 col-sm-6 col-6">
                            <Product
                                key={index}
                                image={item?.imgUrl}
                                title={item.title}
                                price={item.price}
                                item={item}
                            />
                        </div>
                    );
                });
                shopItemsView = (
                    <div className="ps-product-items row">{items}</div>
                );
                statusView = (
                    <p>
                        <strong style={{ color: '#000' }}>
                            {productItems.length}
                        </strong>{' '}
                        record(s) found.
                    </p>
                );
            } else {
                shopItemsView = <p>No product(s) found.</p>;
            }
        } else {
            shopItemsView = <p>No product(s) found.</p>;
        }
    } else {
        statusView = <p>Searching...</p>;
    }

    return (
        <CartProvider>
            <PageContainer title={`Search results for: "${keyword}" `}>
                <div className="ps-page">
                    <BreadCrumb breacrumb={breadcrumb} />
                </div>
                <div className="container">
                    <div className="ps-shop ps-shop--search">
                        <div className="container">
                            <div className="ps-shop__header">
                                <h1>
                                    Search result for: "
                                    <strong>{keyword}</strong>"
                                </h1>
                            </div>
                            <div className="ps-shop__content">
                                {statusView}
                                {shopItemsView}
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletters layout="container" />
            </PageContainer>
        </CartProvider>
    );
};

export default SearchPage;
