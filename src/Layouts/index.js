import React from 'react';
import {View, Text} from 'react-native';

function AppLayout({children}) {
  return <View style={{backgroundColor: '#64e6f4', flex: 1}}>{children}</View>;
}

export default AppLayout;
