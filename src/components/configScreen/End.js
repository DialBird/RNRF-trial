import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';

class End extends React.Component {
  onButtonPress() {
    Actions.home();
  }

  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>Go Back to</Text>
        <View>
          <Button onPress={() => { Actions.tabbar({ type: 'reset' }); }}>Home</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default End;
