import React, {Component} from 'react';
import { enableScreens } from 'react-native-screens';
import Main from './src/screens/main'

enableScreens();

class App extends Component {
  
  async componentDidMount() {
    await Font.loadAsync({
      Sacramento: require("./assets/fonts/Sacramento-Regular.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  render() {
    return (
      <Main />
    );
  }
}

export default App
