import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SuccesChangePassword({ route, navigation }) {
    return(
        <View style={styles.container}>
            <Feather name="check-circle" size={100} color={"#53a653"} style={{ paddingBottom: 30 }} />
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sukses!</Text>
            <Text style={{ fontSize: 16 }}>Password Berhasil Diganti</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={[styles.button, { backgroundColor: "#0D4C92"}]} >
                <Text style={{ fontSize: 16, color: "#fff" }}>Back To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#0D4C92",
        borderRadius: 10,
        marginVertical: 20,
        padding: 12
    }
})