import React, {Component} from 'react';
import {View, Text, StyleSheet, style, ScrollView, Image} from 'react-native';

export default class Index extends Component {


  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>TASK LIST</Text>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <View style={styles.content1}>
                <View>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('./../img/zahir.png')}
                  />
                </View>
                <View>
                  <Text style={styles.text}>Tittle 1</Text>
                  <Text style={styles.text2}>Juli 25, 2017</Text>
                </View>
                <View>
                  <Image
                    style={{width: 280, height: 100, shadowColor:'grey',shadowOpacity: 0.5}}
                    source={require('./../img/benner1.png')}
                  />
                </View>
                <View>
                  <Text style={{fontSize:14}}>Jangan lewatkan kesempatan dibulan ini, gunakan Zahir Accounting sekarang juga! Rasakan kemudahan dan keuntungan menggunakan Software Akuntansi Zahir.</Text>
                </View>
                <View>
                  <Text style={{fontSize:13, color:'blue'}}>Baca Selengkapnya...</Text>
                </View>
            </View>
            <View style={styles.content1}>
                <View>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('./../img/zahir.png')}
                  />
                </View>
                <View>
                  <Text style={styles.text}>Tittle 2</Text>
                  <Text style={styles.text2}>Juli 25, 2017</Text>
                </View>
                <View>
                  <Image
                    style={{width: 280, height: 100, shadowColor:'grey',shadowOpacity: 0.5}}
                    source={require('./../img/benner2.png')}
                  />
                </View>
                <View>
                  <Text style={{fontSize:14}}>Pada pameran ini Zahir Accounting akan melakukan Preview produk terbarunya. Kepada para pengunjung akan diberi kesempatan untuk melihat dan mencoba demo program keluaran terbaru dari Zahir Accounting.</Text>
                </View>
                <View>
                  <Text style={{fontSize:13, color:'blue'}}>Baca Selengkapnya...</Text>
                </View>
            </View>
            <View style={styles.content1}>
                <View>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('./../img/zahir.png')}
                  />
                </View>
                <View>
                  <Text style={styles.text}>Tittle 3</Text>
                  <Text style={styles.text2}>Juli 25, 2017</Text>
                </View>
                <View>
                  <Image
                    style={{width: 280, height: 100, shadowColor:'grey',shadowOpacity: 0.5}}
                    source={require('./../img/benner3.png')}
                  />
                </View>
                <View>
                  <Text style={{fontSize:14}}>Sehubungan dengan telah dihentikannya versi lawas layanan chatting oleh Yahoo! Messenger dan berimbas pada tidak berfungsinya ikon online Y!M di http://zahiraccounting.com dan http://zahir.info, maka sejak tanggal 2 September 2016 layanan support dan sales Zahir yang menggunakan Yahoo! Messenger ditiadakan.
Sebagai ganti atas hal tersebut kami telah menyediakan layanan chatting untuk support dan sales menggunakan WhatsApp di nomor 0811 201 7766 (Support) dan 0811 98 66 999 (Sales). Khusus Live Chat berbasis web yang sudah ada sebelumnya tetap ada seperti biasa.</Text>
                </View>
                <View>
                  <Text style={{fontSize:13, color:'blue'}}>Baca Selengkapnya...</Text>
                </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height:50,
    backgroundColor:'#4682B4',
  },
  textHeader: {
    color:'white',
    alignSelf:'center',
    fontSize:17,
    fontWeight:'bold',
    padding: 25
  },
  content: {
    flex:10,
    backgroundColor:'#FFFAFA',
  },
  content1: {
    flexDirection:'row',
    flexWrap: 'wrap',
    backgroundColor:'#FFFAFA',
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    padding:10,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    shadowColor:'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 1
  },
  text: {
    padding:5,
    fontSize:16,
    fontWeight:'bold'
  },
  text2: {
    paddingLeft:5,
    fontSize:10,
    fontWeight:'bold'
  }
});
