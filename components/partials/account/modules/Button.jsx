import React from 'react';
import { connect } from 'react-redux';
import FormCheckoutInformation from './FormCheckoutInformation';

const Button = ({ onclick, text, submit }) => {
    return (
        <div className="ps-block__footer d-flex justify-content-center">
            <button
                onClick={onclick}
                style={{ width: '100%', color: 'white' }}
                className="ps-btn">
                {text}
            </button>
        </div>
    );
};

export default Button;
