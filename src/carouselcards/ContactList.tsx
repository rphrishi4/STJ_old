import { ScrollView, StyleSheet, Text, View } from 'react-native'


import React from 'react'
import FastImage from 'react-native-fast-image';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Gold Rate',
      status: 'Troy Oz in USD',
      imageUrl: 'https://img.freepik.com/free-vector/treasure-box-background_23-2147937719.jpg?w=740&t=st=1695233822~exp=1695234422~hmac=c0ff2f7ba6e0e0d6113475a9489336f23d421bdb1951ccc5b01e2e0c52db8ec8',
      unitPrice: 'ABCD' //fetchMetalPrices(),
    },
    {
      uid: 2,
      name: 'Silver Rate',
      status: 'Per KG 99.99% in USD',
      imageUrl: 'https://img.freepik.com/premium-photo/ingot-metal-bar-metal-ore-material-used-general-industry_72932-2576.jpg?w=900',
      unitPrice: 'ABCD' //fetchMetalPrices(),
    },
    {
      uid: 3,
      name: 'Dollar Rate',
      status: 'USD INR',
      imageUrl: 'https://img.freepik.com/free-vector/currency-exchange_23-2147994870.jpg?w=740&t=st=1695234118~exp=1695234718~hmac=929a4f09933ec7676781499232f94d8885b73fdb805fc580beee5b8f14a387fb',
      unitPrice: 'ABCD' //fetchMetalPrices(),
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({ uid, name, status, imageUrl, unitPrice }) => (
          <View key={uid} style={styles.userCard}>
            <FastImage
              source={{
                uri: imageUrl
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
              <Text style={styles.unitPrice}>"$"+{unitPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4

  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    fontSize: 12
  },
  unitPrice: {
    fontSize: 12
  }
})