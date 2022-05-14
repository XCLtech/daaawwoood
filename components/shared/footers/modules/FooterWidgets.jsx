import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">CONTACT US</h4>
            <div className="widget_content">
                <p>Free support line</p>
                <h3>03188409160</h3>
                <p>
                    Hyderabad, Sindh
                    <br />
                    <a href="mailto:contact@dawood-online.co">
                        Support@dawoodonline.pk
                    </a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <br />
            <p>Powered by Xcl Technologies</p>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">CUSTOMER SERVICE</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about">
                        <a>About Us</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/contact-us">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">INFORMATION</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/shipping-policy">
                        <a>Shipping Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/return-policy">
                        <a>Return Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/term-and-condition">
                        <a>Terms & Condition</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">EXTRAS</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/faqs">
                        <a>FAQs</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
