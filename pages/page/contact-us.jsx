import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
// import ContactInfo from '~/components/partials/page/ContactInfo';
// import ContactForm from '~/components/partials/page/ContactForm';
// import ContactMap from '~/components/partials/page/ContactMap';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const ContactUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'ContactUs',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Contact Us">
            <div className="ps-page--single" id="contact-us">
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <ContactMap /> */}
                {/* <ContactInfo /> */}
                {/* <ContactForm /> */}
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="ps-section__content">
                            <p>Dear Customer,</p>
                            <p>
                                If you have any question or need any
                                clarification about anything related to our
                                services or if you have any suggestions for
                                improvement, please feel free and write to us on
                                our e-mail address support@dawoodonline.pk or
                                call us / send SMS or use whats app to express
                                yourself using our Contact Number 0318 8409160.
                            </p>
                            <p>
                                We will be happy to reply to your concerns
                                within;
                            </p>
                            - 12 - 24 hours for e-mail queries <br /> - on the
                            spot response (from 11.am till 5 pm.) on Voice
                            Calls. on all week days.
                        </div>
                    </div>
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default ContactUsPage;
