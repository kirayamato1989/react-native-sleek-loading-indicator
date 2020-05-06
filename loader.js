'use strict';

let React = require('react');
let {
   View,
   Text,
   ActivityIndicator,
   StyleSheet
} = require('react-native');
let styles = require('./styles');

export default class LoadingIndicator extends React.Component {
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
