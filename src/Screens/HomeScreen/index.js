import React, {useState, FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  StatusBar,
} from 'react-native';
import SSHeader from '../../Components/UI/SSHeader';
import {ScrollView} from 'react-native-gesture-handler';
import AppLayout from '../../Layouts';
import SSButton from '../../Components/UI/SSButton';
import SSTextInput from '../../Components/UI/SSTextInput';

//datalar en erken saatte çözenlerden doğru ileri gidecek
const winngDataForFirstImage = [
  {name: 'turgay01', time: '23:08:47', award: 300},
  {name: 'turgay02', time: '23:09:50', award: 200},
  {name: 'turgay03', time: '23:10:55', award: 150},
  {name: 'turgay04', time: '23:12:12', award: 100},
  {name: 'turgay05', time: '23:17:52', award: 90},
  {name: 'turgay02', time: '23:09:50', award: 80},
  {name: 'turgay03', time: '23:10:55', award: 70},
  {name: 'turgay04', time: '23:12:12', award: 60},
  {name: 'turgay05', time: '23:17:52', award: 50},
  {name: 'turgay01', time: '23:08:47', award: 40},
  {name: 'turgay02', time: '23:09:50', award: null},
  {name: 'turgay03', time: '23:10:55', award: null},
  {name: 'turgay04', time: '23:12:12', award: null},
  {name: 'turgay05', time: '23:17:52', award: null},
  {name: 'turgay02', time: '23:09:50', award: null},
  {name: 'turgay03', time: '23:10:55', award: null},
  {name: 'turgay04', time: '23:12:12', award: null},
  {name: 'turgay05', time: '23:17:52', award: null},
];

const {width, height} = Dimensions.get('screen');

const IMAGE_WIDTH = width * 0.65;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;

const images = [
  `https://images.pexels.com/photos/15173129/pexels-photo-15173129.jpeg`,
  `https://images.pexels.com/photos/12488163/pexels-photo-12488163.jpeg`,
  `https://images.pexels.com/photos/7380124/pexels-photo-7380124.jpeg`,
  `https://images.pexels.com/photos/14352139/pexels-photo-14352139.jpeg`,
  `https://images.pexels.com/photos/14417229/pexels-photo-14417229.jpeg`,
  `https://images.pexels.com/photos/14454203/pexels-photo-14454203.jpeg`,
  `https://images.pexels.com/photos/15962125/pexels-photo-15962125.jpeg`,
  `https://images.pexels.com/photos/15072998/pexels-photo-15072998.jpeg`,
  `https://images.pexels.com/photos/16065661/pexels-photo-16065661.jpeg`,
];

const DATA = [...Array(images.length).keys()].map((_, i) => {
  return {
    key: `${i}key`,
    image: images[i],
    title: `Buraya cevaba ilişlin title gelecek.`,
    subtitle: [
      'açıklama 1',
      'açıklama 2',
      'açiklama 3',
      'açiklama 4',
      'açıklama 5',
    ],
  };
});

const SPACING = 20;

const Content = ({item, value, setAnswer}) => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 22,
          textTransform: 'uppercase',
        }}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {item.title}
      </Text>
      {item.subtitle.map(itemSUB => {
        return <Text style={{fontSize: 12, opacity: 0.4}}>{itemSUB}</Text>;
      })}

      <View
        style={{
          marginTop: 5,
        }}>
        <SSTextInput
          title={'Cevap'}
          placeholder={'Buraya cevabınızı yazınız.'}
          value={value}
          onChangeValue={inComingValue => setAnswer(inComingValue)}
        />
        <View style={{marginTop: 5}} />
        <SSButton
          text={'Onay'}
          onPress={() => alert('Home')}
          containerStyle={{flex: 1, backgroundColor: 'green'}}
          textStyle={{color: 'white', fontWeight: '500', letterSpacing: 0.7}}
        />
      </View>
    </View>
  );
};

