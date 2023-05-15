import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

function SSButton({containerStyle, textStyle, text, onPress}) {
  return (
    <View>
      <TouchableOpacity
        style={[
          containerStyle,
          {
            paddingVertical: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          },
        ]}
        onPress={() => onPress && onPress()}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SSButton;
