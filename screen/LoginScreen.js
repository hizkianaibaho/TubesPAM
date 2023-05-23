import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.textHeader}>Login</Text>
        </View>
        <Text style={styles.label}>Username*</Text>
        <View style={styles.field}>
          <TextInput
            style={{ width: 300, paddingRight: 15 }}
            value={this.state.username}
            onChangeText={(value) => this.setState({ username: value })}
            placeholder={"Masukkan username"}
          />
        </View>

        <Text style={styles.label}>Password*</Text>
        <View style={styles.field}>
          <TextInput
            style={{ width: 300, paddingRight: 15 }}
            value={this.state.Password}
            onChangeText={(value) => this.setState({ password: value })}
            placeholder={"Masukkan password"}
	    secureTextEntry={true}
          />
        </View>

        <View style={{ marginHorizontal: 30, marginVertical: 20, padding: 5 }}>
          <Button disabled={
            this.state.username === "" ||
            this.state.password === ""
          }

            onPress={() => {
              axios.post("https://backend-uas-pam-production.up.railway.app/api/login", {
                username: this.state.username,
                password: this.state.password
              })
              .then(response => {
                if (response.status === 200) {
                  this.props.navigation.navigate("Home", { username: this.state.username })
                }
              })
              .catch((e) => {
                  alert("Username atau Password salah!");
                  console.error(e.message);
              });
            }}
            color='#0D4C92'
            borderRadius='30'
            title="Login" />


        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{fontSize: 20,fontWeight: '700'}}>Belum punya akun ? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={{fontSize: 20,fontWeight: '700',color: '#0D4C92'}}>Sign up disini. </Text>
        </TouchableOpacity>
      </View>
      </View >
    );
  }
}

export default LoginScreen;

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
  },
});




