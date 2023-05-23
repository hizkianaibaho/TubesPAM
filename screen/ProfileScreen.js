import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import axios from 'axios';
import back from '../assets/btn_back.png';

const fetchData = (username) => {
	axios.get('https://backend-uas-pam-production.up.railway.app/api/user/' + username)
		.then((response) => {
			return response;
		})
		.catch((e) => {
			console.error(e.message);
		});
}

export const ProfileScreen = ({ route, navigation }) => {
	const [data, setData] = useState([]);

	React.useEffect(() => {
		const response = fetchData(route.params.username);
		setData(response);
	})

	return (
		<ScrollView style={{ flex: 1 }}>
			<TouchableOpacity style={{ marginTop: 30 ,marginLeft: 24}} onPress={() => navigation.goBack()}>
              <Image source={back} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>

			<Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20}}>Profile</Text>

			<Image
				style={{alignSelf: "center", width:150, height:150, marginTop: 25}}
				source={require("../assets/user_profile.png")}
			/>

			<Text style={{fontSize: 20, fontWeight:"bold",alignSelf: "center", marginTop: 20}}>{route.params.username}</Text>
			<Text style={{fontSize: 16,alignSelf: "center", marginTop: 5}}>dilancepmek22@gmail.com</Text>

			<TouchableOpacity
				style={{alignSelf:"center",marginTop: 5, backgroundColor:"#0D4C92", borderRadius: 20}}
				onPress={() =>
					navigation.navigate("Edit Profil", {
						nama: "Dilan",
						alamat: "Way Huwi, Lampung Selatan, Lampung, Indonesia",
					})
				}
			>
				<Text style={{fontSize: 16 ,alignSelf: "center", paddingHorizontal: 100, paddingVertical: 10, color: "white"}}>Edit Profile</Text>
			</TouchableOpacity>

			<Text style={{fontSize: 20,fontWeight: "bold",marginLeft: 24, marginTop: 20}}>Aktivitas Saya</Text>
			<View style={{marginLeft: 24, marginTop: 10}}>
				<TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigation.navigate('Wishlist')}>
					<Image
						style={styles.icon}
						source={require("../assets/love.png")}
					/>
					<Text style={styles.texticon}>Wishlist saya</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigation.navigate('Transaksi')}>
					<Image
						style={{width: 26,height:35, marginLeft: 5,marginTop: 8, marginRight:3}}
						source={require("../assets/transaksi.png")}
					/>
					<Text style={styles.texticon}>Keranjang saya</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigation.navigate('History')}>
					<Image
						style={styles.icon}
						source={require("../assets/history.png")}
					/>
					<Text style={styles.texticon}>Pembelian saya</Text>
				</TouchableOpacity>
			</View>

			<Text style={{fontSize: 20,fontWeight: "bold",marginLeft: 24, marginTop: 15}}>Pusat Bantuan</Text>
			<View style={{marginLeft: 24, marginTop: 10}}>
				<TouchableOpacity style={{flexDirection: "row"}}>
					<Image
						style={styles.icon}
						source={require("../assets/pesanankomplain.png")}
					/>
					<Text style={styles.texticon}>Pesanan dikomplain</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: "row", marginTop: 5}}>
					<Image
						style={styles.icon}
						source={require("../assets/huh.png")}
					/>
					<Text style={styles.texticon}>Bantuan SuS Care</Text>
				</TouchableOpacity>

			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	icon : {
		width:35,
		height:35,
		marginTop: 5
	},
	texticon :{
		marginLeft: 24, 
		marginTop: 13,
		fontSize: 16
	},
});
