import React from 'react';
import {View, Text} from 'react-native';
import SSButton from '../../UI/SSButton';
function SSUserInfoHeader({title, buttonText, onPress}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#d7f4f7',
      }}>
      <Text style={{fontWeight: '500', letterSpacing: 0.5}}>{title}</Text>

      <SSButton text={buttonText} onPress={() => onPress && onPress()} />
    </View>
  );
}

export default SSUserInfoHeader;
