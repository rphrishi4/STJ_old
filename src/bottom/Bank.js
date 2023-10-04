import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button ,Card, Icon } from 'react-native-elements';

const BankInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Image
          source={require('../assests/sbi-logo.png')} // Add SBI logo image
          style={styles.logo}
        />
        <Text style={styles.bankName}>State Bank of India</Text>
        <View style={styles.upiInfo}>
          <Image
            source={require('../assests/upi-logo.png')} // Add UPI logo image
            style={styles.upiLogo}
          />
          <Text style={styles.upiId}>sbi.upi.id@sbibank</Text>
        </View>
      </Card>

      <Card containerStyle={styles.card}>
        <Image
          source={require('../assests/hdfc-logo.png')} // Add HDFC logo image
          style={styles.logo}
        />
        <Text style={styles.bankName}>HDFC Bank</Text>
        <View style={styles.upiInfo}>
          <Image
            source={require('../assests/upi-logo.png')} // Add UPI logo image
            style={styles.upiLogo}
          />
          <Text style={styles.upiId}>hdfc.upi.id@hdfcbank</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: '100%',
    margin: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius:10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  bankName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color:'skyblue',
  },
  upiInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  upiLogo: {
    width: 30,
    height: 30,
  },
  upiId: {
    marginLeft: 10,
    fontSize: 16,
    color:'black',
  },
});

export default BankInfoScreen;
