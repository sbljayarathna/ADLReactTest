import React, { Component } from 'react';
import PinView from './PinView';
import { connect } from 'react-redux';

class PinContainer extends Component {
    render() {
        return <PinView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PinContainer);
