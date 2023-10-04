import {View, Text} from 'react-native';
import React from 'react';

const Screen4 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
      }}>
      <Text
        style={{fontSize: 30}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        SCREEN 4 Should Open
      </Text>
    </View>
  );
};

export default Screen4;
