import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './src/styles/_splashscreen';

class Splashscreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Quran App</Text>
          <View style={styles.subtitle}>
            <Text style={{alignSelf: 'center', color: 'grey'}}>
              Learn Quran &
            </Text>
            <Text style={{alignSelf: 'center', color: 'grey'}}>
              Recite Once Everyday
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#b60cd4',
            borderRadius: 20,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/icon/quranOpening.png')}
            style={{height: 170, width: 170, marginTop: 70, marginBottom: 50}}
          />
          <Text
            style={{
              alignItems: 'center',
              borderRadius: 10,
              borderWidth: 1,
              position: 'absolute',
              top: 275,
              backgroundColor: 'yellow',
              fontSize: 20,
            }}>
            Get Started
          </Text>
        </View>
        <View></View>
      </View>
    );
  }
}

export default Splashscreen;
