import React, {useState} from 'react';
import {View, Image, Dimensions, Pressable, StyleSheet} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const images = [
  require('../../../Assets/Icons/User5.png'),
  require('../../../Assets/Icons/Wallet.png'),
  require('../../../Assets/Icons/History5.png'),
  require('../../../Assets/Icons/Share.png'),
  require('../../../Assets/Icons/Setting.png'),
];

const Colors = [
  '#efbbff',
  '#dB9611',
  '#905583',
  '#be29ed',
  '#800080',
  '#660066',
];

const {width} = Dimensions.get('window');

const dotOffset = width / 6;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Circle = ({color, isLead, index, position, rollButton, changeIcon}) => {
  const defaultSharedValue = useSharedValue(dotOffset * index + 7);
  const calculatedPosition = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    calculatedPosition.value = withSpring(position.value, {
      stiffness: 250,
      mass: 0.1,
    });

    const scaleValue =
      calculatedPosition.value - 3 > defaultSharedValue.value ? 1 : 0;

    // if (isLead && calculatedPosition.value <= 10) {
    //   rotation.value = 0;
    // } else {
    //   rotation.value = Math.PI * (calculatedPosition.value / width) * 1.5;
    // }
    return {
      position: 'absolute',
      width: 50,
      height: 50,
      zIndex: isLead ? 10 : 0,
      justifyContent: 'center',
      alignItems: 'center',
      top: isLead ? undefined : defaultSharedValue.value,
      right: 5,
      transform: [
        {
          scale: isLead
            ? 1
            : withSpring(scaleValue, {
                mass: 0.09,
                restDisplacementThreshold: 0.09,
              }),
        },
        {
          translateY: isLead
            ? withSpring(position.value, {
                stiffness: 250,
                mass: 0.1,
              })
            : 1,
        },
        // {
        //   rotate: isLead ? withSpring(`${rotation.value}rad`) : `${0}rad`,
        // },
      ],
    };
  });
  return (
    <AnimatedPressable
      style={style}
      onPress={() =>
        isLead || calculatedPosition.value >= 10 ? rollButton?.() : undefined
      }>
      <View style={styles.buttonContent}>
        {isLead ? (
          changeIcon ? (
            <Image
              source={require('../../../Assets/Icons/Close.png')}
              style={styles.buttonImage}
            />
          ) : (
            <Image
              source={require('../../../Assets/Icons/Menu.png')}
              style={styles.buttonImage}
            />
          )
        ) : (
          <Image source={images[index]} style={styles.buttonImage} />
        )}
      </View>
    </AnimatedPressable>
  );
};

function SSHeader({navigation}) {
  const position = useSharedValue(3);
  // const rotation = useSharedValue(Math.PI);
  const [changeIcon, setChangeIcon] = useState(false);

  const rollButton = () => {
    'worklet';
    if (position.value === dotOffset * 5 + 3) {
      setChangeIcon(false);
      position.value = 6;

      console.log('Helllo');
    } else {
      setChangeIcon(true);
      position.value = dotOffset * 5 + 3;
      console.log('ALLAU');
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: 'red',
          alignItems: 'flex-end',
          paddingRight: 5,
          zIndex: 99,
        }}>
        <Circle
          // color={Colors[0]}
          index={0}
          position={position}
          isLead
          rollButton={rollButton}
          changeIcon={changeIcon}
        />
        <Circle
          color={Colors[1]}
          index={1}
          position={position}
          rollButton={() => navigation.navigate('WalletScreen')}
        />
        <Circle
          color={Colors[2]}
          index={2}
          position={position}
          rollButton={() => navigation.navigate('GameHistoryScreen')}
        />
        <Circle
          color={Colors[3]}
          index={3}
          position={position}
          rollButton={() => navigation.navigate('ReferenceScreen')}
        />
        <Circle
          color={Colors[4]}
          index={4}
          position={position}
          rollButton={() => navigation.navigate('SettingScreen')}
        />
        <Circle
          color={Colors[5]}
          index={0}
          position={position}
          rollButton={() => navigation.navigate('ProfileScreen')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  menuContainer: {
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 3,
  },
  buttonImage: {
    height: 20,
    width: 20,
  },
});

export default SSHeader;
