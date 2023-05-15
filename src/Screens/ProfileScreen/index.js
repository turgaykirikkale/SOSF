import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SSChildHeader from '../../Components/UI/SSChildHeader';
import AppLayout from '../../Layouts';
import SSUserInfoHeader from '../../Components/Composite/SSUserInfoHeader';
import SSProfileWinningGame from '../../Components/UI/SSProfileWinningGame';
import SSProfileActiveCard from '../../Components/UI/SSProfileActiveCard';
import SSProfileReferences from '../../Components/UI/SSProfileReferences';
const {width} = Dimensions.get('window');
const userData = {
  image: null,
  name: 'Turgay',
  surname: 'Kirikkale',
  city: 'İstanbul',
  winningGame: [
    {
      gameId: 1232387123,
      rank: 4,
      reward: 200,
      date: '29.03.2023',
      usedCard: [
        {
          name: 'Harf Al',
          count: 1,
          symbol: null,
        },
        {
          name: 'Artı +1 Açıklama',
          count: 2,
          symbol: null,
        },
        {
          name: 'Bağlantı',
          count: 3,
          symbol: null,
        },
      ],
      //AllWininingList Gelecek
    },
    {
      gameId: 123238711,
      rank: 2,
      reward: 300,
      date: '29.03.2023',
      usedCard: [
        {
          name: 'Harf Al',
          count: 1,
          symbol: null,
        },
        {
          name: 'Artı +1 Açıklama',
          count: 2,
          symbol: null,
        },
        {
          name: 'Bağlantı',
          count: 3,
          symbol: null,
        },
      ],
    },
    {
      gameId: 1232711,
      rank: 9,
      reward: 50,
      date: '29.03.2023',
      usedCard: [
        {
          name: 'Harf Al',
          count: 1,
          symbol: null,
        },
        {
          name: 'Artı +1 Açıklama',
          count: 2,
          symbol: null,
        },
        {
          name: 'Bağlantı',
          count: 3,
          symbol: null,
        },
      ],
    },
    {
      gameId: 1232711,
      rank: 9,
      reward: 50,
      date: '29.03.2023',
      usedCard: [],
    },
  ],
  activeCard: [
    {
      name: 'Harf Al',
      count: 30,
      symbol: null,
    },
    {
      name: 'Artı +1 Açıklama',
      count: 30,
      symbol: null,
    },
    {
      name: 'Bağlantı',
      count: 18,
      symbol: null,
    },
  ],
  references: [
    {
      id: null,
      image: null,
      name: 'Ali',
      surname: 'Berk',
      gender: 'Erkek',
      pointedValue: 130,
    },
    {
      id: null,
      image: null,
      name: 'Beyza',
      surname: 'Berk',
      gender: 'Kadın',
      pointedValue: 500,
    },
    {
      id: null,
      image: null,
      name: 'Elif',
      surname: 'Gülen',
      gender: 'Erkek',
      pointedValue: 2456,
    },
  ],
};
function ProfileScreen(props) {
  const {navigation} = props;

  return (
    <AppLayout>
      <View style={{backgroundColor: '#a5f0f7'}}>
        <View
          style={{
            backgroundColor: '#d7f4f7',
            paddingTop: 60,
            paddingBottom: 50,
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
          }}>
          <SSChildHeader navigation={navigation} header={'Profile'} />
        </View>
        <View style={{backgroundColor: '#64e6f4'}}>
          <View
            style={{
              alignItems: 'center',
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              backgroundColor: '#a5f0f7',
              paddingVertical: 20,
              marginBottom: 5,
            }}>
            <View
              style={{
                width: width / 3,
                height: width / 3,
                borderRadius: width / 8,
                backgroundColor: 'red',
              }}>
              {/* <Image /> */}
            </View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  letterSpacing: 0.7,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>{`${userData?.name} ${userData?.surname}`}</Text>
              <Text
                style={{
                  letterSpacing: 0.7,
                  fontWeight: '500',
                  fontSize: 10,
                }}>{`${userData?.city}`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          scrollEnabled={true}
          style={{}}
          showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: 10}}>
            <SSUserInfoHeader
              title={'Kazandıklarınız'}
              buttonText={'Hepsini Gör'}
              onPress={() => alert('Hepsini Gör')}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {userData.winningGame.map(item => {
                return (
                  <SSProfileWinningGame
                    item={item}
                    onPress={() => alert('ITEM DETAIL MODAL')}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={{}}>
            <SSUserInfoHeader
              title={'Aktif Kartlarınız'}
              buttonText={'Hepsini Gör'}
              onPress={() => alert('Hepsini Gör')}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {userData.activeCard.map(item => {
                return <SSProfileActiveCard item={item} />;
              })}
            </ScrollView>
          </View>
          <View style={{marginBottom: 30, marginTop: 10}}>
            <SSUserInfoHeader
              title={'Referanslarınız'}
              buttonText={'Hepsini Gör'}
              onPress={() => alert('Hepsini Gör')}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {userData.references.map(item => {
                return <SSProfileReferences item={item} />;
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </AppLayout>
  );
}

export default ProfileScreen;
