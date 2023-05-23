import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import back from '../assets/btn_back.png';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nama: this.props.route.params.nama,
            Password: "",
            Alamat: this.props.route.params.alamat,
            email: "dilan@gmail.com"
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={back} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 30, fontSize: 20 }}>Edit Profile</Text>
                </View> 

                <Image source={{
                        uri: 'https://cdn1-production-images-kly.akamaized.net/PRciRZRdN7B92z0m_gkHORceT1k=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4187840/original/046976900_1665479129-cepmek.jpg',
                    }}
                    style={{ width: 120, height: 120, borderRadius: 60 }}
                    />

                <View style={styles.input}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Nama</Text>
                        <TextInput
                            value={this.state.Nama}
                            onChangeText={(value) => this.setState({ Nama: value })}
                            placeholder={this.props.route.params.nama}
                            style={{ fontSize: 16, paddingVertical: 3 }}
                            multiline={true}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Alamat</Text>
                        <TextInput
                            value={this.state.Alamat}
                            onChangeText={(value) => this.setState({ Alamat: value })}
                            placeholder={"Masukkan Alamat"}
                            style={{ fontSize: 16, paddingVertical: 3 }}
                            multiline={true}
                        />
                    </View>

                    <View style={[styles.field, {
                        borderBottomWidth: 0
                    }]}>
                        <TouchableOpacity
                        style={[styles.button, {
                            padding: 12,
                            borderRadius: 8,
                            backgroundColor: "#112021"
                        }]}
                        onPress={() => {this.props.navigation.navigate("Edit Password", { email: this.state.email })}}
                        >
                            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>Ganti Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ position: "relative", top: "25%", maxWidth: "80%", minWidth: 300, borderRadius: 10 }}>
                    <TouchableOpacity disabled={
                            this.state.Nama === "" ||
                            this.state.Alamat === ""
                        }
                        onPress={() => this.props.navigation.navigate('Profile')}
                        style={styles.button}
                        >
                        <Text style={{ padding: 10, color: "white", fontSize: 18, textAlign: "center" }}>Simpan Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        position: "relative",
        maxHeight: 100,
        top: 12,
        left: -80,
        paddingVertical: 40,
        paddingHorizontal: 25
    },
    input : {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        maxHeight: 300
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    field: {
        borderBottomColor: "#000",
        borderBottomWidth: 2,
        paddingVertical: 5,
        minWidth: "78%",
        maxWidth: "78%"
    }, 
    button: {
        backgroundColor: "#0D4C92",
        borderRadius: 10
    }
});