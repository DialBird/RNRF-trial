import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Next = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Next</Text>
    </View>
  );
};

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

export default Next;
