import React, {Component} from 'react';
import { ListItem, Left, Thumbnail, Body, View, Text } from 'native-base';
import TimeAgo from './time';
import * as Font from 'expo-font';
let customFonts = {
  'Sacramento': require('../../assets/fonts/Sacramento-Regular.ttf'),
  'Lato': require('../../assets/fonts/Lato-LightItalic.ttf'),
  'Balu': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
};
class DataItem extends Component {
  state = {
    fontsLoaded: false,
  };
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
    componentDidMount() {
      this._loadFontsAsync();
      
    }
    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    
    
    render() {
      
        return(
            <ListItem avatar onPress={this.handlePress}>
              <Left>
                <Thumbnail style ={{width:100,height:100,marginTop:8, borderRadius:65}} source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
              </Left>
              <Body>
                <Text numberOfLines={2} style={{fontFamily:'Balu',fontSize:17}}>{this.data.title}</Text>
                <Text note numberOfLines={2} style={{marginTop:4,fontFamily:'Balu',fontSize:15}}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8 }}>
                    <Text note style={{fontFamily:'Balu',fontSize:14}}>{this.data.source.name}</Text>
                    <TimeAgo style={{fontFamily:'Balu',fontSize:14}} time={this.data.publishedAt}/>
                </View>
              </Body>
            </ListItem>
        );
    }
}

export default DataItem;