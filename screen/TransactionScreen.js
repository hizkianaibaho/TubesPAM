import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, state } from 'react';

import nikeAirMax from '../assets/NikeAir.png';
import nikewaffle from '../assets/nikeWaffle.png';
import nikeDunkHigh from '../assets/nikeDunkHigh.png';
import star from '../assets/star.png';
import home from '../assets/home_npress.png';
import transaksi from '../assets/transaksi_press.png';
import history from '../assets/history.png';
import love from '../assets/love.png';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';

const shoesData = [];

function TransactionScreen({ route, navigation }) {
  const { itemId, itemName, itemImage, itemRating, itemPrice, itemDetail, itemNameProduct, itemTypeProduct, itemGender } = route.params;
  shoesData.push(route.params);
  console.log(shoesData);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10, marginLeft: 10, flexDirection: 'row' }}>
      <ImageBackground source={{ uri: item.itemImage }} style={{ width: 130, height: 110 }}>
        <View style={{ backgroundColor: '#0D4C92', width: 70, height: 30, borderBottomLeftRadius: 50, borderTopRightRadius: 50, position: 'absolute', left: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Image source={star} style={{ width: 18, height: 18, marginTop: 4 }} />
          <Text style={{ marginRight: 14, color: 'white', marginTop: 4 }}>{item.itemRating}</Text>
        </View>
      </ImageBackground>
      <View style={{ flexDirection: 'column', marginLeft: 20 }}>
        <Text style={{ fontWeight: '700', marginBottom: 4, fontSize: 16 }}>{item.id}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View>
            <Text style={{ fontWeight: '500', marginRight: 15, marginBottom: 16, color: '#5843BE' }}>{item.itemPrice}</Text>
            <Text style={{ fontWeight: '400', marginBottom: 4, color: '#7A7E86' }}>{item.itemGender}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={null} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={minus} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <Text style={{ marginTop: 13 }}>1</Text>
            <TouchableOpacity onPress={null} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={plus} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ marginLeft: 135, marginTop: 65 }}>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>KERANJANG</Text>
        </View>
        <View style={{ marginTop: 50, marginRight: 24 }}>
          <Image
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/PRciRZRdN7B92z0m_gkHORceT1k=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4187840/original/046976900_1665479129-cepmek.jpg',
            }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>
      </View>

      <ScrollView style={{ marginTop: 20 }}>
        <FlatList data={shoesData} renderItem={renderItem} />
      </ScrollView>

      <View>
        <TouchableOpacity onPress={null} style={styles.checkoutButton}>
          <Text style={{ marginTop: 6, fontSize: 20, color: 'white', fontWeight: 'bold' }}>Checkout (6)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
            <Image source={home} style={{ width: 24.66, height: 22.58 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Transaksi')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
            <Image source={transaksi} style={{ width: 18, height: 24 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
            <Image source={history} style={{ width: 27, height: 27 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
            <Image source={love} style={{ width: 27, height: 27 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  checkoutButton: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#0D4C92',
    width: 228,
    height: 39,
    bottom: 70,
    borderRadius: 15,
    marginLeft: 60,
  },
  navContainer: {
    position: 'absolute',

    alignItems: 'center',
    bottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#F6F7F8',
    width: '90%',
    justifyContent: 'space-evenly',
    marginLeft: 24,
    borderRadius: 40,
  },
  icon: {
    padding: 14,
  },
});

export default TransactionScreen;
