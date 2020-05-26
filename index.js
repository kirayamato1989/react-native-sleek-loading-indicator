'use strict';

import React,{Component} from 'react';
import {
   View
} from 'react-native';
let styles = require('./styles');
import LoadingIndicator from './loader';
import PropTypes from 'prop-types';

class SleekLoadingIndicator extends Component{
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
