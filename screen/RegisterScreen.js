import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Email: "",
            Password: "",
            ConfirmPassword: "",
        };
    }

    render() {
        return (
            <View>
                <View>
                    <Text style={styles.textHeader}>Sign Up</Text>
                </View>
                <Text style={styles.label}>Username*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Username}
                        onChangeText={(value) => this.setState({ Username: value })}
                        placeholder={"Masukkan Email"}
                        textContentType="emailAddress"
                    />
                </View>

                <Text style={styles.label}>Email*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Email}
                        onChangeText={(value) => this.setState({ Email: value })}
                        placeholder={"Masukkan Email"}
                        textContentType="emailAddress"
                    />
                </View>

                <Text style={styles.label}>Password*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.Password}
                        onChangeText={(value) => this.setState({ Password: value })}
                        placeholder={"Masukkan Password"}
			secureTextEntry={true}
                    />
                </View>

                <Text style={styles.label}>Confirm Password*</Text>
                <View style={styles.field}>
                    <TextInput
                        style={{ width: 300, paddingRight: 15 }}
                        value={this.state.ConfirmPassword}
                        onChangeText={(value) => this.setState({ ConfirmPassword: value })}
                        placeholder={"Confirm Password"}
			secureTextEntry={true}
                    />
                </View>

                <View style={{ marginHorizontal: 30, marginVertical: 20, padding: 5 }}>
                    <Button disabled={
                        this.state.Username === "" ||
                        this.state.Email === "" ||
                        this.state.Password === "" ||
                        this.state.ConfirmPassword === ""
                    }

                        onPress={() => {
                            if (this.state.ConfirmPassword === this.state.Password) {
                                axios.post("https://backend-uas-pam-production.up.railway.app/api/register", {
                                    username: this.state.Username,
                                    email: this.state.Email,
                                    password: this.state.Password,
                                    type: "user"
                                })
                                .then((response) => {
                                    if (response.status === 200) {
                                        this.props.navigation.navigate('Login');
                                        alert("Registrasi Berhasil");
                                    } 
                                })
                                .catch((e) => {
                                    console.log(e.message);
                                });
                            } else {
                                alert("Password yang diulang harus sama!")
                            }
                        }}
                        color='#0D4C92'
                        borderRadius='30'
                        title="Sign Up"
                    />
                </View>
            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 36,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 139,
        marginBottom: 40,
        color: '#0D4C92',
    },
    label: {
        marginTop: 10,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    field: {
        borderWidth: 2,
        borderColor: '#0D4C92',
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 10,
        padding: 7,
    }
});