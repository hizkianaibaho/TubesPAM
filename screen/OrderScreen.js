import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, state } from 'react';

import nikeAirMax from '../assets/NikeAir.png';
import nikewaffle from '../assets/nikeWaffle.png';
import star from '../assets/star.png';
import back from '../assets/btn_back.png';
import location from '../assets/location.png';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
const shoesData = [
  {
    id: '1',
    name: 'Nike Air Max Pre-Day SE',
    price: 'Rp 2,329,000',
    type: "Men's Shoes",
    rating: '4/5',
    image: nikeAirMax,
  },
  {
    id: '2',
    name: 'Nike Waffle One',
    price: 'Rp 1,499,000',
    type: "Woman's Shoes",
    rating: '4.5/5',
    image: nikewaffle,
  },
];

const renderItem = ({ item }) => (
  <View style={{ marginBottom: 10, marginLeft: 10, flexDirection: 'row' }}>
    <ImageBackground source={item.image} style={{ width: 130, height: 110 }}>
      <View style={{ backgroundColor: '#0D4C92', width: 70, height: 30, borderBottomLeftRadius: 50, borderTopRightRadius: 50, position: 'absolute', left: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Image source={star} style={{ width: 18, height: 18, marginTop: 4 }} />
        <Text style={{ marginRight: 14, color: 'white', marginTop: 4 }}>{item.rating}</Text>
      </View>
    </ImageBackground>
    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
      <Text style={{ fontWeight: '700', marginBottom: 4, fontSize: 16 }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View>
          <Text style={{ fontWeight: '500', marginRight: 15, marginBottom: 16, color: '#5843BE' }}>{item.price}</Text>
          <Text style={{ fontWeight: '400', marginBottom: 4, color: '#7A7E86' }}>{item.type}</Text>
        </View>
        <View>
          <JumlahItem />
        </View>
      </View>
    </View>
  </View>
);

class OrderScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginLeft: 24 }}>
          <TouchableOpacity style={{ marginTop: 40 }} onPress={() => this.props.navigation.navigate('Home')}>
            <Image source={back} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView style={{ marginTop: 20 }}>
            <FlatList data={shoesData} renderItem={renderItem} keyExtractor={(item) => item.id} />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.label}>Alamat</Text>
          <View style={styles.field}>
            <TextInput style={{ width: 300, paddingRight: 15, paddingBottom: 50 }} onChangeText={null} placeholder={'Alamat'} />
            <TouchableOpacity>
              <Image source={location} style={{ width: 40, height: 40, marginLeft: 240 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginHorizontal: 30, marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold' }}>Ringkasan Belanja</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Total Harga</Text>
            <Text>Rp 3,000,000</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Total Ongkos Kirim</Text>
            <Text>Rp 100,000</Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Total Tagihan</Text>
            <Text>Rp 3,100,000</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} style={styles.button}>
            <Text style={{ marginTop: 6, fontSize: 20, color: 'white', fontWeight: 'bold' }}>Buat Pesanan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export function JumlahItem() {
  const [jumlah, ubahJumlah] = useState(1);
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => ubahJumlah(jumlah - 1)} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
        <Image source={minus} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <Text style={{ marginTop: 13 }}>{jumlah}</Text>
      <TouchableOpacity onPress={() => ubahJumlah(jumlah + 1)} style={styles.icon} android_riple={{ borderless: true, radius: 50 }}>
        <Image source={plus} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
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
  icon: {
    padding: 14,
  },
  label: {
    marginTop: 10,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  field: {
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    padding: 7,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0D4C92',
    width: 300,
    height: 39,
    borderRadius: 10,
  },
});

export default OrderScreen;
