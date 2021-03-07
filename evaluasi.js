// import React from 'react'
// import { View, Text, Image, ScrollView, ScrollViewComponent } from 'react-native'

// const EvaluasiHalamanDua = () => {
//     return (
//         <View>
//         <View>
//             <Text style={{
//                 fontSize:30,
//                 marginHorizontal:50
//             }}>Quran App</Text>
//         </View>
//         <View style={{
//             marginTop:40
//         }}>
//         <Text style={{
//             marginBottom:10
//         }}>Assalamualaikum</Text>
//         <Text style={{
//             fontWeight:'bold',
//             fontSize:20
//         }}>Huniya Mughal</Text>
//         </View>

//         <View style ={{
//             backgroundColor:'skyblue',
//             marginTop:30,
//             width:350,
//             height:100,
//             borderRadius:20
//         }}>
//             <Text style={{
//                 margin :15,
//                 marginLeft:30,
//                 color:'white'
//             }}>Last Read</Text>
//             <Text style={{
//                 marginBottom:10,
//                 marginLeft:20,
//                 fontSize:16,
//                 color:'white'
//             }}>Al-Fatiha</Text>
//             <Text style={{
//                 color:'white',
//                 marginLeft:25,
//             }}>Ayah No:1</Text>
//             <Image source={require('./src/assets/alquran.jpg')} style={{
//                 width:50,
//                 height:50,
//                 marginLeft:290
//             }}/>
//         </View>
//         <View style={{
//             marginTop:50,
//             flexDirection:'row',
//             justifyContent: 'space-around'
//         }}>

//             <Text style={{fontSize:28}}>Surah</Text>
//             <Text style={{fontSize:28}}>Para</Text>
//             <Text style={{fontSize:28}}>Page</Text>
//             <Text style={{fontSize:28}}>Hijb</Text>
//         </View>
//         <View>
//             <ScrollView>
//         <View style={{
//             flexDirection:"row"
//         }}>
//             <Text style={{
//                 marginTop:15,
//                 fontSize:20,
//                 marginLeft:30

//             }}>1</Text>
//             <Text style={{
//                 marginTop:10,
//                 marginLeft:30,
//                 fontSize:25,
//                 fontWeight:'bold'
//             }}>Al - Fatiah</Text>
//             </View>
//         <View>
//             <Text style={{
//                 marginLeft:65,
//                 marginTop:5
//             }}>MECCAN- 7 VERSES</Text>
//         </View>
//         <View style={{
//             flexDirection:'row'
//         }}>
//             <Text style={{
//                 marginTop:15,
//                 fontSize:20,
//                 marginLeft:30
//             }}>2</Text>
//             <Text style={{
//                 marginTop:10,
//                 marginLeft:30,
//                 fontSize:25,
//                 fontWeight:'bold'
//             }}>Al - Baqrah</Text>
//         </View>
//         <View>
//         <Text style={{
//                 marginLeft:65,
//                 marginTop:5
//             }}>MEDINIAN- 280 VERSES</Text>
//         </View>
//         <View style={{
//             flexDirection:'row'
//         }}>
//             <Text style={{
//                 marginTop:15,
//                 fontSize:20,
//                 marginLeft:30
//             }}>3</Text>
//             <Text style={{
//                 marginTop:10,
//                 marginLeft:30,
//                 fontSize:25,
//                 fontWeight:'bold'
//             }}>Ali 'Imran</Text>
//         </View>
//         <View>
//         <Text style={{
//                 marginLeft:65,
//                 marginTop:5
//             }}>MECCAN - 280 VERSES</Text>
//         </View>
//         <View style={{
//             flexDirection:'row'
//         }}>
//             <Text style={{
//                 marginTop:15,
//                 fontSize:20,
//                 marginLeft:30
//             }}>4</Text>
//             <Text style={{
//                 marginTop:10,
//                 marginLeft:30,
//                 fontSize:25,
//                 fontWeight:'bold'
//             }}>An-Nisa</Text>
//         </View>
//         <View>
//         <Text style={{
//                 marginLeft:65,
//                 marginTop:5
//             }}>MECCAN - 178 VERSES</Text>
//             </View>
//             </ScrollView>
//         </View>
//         </View>
//     )
// }

// export default EvaluasiHalamanDua

import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import styles from './src/styles/_dashboard';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Quran App</Text>
          <TouchableHighlight>
            <Image
              source={require('./src/assets/icon/search.png')}
              style={styles.headerImage}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Assalamualaikum</Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 30,
            }}>
            Huniya Mughal
          </Text>
        </View>

        {/* popUp Box */}
        <View style={styles.popup}>
          <View style={styles.popupLastRead}>
            <Image
              source={require('./src/assets/icon/lastRead.png')}
              style={styles.popupLastReadImage}
            />
            <Text style={styles.popupLastReadText}>Last Read</Text>
          </View>
          <View style={styles.popupList}>
            <View>
              <Text style={styles.popupSurah}>Al-Fatiha</Text>
              <Text style={styles.popupAyat}>Ayat No 1</Text>
            </View>
            <Image
              source={require('./src/assets/icon/quranDashboard.png')}
              style={styles.popupImage}
            />
          </View>
        </View>
        {/* menu */}
        <View>
          <ScrollView horizontal>
            <Text style={styles.menuText}>Surah</Text>
            <Text style={styles.menuText}>Para</Text>
            <Text style={styles.menuText}>Page</Text>
            <Text style={styles.menuText}>Hijb</Text>
          </ScrollView>
        </View>
        {/* List Quran */}
        <View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'grey',
              marginVertical: 20,
            }}
          />
          <View style={styles.list}>
            <Text style={styles.listAyat}> 1</Text>
            <View style={styles.listSurah}>
              <Text>Al-Fatiha</Text>
              <Text>Makkah -7 verse</Text>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'grey',
              marginVertical: 20,
            }}
          />
          <View style={styles.list}>
            <Text style={styles.listAyat}> 2</Text>
            <View style={styles.listSurah}>
              <Text>Al-Baqarah</Text>
              <Text>Madinah -286 verse</Text>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'grey',
              marginVertical: 20,
            }}
          />
          <View style={styles.list}>
            <Text style={styles.listAyat}> 3</Text>
            <View style={styles.listSurah}>
              <Text>Ali 'Imran</Text>
              <Text>Makkah -200 verse</Text>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'grey',
              marginVertical: 20,
            }}
          />
          <View style={styles.list}>
            <Text style={styles.listAyat}> 4</Text>
            <View style={styles.listSurah}>
              <Text>Al-Fatiha</Text>
              <Text>Makkah -176 verse</Text>
            </View>
          </View>
        </View>

        {/* Button */}
        <View>
          <Image
            source={require('./src/assets/icon/quranOpening.png')}
            style={styles.buttonImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
