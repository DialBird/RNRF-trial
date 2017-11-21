/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Next, End } from './components/configScreen';
import { TabView, TabView2, TabView3 } from './components/tabScreen';

const instructions = Platform.select({
  ios: 'Hello ios',
  android: 'Hello and'
});

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="tabbar" tabs initial>
        <Scene key="tab1" component={TabView} title="ホーム" icon={()=><Icon name={'ios-home'} size={30}/>}/>
        <Scene
          key="tab2"
          component={TabView2}
          title="メイン"
          icon={()=><Icon name={'ios-menu'} size={30}/>}
          onLeft={()=>Actions.tab1()}
          leftTitle="ホーム"
          onRight={()=>Actions.tab3()}
          rightTitle="設定"
        />
        <Scene
          key="tab3"
          component={TabView3}
          title="設定"
          icon={()=><Icon name={'ios-cog'} size={30}/>}
          onRight={()=>Actions.next()}
          rightTitle="Next"
        />
      </Scene>
      <Scene
        key="next"
        component={Next}
        title="next"
        onRight={()=>Actions.end()}
        rightTitle="End"
      />
      <Scene
        key="end"
        component={End}
        title="end"
      />
    </Stack>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default App;
