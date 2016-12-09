import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const routerDataNameMap = {
    'HOME': '/home'
    // .. other routes go here ..
};

class Main extends Component {
    static propTypes() {
        return {
            children: PropTypes.node
        };
    }

    render() {
        return (
            <div className="main-wrapper">
                { this.props.children }
            </div>
        );
    }
}

Main.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    // Whatever props you expect from the reducers...
});

const mapDispatchToProps = (dispatch) => {
    const ActionCreators = {
        // ...SomeActionCreator(s)
    };

    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * The Primary (Production) Container
 * @component Main
 */
