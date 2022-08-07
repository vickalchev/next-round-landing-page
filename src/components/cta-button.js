import React from 'react';
import { Link } from 'gatsby';
import {
    pill,
    linkStyle,
    } from './cta-button.module.css';

const CtaButton = ({ text }) => {

    return (
        <button className={pill}>
            <Link to='https://calendly.com/next-round/15min' className={linkStyle}>
                { text }
            </Link>
        </button>
    )
}

export default CtaButton;