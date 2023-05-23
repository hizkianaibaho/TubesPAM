import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const PaymentScreen = () => {
  return (
    <View style={styles.pAYMENTMENUView}>
      <View style={styles.groupView}>
        <Text style={styles.ringkasanBelanjaText}>Ringkasan Belanja</Text>
      </View>
      <View style={styles.btnBuyView}>
        <View style={styles.rectangleView} />
        <Text style={styles.bayarText}>Bayar</Text>
      </View>
      <TouchableOpacity>
        <Image
        style={styles.btnBackIcon}
        resizeMode="cover"
        source={require("../assets/btn_back.png")}
      />
      </TouchableOpacity>
      <View style={styles.card3View}>
        <View style={styles.card1bgView} />
        <Text style={styles.text}>5282 3456 7890 1289</Text>
        <Text style={styles.text1}>Dhilan Cepmek</Text>
        <Image
          style={styles.mastercardLogoIcon}
          resizeMode="cover"
          source={require("../assets/mastercard-logo.png")}
        />
        <Image
          style={styles.card1Mask}
          resizeMode="cover"
          source={require("../assets/card-1-mask.png")}
        />
      </View>
      <View style={styles.groupView5}>
        <Image
          style={styles.iconPlusCircle}
          resizeMode="cover"
          source={require("../assets/-icon-plus-circle.png")}
        />
        <TouchableOpacity style={styles.groupView1}>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.image23Icon}
            resizeMode="cover"
            source={require("../assets/gopay.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.groupView2}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.image26Icon}
            resizeMode="cover"
            source={require("../assets/dana.png")}
          />
          <Image
            style={styles.image25Icon}
            resizeMode="cover"
            source={require("../assets/logo_dana.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.groupView4}>
          <View style={styles.rectangleView3} />
          <View style={styles.mastercardLogoView}>
            <View style={styles.groupView3}>
              <Image
                style={styles.image24Icon}
                resizeMode="cover"
                source={require("../assets/ovo.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/mastercard.png")}
        />
        </TouchableOpacity>
        <Text style={styles.metodePembayaranText1}>
          <Text style={styles.metodePembayaranText}>Metode Pembayaran</Text>
        </Text>
      </View>
      <View style={styles.groupView6}>
        <Text style={styles.totalOngkosKirim1}>
          <Text style={styles.totalOngkosKirim}>Total Ongkos Kirim</Text>
        </Text>
        <Text style={styles.totalHarga1Barang}>Total Harga (1 barang)</Text>
        <Text style={styles.totalTagihanText1}>
          <Text style={styles.totalTagihanText}>Total Tagihan</Text>
        </Text>
        <Text style={styles.rp50000Text}>Rp50,000</Text>
        <Text style={styles.rp2379000Text}>Rp2,379,000</Text>
        <Text style={styles.rp2329000Text}>Rp2,329,000</Text>
      </View>
      <View style={styles.groupView7}>
        <Text style={styles.saldoAndaText}>Saldo anda</Text>
        <Text style={styles.rp10000000Text}>Rp10,000,000</Text>
      </View>
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  ringkasanBelanjaText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 184.26,
    height: 24.14,
  },
  groupView: {
    position: "absolute",
    top: 544,
    left: 22,
    width: 184.26,
    height: 24.14,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#0d4c92",
    width: 319,
    height: 48,
  },
  bayarText: {
    position: "absolute",
    top: 10,
    left: 128,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 63,
    height: 28,
  },
  btnBuyView: {
    position: "absolute",
    top: 766,
    left: 35,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 319,
    height: 48,
  },
  btnBackIcon: {
    position: "absolute",
    top: 30,
    left: 24,
    width: 40,
    height: 40,
  },
  card1bgView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30.02,
    backgroundColor: "#242736",
  },
  text: {
    position: "absolute",
    height: "11.95%",
    width: "77.1%",
    top: "44%",
    left: "9.84%",
    fontSize: 16,
    letterSpacing: 0.5,
    fontFamily: "Poppins",
    color: "#f6f6f6",
    textAlign: "left",
    opacity: 0.9,
  },
  text1: {
    position: "absolute",
    height: "11.95%",
    width: "77.1%",
    top: "59.75%",
    left: "9.84%",
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: "Poppins",
    color: "#f6f6f6",
    textAlign: "left",
    opacity: 0.9,
  },
  mastercardLogoIcon: {
    position: "absolute",
    height: "19.52%",
    width: "14.29%",
    top: "9.23%",
    right: "76.83%",
    bottom: "71.24%",
    left: "8.88%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card1Mask: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card3View: {
    position: "absolute",
    height: "21.81%",
    width: "80.81%",
    top: "13.27%",
    right: "9.19%",
    bottom: "64.92%",
    left: "10%",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 7.280433654785156,
    },
    shadowRadius: 14.56,
    elevation: 14.56,
    shadowOpacity: 1,
  },
  iconPlusCircle: {
    position: "absolute",
    height: "30.12%",
    width: "7.14%",
    top: "61.45%",
    right: "0%",
    bottom: "8.43%",
    left: "92.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 60,
    height: 40,
  },
  image23Icon: {
    position: "absolute",
    top: 3,
    left: 4,
    width: 52,
    height: 34,
  },
  groupView1: {
    position: "absolute",
    top: 43,
    left: 9,
    width: 60,
    height: 40,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 60,
    height: 40,
  },
  image26Icon: {
    position: "absolute",
    top: 14,
    left: 25,
    width: 30,
    height: 13,
  },
  image25Icon: {
    position: "absolute",
    top: 13,
    left: 3,
    width: 22,
    height: 16,
  },
  groupView2: {
    position: "absolute",
    top: 43,
    left: 82,
    width: 60,
    height: 40,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 60,
    height: 40,
  },
  image24Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 53,
    height: 23,
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 53,
    height: 23,
  },
  mastercardLogoView: {
    position: "absolute",
    top: 9,
    left: 3,
    width: 53,
    height: 23,
  },
  groupView4: {
    position: "absolute",
    top: 43,
    left: 155,
    width: 60,
    height: 40,
  },
  groupIcon: {
    position: "absolute",
    top: 43,
    left: 228,
    width: 60,
    height: 40,
  },
  metodePembayaranText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  metodePembayaranText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 24,
  },
  groupView5: {
    position: "absolute",
    height: "9.83%",
    width: "89.74%",
    top: "48.46%",
    right: "5.13%",
    bottom: "41.71%",
    left: "5.13%",
  },
  totalOngkosKirim: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  totalOngkosKirim1: {
    position: "absolute",
    top: 31,
    left: 1,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 171,
    height: 24,
  },
  totalHarga1Barang: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 192,
    height: 24,
  },
  totalTagihanText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  totalTagihanText1: {
    position: "absolute",
    top: 69,
    left: 2,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 193,
    height: 24,
  },
  rp50000Text: {
    position: "absolute",
    top: 31,
    left: 277,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 140.8,
    height: 24.14,
  },
  rp2379000Text: {
    position: "absolute",
    top: 69,
    left: 258,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 140.48,
    height: 24,
  },
  rp2329000Text: {
    position: "absolute",
    top: 0,
    left: 257,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 140.8,
    height: 24.14,
  },
  groupView6: {
    position: "absolute",
    top: 587,
    left: 20,
    width: 417.8,
    height: 93,
  },
  saldoAndaText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 141,
  },
  rp10000000Text: {
    position: "absolute",
    top: 0,
    left: 229,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 150,
  },
  groupView7: {
    position: "absolute",
    top: 335,
    left: 21,
    width: 379,
    height: 27,
  },
  lineView: {
    position: "absolute",
    top: 648.5,
    left: 21.5,
    borderStyle: "solid",
    borderColor: "#989ba1",
    borderTopWidth: 1,
    width: 349,
    height: 1,
  },
  pAYMENTMENUView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PaymentScreen;