function HomeScreen(props) {
  const {navigation} = props;

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const progresss = Animated.modulo(Animated.divide(scrollX, width), width);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const ref = React.useRef();
  console.log('index', index);
  console.log(answer);

  const rankColorControl = value => {
    switch (value) {
      case 1:
        return '#098223';

      case 2:
        return '#2cb74a';

      case 3:
        return '#5be579';

      case 4:
        return '#a8a817';

      case 5:
        return '#d3d33d';

      case 6:
        return '#e0e04e';

      case 7:
        return '#913700';

      case 8:
        return '#bf5513';

      case 9:
        return '#d66926';

      case 10:
        return '#ed8544';

      default:
        break;
    }
  };

  const rankTextColor = value => {
    if (value < 11 && value > 0) {
      return 'white';
    }
  };
  return (
    <>
      <AppLayout>
        <SafeAreaView style={{marginTop: SPACING}}>
          <SSHeader navigation={navigation} />
          <View style={{height: IMAGE_HEIGHT * 2.1, marginTop: 5}}>
            <Animated.FlatList
              ref={ref}
              data={DATA}
              keyExtractor={item => item.key}
              horizontal
              pagingEnabled
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true},
              )}
              bounces={false}
              style={{flexGrow: 0, zIndex: 9999}}
              contentContainerStyle={{
                height: IMAGE_HEIGHT + SPACING * 2.1,
                marginLeft: SPACING * 2,
              }}
              onMomentumScrollEnd={e => {
                setIndex(Math.floor(e.nativeEvent.contentOffset.x / width));
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                const inputRange = [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ];

                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0, 1, 0],
                });

                const translateY = scrollX.interpolate({
                  inputRange,

                  outputRange: [50, 0, 20],
                });
                return (
                  <>
                    <Animated.View
                      style={{
                        width,
                        paddingVertical: SPACING,
                        opacity,
                        transform: [{translateY}],
                      }}>
                      <TouchableOpacity>
                        <Image
                          source={{uri: item.image}}
                          style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                        />
                      </TouchableOpacity>
                    </Animated.View>
                  </>
                );
              }}
            />
            <View
              style={{
                width: IMAGE_WIDTH + SPACING,
                aligItems: 'center',
                marginLeft: SPACING * 1.5,
                zIndex: 99,
              }}>
              {DATA.map((item, index) => {
                const inputRange = [
                  (index - 0.2) * width,
                  index * width,
                  (index + 0.2) * width,
                ];

                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0, 1, 0],
                });

                const rotateY = scrollX.interpolate({
                  inputRange,
                  outputRange: ['45deg', '0deg', '90deg'],
                });
                return (
                  <View>
                    <Animated.View
                      key={item.key}
                      style={{
                        position: 'absolute',
                        opacity,
                        transform: [{perspective: IMAGE_WIDTH * 4}, {rotateY}],
                      }}>
                      <Content
                        item={item}
                        value={answer}
                        setAnswer={value => setAnswer(value)}
                      />
                    </Animated.View>
                  </View>
                );
              })}
            </View>

            <Animated.View
              style={{
                width: IMAGE_WIDTH + SPACING * 2,
                position: 'absolute',
                backgroundColor: 'white',
                backfaceVisibility: true,
                zIndex: -1,
                top: SPACING * 2,
                left: SPACING,
                bottom: 0,
                shadowColor: '#000',
                shadowOpacity: 0.6,
                shadowRadius: 24,
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                transform: [
                  {
                    perspective: IMAGE_WIDTH * 4,
                  },
                  {
                    rotateY: progresss.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: ['0deg', '90deg', '180deg'],
                    }),
                  },
                ],
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: IMAGE_WIDTH + SPACING * 4,
              paddingHorizontal: SPACING,
              paddingVertical: SPACING,
            }}>
            <TouchableOpacity
              disabled={index === 0}
              onPress={() => {
                ref?.current?.scrollToOffset({
                  offset: (index + -1) * width,
                  animated: true,
                });
              }}
              style={{opacity: index === 0 ? 0.2 : 1}}>
              <Text style={{fontSize: 12, fontWeight: '800'}}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={index === DATA.length - 1}
              onPress={() => {
                ref?.current?.scrollToOffset({
                  offset: (index + 1) * width,
                  animated: true,
                });
              }}
              style={{opacity: index === DATA.length - 1 ? 0.2 : 1}}>
              <Text style={{fontSize: 12, fontWeight: '800'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View
          style={{
            borderTopColor: 'white',
            borderTopWidth: 2,
            flex: 1,
            paddingHorizontal: 10,
            paddingTop: 5,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {winngDataForFirstImage.map((item, itemIndex) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',

                      marginTop: 3,
                      paddingHorizontal: 5,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 20,
                          height: 20,
                          marginRight: 5,
                          borderRadius: 10,
                          backgroundColor: rankColorControl(itemIndex + 1),
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: rankTextColor(itemIndex + 1),
                          }}>
                          {itemIndex + 1}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontWeight: '500',
                          letterSpacing: 0.7,
                          color: '#0d272b',
                        }}>
                        {item.name}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={{
                          color: '#095419',
                          fontWeight: 'bold',
                          letterSpacing: 0.7,
                        }}>
                        {item.award !== null ? `+${item.award} tl` : null}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        marginLeft: 20,
                      }}>
                      <Text
                        style={{
                          fontWeight: '500',
                          letterSpacing: 0.7,
                          color: '#0d272b',
                        }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </>
              );
            })}
          </ScrollView>
        </View>
      </AppLayout>
    </>
  );
}

export default HomeScreen;
