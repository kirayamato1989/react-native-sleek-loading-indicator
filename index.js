'use strict';

let React = require('react');
let {
   View,
   Text,
   StyleSheet
} = require('react-native');
let styles = require('./styles');
let LoadingIndicator = require('./loader');
import PropTypes from 'prop-types';

class SleekLoadingIndicator extends React.Component{
  static propTypes = {
    text: PropTypes.string,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    text: 'Loading...',
    loading: true
  };

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <LoadingIndicator text={this.props.text} />
        </View>
      );
    } else {
      return null;
    }
  }
};

module.exports = SleekLoadingIndicator;
