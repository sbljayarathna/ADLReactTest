import React, { Component } from 'react';
import PinResetView from './PinResetView';
import { connect } from 'react-redux';

class PinResetContainer extends Component {
    render() {
        return <PinResetView {...this.props} />;
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
)(PinResetContainer);
