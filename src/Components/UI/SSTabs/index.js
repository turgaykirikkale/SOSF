import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function SSTabs({tabs, index, onPress}) {
  return (
    <View
      style={{flexDirection: 'row', paddingVertical: 3, paddingHorizontal: 5}}>
      {tabs.map(item => {
        return (
          <TouchableOpacity
            onPress={() => onPress && onPress(item.index)}
            style={{
              flex: 1,
              alignItems: 'center',
              borderBottomWidth: item.index === index ? 1 : 0,
              borderColor: 'orange',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: item.index === index ? 'orange' : null,
                fontSize: item.index === index ? 10 : 8,
                fontWeight: '500',
                letterSpacing: 0.7,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default SSTabs;
