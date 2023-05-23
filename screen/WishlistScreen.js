import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, state } from 'react';
import axios from 'axios';

import nikeAirMax from '../assets/NikeAir.png';
import nikewaffle from '../assets/nikeWaffle.png';
import nikeDunkHigh from '../assets/nikeDunkHigh.png';
import star from '../assets/star.png';
import home from '../assets/home_npress.png';
import transaksi from '../assets/transaksi.png';
import history from '../assets/history.png';
import love from '../assets/love_press.png';
import lovePress from '../assets/love_press.png';

const renderItem = ({ item }) => (
  <View style={{ marginBottom: 10, marginLeft: 10, flexDirection: 'row' }}>
    <ImageBackground source={{ uri: item.image }} style={{ width: 130, height: 110 }}>
      <View
        style={{
          backgroundColor: '#0D4C92',
          width: 70,
          height: 30,
          borderBottomLeftRadius: 50,
          borderTopRightRadius: 50,
          position: 'absolute',
          left: 50,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Image source={star} style={{ width: 18, height: 18, marginTop: 4 }} />
        <Text style={{ marginRight: 14, color: 'white', marginTop: 4 }}>{item.rating}</Text>
      </View>
    </ImageBackground>
    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
      <Text style={{ fontWeight: '700', marginBottom: 4, fontSize: 16 }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View>
          <Text
            style={{
              fontWeight: '500',
              marginRight: 50,
              marginBottom: 16,
              color: '#5843BE',
            }}
          >
            {item.price}
          </Text>
          <Text style={{ fontWeight: '400', marginBottom: 4, color: '#7A7E86' }}>{item.type}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={null} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
            <Image source={love} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

class WishlistScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.route.params.username,
      dataSource: [],
      wishlist: [],
    };
  }

  fetchData() {
    axios
      .all([axios.get('https://backend-uas-pam-production.up.railway.app/api/product'), axios.get('https://backend-uas-pam-production.up.railway.app/api/wishlist/' + this.state.username)])
      .then((response) => {
        this.setState({
          dataSource: response[0].data,
          wishlist: response[1].data.wishItem,
        });
      })
      .then((response) => {
        const result = this.state.dataSource.filter((el) => {
          return this.state.wishlist.find((element) => {
            return element == el.id;
          });
        });
        this.setState({ dataSource: result });
        console.log(result);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginLeft: 140, marginTop: 39 }}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>WISHLIST</Text>
          </View>
          <TouchableOpacity
            style={{ marginTop: 26, marginRight: 24 }}
            onPress={() => {
              this.props.navigation.navigate('Profile', {
                username: this.state.username,
              });
            }}
          >
            <Image
              source={{
                uri: 'https://cdn1-production-images-kly.akamaized.net/PRciRZRdN7B92z0m_gkHORceT1k=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4187840/original/046976900_1665479129-cepmek.jpg',
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ marginTop: 20 }}>
          <FlatList data={this.state.dataSource} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </ScrollView>

        <View style={styles.navContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={home} style={{ width: 24.66, height: 22.58 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Transaksi', { username: this.state.username })} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={transaksi} style={{ width: 18, height: 24 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('History', { username: this.state.username })} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={history} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Wishlist', { username: this.state.username })} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
              <Image source={lovePress} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: 40,
    marginLeft: 20,
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

export default WishlistScreen;
