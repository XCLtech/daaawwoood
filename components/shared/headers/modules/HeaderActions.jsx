import React from 'react';
import { connect } from 'react-redux';
// import Link from 'next/link';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
// import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';
import Logo from '~/components/elements/common/SuperMart';
import Link from 'next/link';

const HeaderActions = ({ ecomerce, auth }) => {
    // const { compareItems, wishlistItems } = ecomerce;
    // views
    // let headerAuthView;
    // if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
    //     headerAuthView = <AccountQuickLinks isLoggedIn={true} />;
    // } else {
    //     headerAuthView = <AccountQuickLinks isLoggedIn={false} />;
    // }
    return (
        <div className="header__actions">
            {/* <Link href="/account/compare">
                <a className="header__extra">
                    <i className="icon-chart-bars"></i>
                    <span>
                        <i>{compareItems ? compareItems.length : 0}</i>
                    </span>
                </a>
            </Link> */}
            {/* <Link href="/account/wishlist">
                <a className="header__extra">
                    <i className="icon-heart"></i>
                    <span>
                        <i>{wishlistItems ? wishlistItems.length : 0}</i>
                        <i>0</i>
                    </span>
                </a>
            </Link> */}
            <div style={{ marginRight: '100px' }}>
                <Logo />
            </div>
            <MiniCart />
            {/* {headerAuthView} */}
            <Link href="/shopCartItems/shopCart">
                <p
                    style={{
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                    }}>
                    Cart
                </p>
            </Link>
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
