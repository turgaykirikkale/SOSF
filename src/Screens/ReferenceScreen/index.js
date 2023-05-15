//KUlLANıcı Rankı,
//Yarısmada madalya biriktirenlere eksta ödüller
//Bonusla yarışmaya katılma, direk para girişi değilde içeride bonus alıp onunla katılmak.

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SSChildHeader from '../../Components/UI/SSChildHeader';
import AppLayout from '../../Layouts';
import SSTabs from '../../Components/UI/SSTabs';
import SSReferenceScreenItem from '../../Components/UI/SSReferenceScreenItem';

const {width} = Dimensions.get('window');

const tabs = [
  {
    title: 'REFERANSLAR',
    index: 0,
  },
  {
    title: 'KAZANÇLAR',
    index: 1,
  },
];

const references = [
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '19.03.2023 14.30',
    value: 0.0,
  },
  {
    name: 'Çağatay ',
    surname: 'Yıldız',
    date: '19.03.2023 14.30',
    value: 523.0,
  },
  {
    name: 'Ali Berk',
    surname: 'Yurtoğlu',
    date: '19.03.2023 14.30',
    value: 126.0,
  },
  {
    name: 'Bülent',
    surname: 'Adıgüzel',
    date: '19.03.2023 14.30',
    value: 894.0,
  },
];

const lastReferenceOrders = [
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '23.04.2023 15.04',
    value: 11.0,
  },
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '23.04.2023 15.04',
    value: 9.0,
  },
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '23.04.2023 15.04',
    value: 0.033,
  },
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '23.04.2023 15.04',
    value: 1.0,
  },
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '23.04.2023 15.04',
    value: 1.0,
  },
  {
    name: 'Turgay',
    surname: 'Kırıkkale',
    date: '23.04.2023 15.04',
    value: 1.0,
  },
];
function ReferenceScreen(props) {
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
          <SSChildHeader navigation={navigation} header={'Reference'} />
        </SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 20,
            
          }}>
          <Image
            source={require('../../Assets/Icons/giftBox.png')}
            style={{width: 40, height: 20}}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                marginHorizontal: 5,
                letterSpacing: 0.8,
              }}>
              Davet ettiğiniz referanslarınız üzerinden %25 kazanç
              sağlayabilirsiniz. Bu kazançlarınızı uygulama içinde
              kullanabilirsiniz.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width / 1.1,
            height: width / 1.2,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            shadowColor: 'white',
            shadowOpacity: 0.6,
            shadowRadius: 5,
            shadowOffset: {
              width: 10,
              height: 10,
            },
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'white',
              alignSelf: 'center',
            }}
          />

          <View
            style={{
              backgroundColor: '#d7f4f7',
              marginHorizontal: 10,
              marginTop: 15,
              marginBottom: 1,
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}>
            <Text style={{letterSpacing: 0.7, fontWeight: '500'}}>
              Kodunuz :
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#d7f4f7',
              marginHorizontal: 10,
              paddingHorizontal: 10,
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              flexDirection: 'row',
              paddingVertical: 8,
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 12, fontWeight: 'bold', letterSpacing: 0.8}}
              numberOfLines={1}>
              1JHQODLAKSDLKOIBBUUYUY3123ASDDJ
            </Text>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => alert('Copy CODE')}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../Assets/Icons/copy-icon-4803.png/')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginVertical: 10, backgroundColor: '#d7f4f7'}}>
          <SSTabs
            tabs={tabs}
            index={tabIndex}
            onPress={value => setTabIndex(value)}
          />
        </View>

        {tabIndex === 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {references.map((item, index) => {
              return (
                <>
                  <SSReferenceScreenItem
                    item={item}
                    index={index}
                    data={references}
                    description={'Toplam Kazanç'}
                  />
                </>
              );
            })}
          </ScrollView>
        ) : null}

        {tabIndex === 1 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {lastReferenceOrders.map((item, index) => {
              return (
                <>
                  <SSReferenceScreenItem
                    item={item}
                    index={index}
                    data={lastReferenceOrders}
                    description={'Kazançlar'}
                    type
                  />
                </>
              );
            })}
          </ScrollView>
        ) : null}
      </View>
    </AppLayout>
  );
}

export default ReferenceScreen;
