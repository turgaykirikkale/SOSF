import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Dimensions, Text} from 'react-native';
import SSChildHeader from '../../Components/UI/SSChildHeader';
import AppLayout from '../../Layouts';
import SSTabs from '../../Components/UI/SSTabs';
import SSWalletBalanceShower from '../../Components/Composite/SSwalletBalanceShower';
import {ScrollView} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
const transactionHistory = [
  {
    type: 0,
    value: 120.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: 'Ziraat Bank',
    to: null,
  },
  {
    type: 0,
    value: 120.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: 'Mobil Pay',
    to: null,
  },
  {
    type: 1,
    value: 249.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: null,
    to: 'Ziraat Bankası',
  },
  {
    type: 1,
    value: 150.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: null,
    to: 'Finansbank',
  },
  {
    type: 1,
    value: 250.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: null,
    to: 'Akbank',
  },
  {
    type: 0,
    value: 120.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: 'Akbank',
    to: null,
  },

  {
    type: 2,
    value: 10.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: null,
    to: '123412387',
  },
  {
    type: 2,
    value: 10.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: null,
    to: '1239898123',
  },
  {
    type: 0,
    value: 120.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: 'Finansbank',
    to: null,
  },
  {
    type: 2,
    value: 10.0,
    currency: 'TL',
    date: '29.03.2023 14.39',
    from: null,
    to: '912839182938',
  },
];

/*
  type=0 // Receıved,
  tyoe = 1 //withdraw,
  type= 2 // used,
  */
function WalletScreen(props) {
  const tabs = [
    {
      title: 'ALL',
      index: 0,
    },
    {
      title: 'RECEIVED',
      index: 1,
    },
    {
      title: 'WITHDRAW',
      index: 2,
    },
    {
      title: 'USED',
      index: 3,
    },
  ];

  const [index, setIndex] = useState(0);
  const {navigation} = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    let filterData = [];
    switch (index) {
      case 0:
        filterData = transactionHistory;
        setData(filterData);
        break;
      case 1:
        filterData = transactionHistory.filter(item => item.type === 0);
        console.log('FILTEREDDATA', filterData);
        setData(filterData);
        break;
      case 2:
        filterData = transactionHistory.filter(item => item.type === 1);
        setData(filterData);
        break;
      case 3:
        filterData = transactionHistory.filter(item => item.type === 2);
        setData(filterData);
        break;

      default:
        break;
    }
  }, [index]);

  const titleControl = value => {
    switch (value) {
      case 0:
        return 'Received';
      case 1:
        return 'Withdraw';
      case 2:
        return 'Used';

      default:
        break;
    }
  };

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
          <SSChildHeader navigation={navigation} header={'Wallet'} />
        </SafeAreaView>

        <>
          <SSWalletBalanceShower />
        </>

        <View style={{backgroundColor: '#d7f4f7'}}>
          <SSTabs
            tabs={tabs}
            index={index}
            onPress={value => setIndex(value)}
          />
        </View>

        <View style={{flex: 1, marginTop: 10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((item, index) => {
              return (
                <>
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
                    <View
                      style={{
                        backgroundColor: 'red',
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                      }}
                    />
                    <View style={{marginLeft: 10, flex: 1}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            fontWeight: '600',
                            fontSize: 14,
                            letterSpacing: 0.7,
                          }}>
                          {titleControl(item.type)}
                        </Text>
                        <Text
                          style={{
                            fontWeight: '500',
                            fontSize: 10,
                            color: 'gray',
                            letterSpacing: 0.7,
                          }}>
                          {` (${
                            item.from
                              ? 'from : ' + item.from
                              : 'to : ' + item.to
                          })`}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'gray',
                          fontWeight: '500',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color:
                            item?.type === 1 || item.type === 2
                              ? '#8e0c1e'
                              : '#17a52a',
                          fontSize: 15,
                          fontWeight: '500',
                          letterSpacing: 1,
                        }}>
                        {item.type === 1 || item.type === 2
                          ? `-${item.value} ${item.currency}`
                          : `+${item.value} ${item.currency}`}
                      </Text>
                    </View>
                  </View>
                </>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </AppLayout>
  );
}

export default WalletScreen;
