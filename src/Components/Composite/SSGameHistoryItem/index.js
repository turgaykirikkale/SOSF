import React from 'react';
import {View, Text} from 'react-native';
import SSButton from '../../UI/SSButton';

function SSGameHistoryItem({item, index, data}) {
  return (
    <View
      style={{
        backgroundColor: '#d7f4f7',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        marginBottom: index === data.length - 1 ? 30 : 0,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      }}>
      <View style={{flex: 1}}>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '500',
            fontSize: 13,
          }}>{`Name : ${item.gameName}`}</Text>
        <Text
          style={{
            marginVertical: 5,
            fontWeight: '500',
            fontSize: 13,
          }}
          numberOfLines={1}>{`Game ID : ${item.gameId} `}</Text>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '500',
            fontSize: 13,
          }}>{`Date : ${item.date} `}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '500',
            fontSize: 13,
          }}>{`Part Count : ${item.partCount}`}</Text>
        <Text
          style={{
            marginVertical: 5,
            fontWeight: '500',
            fontSize: 13,
          }}
          numberOfLines={1}>{`Total Bonus : ${item.totalBonus} `}</Text>
        <SSButton
          onPress={() => alert('GAME ID İLE POST REQUEST ATILACAK')}
          text={'Detail'}
          containerStyle={{
            backgroundColor: '#64e6f4',
          }}
          textStyle={{
            color: 'black',
            fontWeight: 'bold',
            letterSpacing: 0.7,
          }}
        />
      </View>
    </View>
  );
}

export default SSGameHistoryItem;
