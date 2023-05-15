import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function SSReferenceScreenItem({item, index, data, description, type}) {
  return (
    <View
      style={{
        backgroundColor: '#d7f4f7',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        marginBottom: index === data.length - 1 ? 30 : 0,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      }}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              marginRight: 2,
            }}>
            {item.name}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '600'}}>{item.surname}</Text>
        </View>
        <View style={{marginTop: 6, marginLeft: 4}}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              letterSpacing: 0.7,
            }}>
            {item.date}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{fontSize: 14, fontWeight: '500'}}>{description}</Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 3,
            fontWeight: 'bold',
            color: item.value > 0 ? '#17a52a' : null,
          }}>{`${item.value} TL`}</Text>
      </View>
      {type ? null : (
        <TouchableOpacity style={{marginLeft: 15}}>
          <Image
            source={require('../../../Assets/Icons/Close.png')}
            style={{width: 17, height: 17}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
export default SSReferenceScreenItem;
