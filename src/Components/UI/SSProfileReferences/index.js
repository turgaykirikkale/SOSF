import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

function SSProfileReferences({item}) {
  return (
    <TouchableOpacity
      // onPress={() => onPress && onPress()}
      style={{
        width: width / 2.5,
        marginVertical: 10,
        marginHorizontal: 6,
        borderRadius: 6,
        paddingHorizontal: 5,
        backgroundColor: '#d7f4f7',
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      }}>
      <View
        style={{
          marginBottom: 10,
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: 'red',
          alignSelf: 'center',
        }}>
        {/* <Image /> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            letterSpacing: 0.7,
          }}>
          İsim :
        </Text>
        <Text style={{fontSize: 12}}>{item.name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            letterSpacing: 0.7,
          }}>
          Soyisim :
        </Text>
        <Text style={{fontSize: 12}}>{item.surname}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            letterSpacing: 0.7,
          }}>
          SOSF :
        </Text>
        <Text style={{fontSize: 12}}>{`${item.pointedValue}F`}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SSProfileReferences;
