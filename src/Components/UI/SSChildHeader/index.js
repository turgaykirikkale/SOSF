import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

function SSChildHeader({navigation, header}) {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#d3d3d3',
          width: 25,
          height: 25,
          borderRadius: 12.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: '600'}}>{`<`}</Text>
      </TouchableOpacity>
      <Text style={{fontWeight: '600', fontSize: 25}}>{header}</Text>
    </View>
  );
}

export default SSChildHeader;
