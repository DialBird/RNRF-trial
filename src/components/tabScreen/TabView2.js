import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TabView2 extends React.Component {
  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});

export default TabView2;
