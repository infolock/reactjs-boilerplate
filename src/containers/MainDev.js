import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DevTools from '../common/devTools';

const routerDataNameMap = {
    'HOME': '/home'
    // .. other routes could go here ...
    // or not.
    // whatever floats your boat.
};

class MainDev extends React.Component {
    static propTypes() {
        return {
            children: React.PropTypes.node
        };
    }

    render() {
        return (
            <div className="main-wrapper">
                { this.props.children }
                <DevTools />
            </div>
        );
    }
}

MainDev.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    const ActionCreators = {
        // ...SomeActionCreator
    };

    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDev);

/**
 * The Primary (Production) Container
 * @component Main
 */
