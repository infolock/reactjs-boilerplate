import React, { PropTypes, Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../../components/home/';

const propTypes = {
    params: PropTypes.object.isRequired
};

const contextTypes = {
    router: PropTypes.object.isRequired
};

class HomeContainer extends Component {
    render() {
        return (
            <Home { ...this.props } />
        );
    }
}

HomeContainer.propTypes = propTypes;
HomeContainer.contextTypes = contextTypes;

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    const ActionCreators = {
        // ...SomeActionCreator
    };

    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

/**
 * The Landing Page Container
 * @component HomeContainer
 */
