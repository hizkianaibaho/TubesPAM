import { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, TextInput, View} from 'react-native';
import { Feather } from '@expo/vector-icons'
import back from '../assets/btn_back.png';

export default function EditPassword({ route, navigation }) {

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newPassRepeat, setNewPassRepeat] = useState('');
    const [isDisable, setIsDisable] = useState(false)
    const [visibleNewPass, setVisibleNewPass] = useState(false);
    const [visiblePassRepeat, setVisiblePassRepeat] = useState(false);
    const [iconPass, setIconPass] = useState('eye-off');
    const [iconPassRepeat, setIconPassRepeat] = useState('eye-off');

    useEffect(() => setIsDisable(oldPass.length >= 8 && newPass.length >= 8 && newPassRepeat.length >= 8))

    const changeIconPass = () => {
        iconPass === 'eye' ? setIconPass('eye-off') : setIconPass('eye');
    }

    const changeIconPassRepeat = () => {
        iconPassRepeat === 'eye' ? setIconPassRepeat('eye-off') : setIconPassRepeat('eye');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={back} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, paddingHorizontal: 30, fontWeight: 'bold' }}>Ganti Password</Text>
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Masukkan password saat ini'
                    style={styles.field}
                    value={oldPass}
                    onChangeText={(value) => setOldPass(value)}
                    maxLength={16}
                    secureTextEntry={true}
                    />
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput placeholder='Masukkan password baru'
                        style={[styles.field, { marginRight: 20 }]}
                        value={newPass}
                        onChangeText={(value) => setNewPass(value)}
                        maxLength={16}
                        secureTextEntry={!visibleNewPass}
                    />
                    <TouchableOpacity onPress={()=> {
                        setVisibleNewPass(!visibleNewPass)
                        changeIconPass()
                    }}>
                        <Feather name={iconPass} size={25} style={{ marginTop: 25 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput placeholder='Ketik ulang password baru'
                        style={[styles.field, { marginRight: 20 }]}
                        value={newPassRepeat}
                        onChangeText={(value) => setNewPassRepeat(value)}
                        secureTextEntry={!visiblePassRepeat}
                        maxLength={16}
                    />
                    <TouchableOpacity onPress={()=> {
                        setVisiblePassRepeat(!visiblePassRepeat)
                        changeIconPassRepeat()
                    }}>
                        <Feather name={iconPassRepeat} size={28} style={{ marginTop: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ position: "relative", top: "40%", maxWidth: "80%", minWidth: 300, borderRadius: 10 }}>
                <TouchableOpacity 
                    disabled={!isDisable}
                    style={[styles.button, {
                        backgroundColor: !isDisable
                        ? 'grey'
                        : '#0D4C92'
                    }]}
                    onPress={() => navigation.navigate("Change Password Success")}
                    activeOpacity={0.6}
                    >
                    <Text style={{ padding: 10, color: "white", fontSize: 18, textAlign: "center" }}>Ganti Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        position: "relative",
        maxHeight: 100,
        left: -62,
        top: 10,
        paddingVertical: 40,
        paddingHorizontal: 25
    },
    input: {
        flex: 1,
        justifyContent: "space-evenly",
        maxHeight: 300,
        padding: 10
    },
    field: {
        paddingVertical: 15,
        borderBottomColor: "#000",
        borderBottomWidth: 2,
        minWidth: 300,
        fontSize: 18
    },
    button: {
        backgroundColor: "#0D4C92",
        borderRadius: 10
    }
})
