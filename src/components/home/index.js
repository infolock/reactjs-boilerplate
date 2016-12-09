import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { REACTJS_BOILERPLATE, FTW } from '../../constants/home';

const propTypes = {
    params: PropTypes.object.isRequired
};

const Home = (props) => (
    <div className="home container">
        <h1>{ REACTJS_BOILERPLATE }</h1>
        <h3>{ FTW }</h3>
    </div>
);

Home.propTypes = propTypes;

export default Home;

/**
 * Component for rendering the landing page view
 * @component Home
 */
