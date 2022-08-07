import React from 'react';
import Layout from '../components/layout';
import './reset.css';
import {
    squareTop,

} from './index.module.css';


const Index = () => {
    return (
        <div>
            <div className={squareTop}></div>
            <Layout>
                <h1>
                    My Landing Page
                </h1>
                <p>
                    This is my landing page.
                </p>
            </Layout>
        </div>
    )
}

export default Index;