import React from 'react';
import {View, Text, TextInput} from 'react-native';

function SSTextInput({title, onChangeValue, value, placeholder}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 6,
        alignItems: 'center',
      }}>
      {title ? (
        <Text style={{fontSize: 10, marginRight: 4}}>{`${title} :`}</Text>
      ) : null}

      <TextInput
        pointerEvents="auto"
        editable
        placeholder={placeholder}
        style={{
          flex: 1,
        }}
        onChangeText={e => onChangeValue && onChangeValue(e)}
        value={value}
      />
    </View>
  );
}

export default SSTextInput;
