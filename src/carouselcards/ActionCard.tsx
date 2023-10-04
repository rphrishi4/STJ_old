import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View style={[ styles.flatcard]}>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Saraf Tarsewala Jewellers
            </Text>
        </View>
        <Image 
        source={{
            uri: 'https://images.jdmagicbox.com/quickquotes/images_main/timeless-antique-gold-necklace-2220011947-0psdm8bx.jpg',
          }}
        style={styles.cardImage}
        />
        
        <View style={styles.footerContainer} >
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/p/Bx93Lm3lNrp/')}
            >
                <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://saraf-tarsewala-jewellers.business.site/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    flatcard:{
        maxWidth:'100%'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        margin:10
    },
    card: {
        Width: '100%',
        height: 360,
        alignSelf: 'center',
        borderRadius: 6,
        marginVertical: 4,
        marginHorizontal: 4
    },
    elevatedCard: {
        backgroundColor: 'black',
        elevation: 3,
        shadowOffset: {
            width: 1, 
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190,
        // width:'100'
    },
    bodyContainer: {
        padding: 2
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})