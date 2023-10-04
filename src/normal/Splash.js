// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';

// const Splash = ({navigation}) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('Parent');
//     }, 2000);
//   }, []);
//   return (
//     <View>
//       <Text>Splash</Text>
//     </View>
//   );
// };

// export default Splash;

import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';

const Splash = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation, e.g., loading data or performing app initialization
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Home');
    }, 2000); // Replace with your desired duration
  }, []); 

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://i.pinimg.com/originals/eb/d1/b0/ebd1b0026b23af3ec41263de660f410e.jpg', // Replace with your image URL
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
        onLoadEnd={() => {
          // Image has finished loading
        }}
      />
      {/* {isLoading && <ActivityIndicator size="large" color="#0000ff" />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%', // Adjust the size as needed
    height: '80%',
  },
});

export default Splash;