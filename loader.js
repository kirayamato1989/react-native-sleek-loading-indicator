'use strict';

import React, {Component} from 'react';
import {
   View,
   Text,
   ActivityIndicator
} from 'react-native';
let styles = require('./styles');

export default class LoadingIndicator extends Component {
   render() {
      return (
         <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>{this.props.text}</Text>
            <View style={styles.spinnerContainer}>
              <ActivityIndicator
               animating={true}
               size='large'
               color="#fff"
              />
            </View>
         </View>
      );
   }
};
