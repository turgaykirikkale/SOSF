import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SSChildHeader from '../../Components/UI/SSChildHeader';
import AppLayout from '../../Layouts';
import SSButton from '../../Components/UI/SSButton';

const {width} = Dimensions.get('window');

const settingData = [
  {
    title: 'Hesap Ayarları',
    navigation: true,
    screen: 'NavigateScreen',
    icon: 'ınagePath',
  },
  {
    title: 'Güvenlik Ayarları',
    navigation: true,
    screen: 'NavigateScreen',
    icon: 'ınagePath',
  },
  {
    title: 'Bildirim Ayarları',
    navigation: true,
    screen: 'NavigateScreen',
    icon: 'ınagePath',
  },
  {
    title: 'Tema',
    navigation: false,
    screen: null,
    icon: 'ınagePath',
    subDataTheme: [],
  },
  {
    title: 'Dil Seçimi',
    navigation: false,
    screen: null,
    icon: 'ınagePath',
    subDataLanguage: [],
  },
  {
    title: 'Yarışma Hakkında',
    navigation: true,
    screen: 'Yarışma Sayfası',
    icon: 'ınagePath',
  },
  {
    title: 'Yarışma Kuralları',
    navigation: true,
    screen: 'Yarışma Sayfası',
    icon: 'ınagePath',
  },
  {
    title: 'Canlı Destek',
    navigation: true,
    screen: 'Chat Sayfası',
    icon: 'ınagePath',
  },
];
function SettingScreen(props) {
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

        <SafeAreaView style={{flex: 1}}>
          <SSChildHeader navigation={navigation} header={'Setting'} />

          <View style={{flex: 1}}>
            <ScrollView style={{marginTop: 20}}>
              {settingData.map(item => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#d7f4f7',
                      marginBottom: 15,
                      marginHorizontal: 10,
                      borderRadius: 6,
                      height: 40,
                      justifyContent: 'center',
                      paddingHorizontal: 10,
                      shadowColor: '#000',
                      shadowOpacity: 0.6,
                      shadowRadius: 5,
                      shadowOffset: {
                        width: 2,
                        height: 2,
                      },
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        letterSpacing: 0.9,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <SSButton
              text={'Çıkış'}
              textStyle={{marginVertical: 5, color: 'white', fontWeight: '500'}}
              containerStyle={{
                backgroundColor: '#8e0c1e',
                marginHorizontal: 10,
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    </AppLayout>
  );
}

export default SettingScreen;
