import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');

function SSProfileWinningGame({item, onPress}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress && onPress()}
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
            Code :
          </Text>
          <Text style={{fontSize: 12}}>{item.gameId}</Text>
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
            Rank :
          </Text>
          <Text style={{fontSize: 12}}>{item.rank}</Text>
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
            Ödül :
          </Text>
          <Text style={{fontSize: 12}}>{`${item.reward} tl`}</Text>
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
            Tarih :
          </Text>
          <Text style={{fontSize: 12}}>{`${item.date}`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 0.7,
            }}>
            Cards:
          </Text>
          <View style={{flexDirection: 'row'}}>
            {item.usedCard.length !== 0 ? (
              item.usedCard.map(usedCarditem => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 4,
                    }}>
                    <View
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 9,
                        backgroundColor: 'yellow',
                      }}
                    />
                    <Text style={{fontSize: 8}}>
                      {`x${usedCarditem.count}`}
                    </Text>
                  </View>
                );
              })
            ) : (
              <Text style={{fontSize: 12}}>Yok</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SSProfileWinningGame;
