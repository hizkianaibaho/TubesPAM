import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import React, { useState, state } from 'react';
import _ from 'lodash';
import { Feather } from '@expo/vector-icons';

import search from '../assets/Vector.png';
import puma from '../assets/puma.png';
import nike from '../assets/nike.png';
import adidas from '../assets/adidas.png';
import nikeAirMax from '../assets/NikeAir.png';
import nikewaffle from '../assets/nikeWaffle.png';
import nikeDunkHigh from '../assets/nikeDunkHigh.png';
import star from '../assets/star.png';
import home from '../assets/home.png';
import transaksi from '../assets/transaksi.png';
import history from '../assets/history.png';
import love from '../assets/love.png';
import DetailScreen from './DetailScreen';

const BottomFlatList = () => {
  return <View style={{ marginTop: 50 }}></View>;
};

class SeacrhBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      cart: [],
      query: '',
      fullData: [],
    };
  }
  fetchData() {
    // axios.all([
    //   axios.get('https://backend-uas-pam-production.up.railway.app/api/product'),
    //   axios.get('https://backend-uas-pam-production.up.railway.app/api/cart/' + this.state.username + '/')
    // ])
    // .then((response) => {
    //   this.setState({ isLoading: false, dataSource: response[0].data, cart: response[1].data });
    // })
    axios
      .get('https://backend-uas-pam-production.up.railway.app/api/product')
      .then((response) => {
        this.setState({ dataSource: response.data });
        this.setState({ fullData: response.data });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  handleSearch = (text) => {
    const formattedQuery = text;
    const dataSource = _.filter(this.state.fullData, (data) => {
      if (data.name.includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    this.setState({ dataSource, query: text });
  };

  getpress = (item) => {
    this.props.navigation.navigate('Detail', {
      id: item.id,
      itemName: item.name,
      itemImage: item.image,
      itemPrice: item.price,
      itemDetail: item.detail,
      itemRating: item.rating,
      itemNameProduct: item.nameProduct,
      itemTypeProduct: item.typeProduct,
    });
  };
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 10, marginLeft: 24, flexDirection: 'row' }}
        onPress={() =>
          this.props.navigation.navigate('Detail', {
            itemId: item.name,
            itemImage: item.image,
            itemPrice: item.price,
            itemDetail: item.detail,
            itemRating: item.rating,
            itemGender: item.type,
            itemNameProduct: item.nameProduct,
            itemTypeProduct: item.typeProduct,
          })
        }
      >
        <ImageBackground source={{ uri: item.image }} style={{ width: 130, height: 110 }}>
          <View style={{ backgroundColor: '#0D4C92', width: 70, height: 30, borderBottomLeftRadius: 50, borderTopRightRadius: 50, position: 'absolute', left: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Image source={star} style={{ width: 18, height: 18, marginTop: 4 }} />
            <Text style={{ marginRight: 14, color: 'white', marginTop: 4 }}>{item.rating}</Text>
          </View>
        </ImageBackground>
        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
          <Text style={{ fontWeight: '500', marginBottom: 4 }}>{item.name}</Text>
          <Text style={{ fontWeight: '500', marginBottom: 16, color: '#5843BE' }}>{item.price}</Text>
          <Text style={{ fontWeight: '400', marginBottom: 4, color: '#7A7E86' }}>{item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
        <TextInput underlineColorAndroid="transparent" style={styles.input} placeholder={'find your shoes'} onChangeText={this.handleSearch} status="info" />
        <View style={{ marginTop: 35, marginRight: 24 }}>
          <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 20 }}>
          <FlatList data={this.state.dataSource} renderItem={this._renderItem} ListFooterComponent={<BottomFlatList />} ListHeaderComponent={this.renderHeader} />
        </ScrollView>
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
  headerText: {
    fontSize: 24,
  },
  subHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText2: {
    marginTop: 36,
    marginLeft: 24,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: 200,
    marginHorizontal: 24,
    marginTop: 24,
  },
  brandFont: {
    fontSize: 16,
    color: 'white',
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

export default SeacrhBar;
