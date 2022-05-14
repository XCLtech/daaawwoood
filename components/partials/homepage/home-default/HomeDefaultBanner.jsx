import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
// import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';
// import { baseUrl } from '~/repositories/Repository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';
// import Grocery from '../../../../public/static/img/onlineGrocery.png';
const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState(null);
    const [promotion1, setPromotion1] = useState(null);
    const [promotion2, setPromotion2] = useState(null);

    async function getBannerItems() {
        const responseData = await MediaRepository.getBannersBySlug(
            'banner-home-fullwidth'
        );
        if (responseData) {
            setBannerItems(responseData);
        }
    }

    async function getPromotions() {
        const responseData = await MediaRepository.getPromotionsBySlug(
            'home_fullwidth_promotions'
        );
        if (responseData) {
            setPromotion1(getItemBySlug(responseData, 'main_1'));
            setPromotion2(getItemBySlug(responseData, 'main_2'));
        }
    }

    useEffect(() => {
        getBannerItems();
        getPromotions();
    }, []);

    const carouselSetting = {
        dots: false,
        infinite: true,
        // speed: 750,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    // let mainCarouselView;
    // if (bannerItems) {
    //     const carouseItems = bannerItems.map((item) => (
    //         <div className="slide-item" key={item.id}>
    //             <Link href="/shop">
    //                 <a
    //                     className="ps-banner-item--default bg--cover"
    //                     style={{
    //                         // backgroundImage: `url(${baseUrl}${item.image.url})`,
    //                         backgroundImage: `url("https://res.cloudinary.com/dv1jydljf/image/upload/v1644392273/img1_aunxhe.jpg")`,
    //                     }}
    //                 />
    //             </Link>
    //             <Link href="/shop">
    //                 <a
    //                     className="ps-banner-item--default bg--cover"
    //                     style={{
    //                         // backgroundImage: `url(${baseUrl}${item.image.url})`,
    //                         backgroundImage: `url("https://res.cloudinary.com/dv1jydljf/image/upload/v1644392273/img2_tdnses.jpg")`,
    //                     }}
    //                 />
    //             </Link>
    //         </div>
    //     ));
    const mainCarouselView = (
        <Slider {...carouselSetting} className="ps-carousel">
            {/* {carouseItems} */}
            <div>
                <a
                    className="ps-banner-item--default bg--cover"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dv1jydljf/image/upload/v1644396052/toystation_lmjvyk.jpg")`,
                    }}
                />
            </div>
            <div>
                <a
                    className="ps-banner-item--default bg--cover"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dv1jydljf/image/upload/v1644396052/H_bag_qd7t4t.jpg")`,
                    }}
                />
            </div>
            <div>
                <a
                    className="ps-banner-item--default bg--cover"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dv1jydljf/image/upload/v1644396052/jewellry-empire_immex5.jpg")`,
                    }}
                />
            </div>
        </Slider>
    );
    // console.log(mainCarouselView);
    // }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">{mainCarouselView}</div>
                <div className="ps-section__right">
                    <Promotion
                        link="#"
                        image="https://res.cloudinary.com/dv1jydljf/image/upload/v1644572425/banner_cbmmgz.jpg"
                    />
                    <Promotion
                        link="#"
                        image="https://res.cloudinary.com/dv1jydljf/image/upload/v1644572427/ban1_nth6zb.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
