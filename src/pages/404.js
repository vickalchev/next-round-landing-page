import React from 'react';
import { Link } from 'gatsby'

const NotFound = () => {
    return (
        <div>
            <h1>
                Oh No!
            </h1>
            <p>
                This page got lost in the woods! 
                Check its address or go back <Link to='../'>home</Link>.
            </p>
        </div>
    )
    }

    export default NotFound;
