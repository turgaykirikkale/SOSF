import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import SSButton from '../../UI/SSButton';
const {width} = Dimensions.get('window');

function SSWalletBalanceShower({}) {
  return (
    <View>
      <View
        style={{
          blurRadius: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          height: width / 1.5,
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius: 10,
          shadowColor: 'white',
          shadowOpacity: 0.6,
          shadowRadius: 5,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        }}>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Avaliable Balance
          </Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '800',
              fontSize: 36,
              letterSpacing: 0.7,
            }}>
            1234123.12 TL
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              // alignItems: 'center',
              backgroundColor: '#a5f0f7',
              marginRight: 4,
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray'}}>
              Cash Balance
            </Text>
            <Text style={{fontSize: 16, marginVertical: 5, fontWeight: 'bold'}}>
              1000TL
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../Assets/Icons/exchange1.png')}
              style={{width: 20, height: 20}}
              tintColor={'#a5f0f7'}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              // alignItems: 'center',
              backgroundColor: '#a5f0f7',
              marginLeft: 4,
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray'}}>
              Puan
            </Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 16, marginVertical: 5, fontWeight: 'bold'}}>
              1789Fs = 1000TL
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <View style={{flex: 1}}>
            <SSButton
              text={'Yükle'}
              textStyle={{
                color: 'white',
                letterSpacing: 0.7,
                fontWeight: '500',
              }}
              containerStyle={{backgroundColor: 'green'}}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <SSButton
              text={'Çek'}
              textStyle={{
                color: 'white',
                letterSpacing: 0.7,
                fontWeight: '500',
              }}
              containerStyle={{backgroundColor: 'red'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default SSWalletBalanceShower;
