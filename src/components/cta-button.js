import React from 'react';
import { Link } from 'gatsby';

const CtaButton = ({ text }) => {

    return (
        <button>
            <Link to='https://calendly.com/next-round/15min'>
                { text }
            </Link>
        </button>
    )
}

export default CtaButton;