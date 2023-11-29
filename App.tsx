import * as React from 'react';
import { View, useWindowDimensions, Text} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'grey'}}>
  	<Text>Tab One</Text>
  </View>
);
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
  	<Text>Tab Two</Text>
  </View>
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'lightgrey'}} >
  	<Text>Tab Three</Text>
  </View>
);
export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
  { key: 'third', title: 'Third' },
  ]);
 
  const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  });
  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'red'}
      	inactiveColor={'black'}
          style={{marginTop:25,backgroundColor:'white'}}
  	/>
  );
  return (
  	<TabView
      	navigationState={{ index, routes }}
      	renderScene={renderScene}
      	renderTabBar={renderTabBar}
      	onIndexChange={setIndex}
      	initialLayout={{ width: layout.width }}
        style={{marginTop:30}}
  	/>
  );
}
export default App;