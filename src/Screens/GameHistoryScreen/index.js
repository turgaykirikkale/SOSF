import React, {useState} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import SSChildHeader from '../../Components/UI/SSChildHeader';
import AppLayout from '../../Layouts';
import SSTabs from '../../Components/UI/SSTabs';
import {ScrollView} from 'react-native-gesture-handler';
import SSGameHistoryItem from '../../Components/Composite/SSGameHistoryItem';

const {width} = Dimensions.get('window');

const tabs = [
  {
    title: 'ALL',
    index: 0,
  },
  {
    title: 'WINNED',
    index: 1,
  },
];

const data = [
  {
    gameName: 'NO:1',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 798898909090892,
    //GameID Ile part içerisindeki kazananlar çekilecek.
  },
  {
    gameName: 'NO:2',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 77256,
  },
  {
    gameName: 'NO:3',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79800,
  },
  {
    gameName: 'NO:4',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 68999,
  },
  {
    gameName: 'NO:5',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 99876,
  },
  {
    gameName: 'NO:1',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79882,
  },
  {
    gameName: 'NO:2',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 77256,
  },
  {
    gameName: 'NO:3',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79800,
  },
  {
    gameName: 'NO:4',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 68999,
  },
  {
    gameName: 'NO:5',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 99876,
  },
  {
    gameName: 'NO:1',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79882,
  },
  {
    gameName: 'NO:2',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 77256,
  },
  {
    gameName: 'NO:3',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79800,
  },
  {
    gameName: 'NO:4',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 68999,
  },
  {
    gameName: 'NO:5',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 99876,
  },
  {
    gameName: 'NO:1',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79882,
  },
  {
    gameName: 'NO:2',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 77256,
  },
  {
    gameName: 'NO:3',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 79800,
  },
  {
    gameName: 'NO:4',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 68999,
  },
  {
    gameName: 'NO:5',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 99876,
  },
];

const winningData = [
  {
    gameName: 'NO:36',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 68999,
  },
  {
    gameName: 'NO:67',
    partCount: 10,
    date: '13.03.2021 10.30',
    gameId: '0912397128',
    totalBonus: 99876,
  },
];
function GameHistoryScreen(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const {navigation} = props;
  return (
    <AppLayout>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#a5f0f7',
            height: width / 1,
            width: width / 1,
            borderRadius: width / 2,
            left: width / 4,
            top: -width / 4,
            position: 'absolute',
          }}
        />
        <SafeAreaView>
          <SSChildHeader navigation={navigation} header={'History'} />
        </SafeAreaView>
        <View
          style={{backgroundColor: '#d7f4f7', marginTop: 20, marginBottom: 10}}>
          <SSTabs
            tabs={tabs}
            index={tabIndex}
            onPress={value => setTabIndex(value)}
          />
        </View>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {tabIndex === 0
              ? data.map((item, index) => {
                  return (
                    <>
                      <SSGameHistoryItem
                        item={item}
                        index={index}
                        data={data}
                      />
                    </>
                  );
                })
              : null}
            {tabIndex === 1
              ? winningData.map((item, index) => {
                  return (
                    <>
                      <SSGameHistoryItem
                        item={item}
                        index={index}
                        data={winningData}
                      />
                    </>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
    </AppLayout>
  );
}

export default GameHistoryScreen;
