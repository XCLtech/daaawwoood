import React from 'react';

const FaqsContent = () => (
    <div className="table-responsive">
        <table className="table ps-table--faqs">
            <tbody>
                <tr>
                    {/* <td className="heading" rowSpan="3">
                        <h4>SHIPPING</h4>
                    </td> */}
                    <td className="question">
                        How Do I get registered on dawoodonline.pk website?
                    </td>
                    <td>
                        A- We have kept the registration process very simple.
                        Just go to the website and click (Register) Fill in your
                        Name, complete Address and other particulars and click
                        (Submit). You will receive a Thank You e-mail on your
                        e-mail ID. Your registration was successful.
                    </td>
                </tr>
                <tr>
                    <td className="question">Q- How do I place my order??</td>
                    <td>
                        A- Just Log into your account, browse through our listed
                        product categories, Select the items you like and place
                        them directly in the cart by clicking the (Cart) option
                        or create a Wish List by clicking the (Heart) icon at
                        the bottom of every product. Go to your cart (If you
                        have completed your shopping list) and click (Checkout).
                        (You have successfully placed your order)
                    </td>
                </tr>
                <tr>
                    <td className="question">Q- What is Wishlist..?</td>
                    <td>
                        A Wsihlst is a standby list of items that you might use
                        on a regular monthly basis. Just place your items in the
                        wish list by clicking the (heart) icon at the bottom of
                        each product of interest. This item will become part of
                        the wish list and will be available to you for any
                        subsequent or future Order. You can Add, Delete,
                        Increase or Decrease quantity in your Wish list at any
                        time.
                    </td>
                </tr>
                <tr>
                    {/* <td className="heading" rowSpan="2">
                        <h4>PAYMENT</h4>
                    </td> */}
                    <td className="question">
                        Q- How do I know the Grocery I buy from Dawood Online,
                        is of good quality..?
                    </td>
                    <td>
                        A- Although there are many varieties of products in the
                        market and we realize the fact that our customers will
                        be concerned about quality of goods, we can assure you
                        that we purchase the products directly from the renowned
                        Big Marts of Hyderabad and our Sales team will hand pick
                        the most authentic and refined products from these
                        Marts.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default FaqsContent;
