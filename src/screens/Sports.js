import React, { Component } from 'react';
import { Alert, View, StatusBar } from 'react-native';
import { Container, Content, List, Text, Spinner, Header } from 'native-base';
import * as Font from 'expo-font';
import DataItem from '../component/dataItem';
import Modal from '../component/modal';

import { getArticles } from '../service/news';
let customFonts = {
  'Sacramento': require('../../assets/fonts/Sacramento-Regular.ttf'),
  'Lato': require('../../assets/fonts/Lato-LightItalic.ttf'),
  'Balu': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
};
export default class ListThumbnailExample extends Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    this._loadFontsAsync();
    getArticles('sports').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:20 }}>
         <Spinner color='#ef5350' />
         <Text style={{marginTop: 5, fontFamily:'Balu', fontSize:20}} children="Please wait while we load news for you.." />
      </View>
    ) : (
        <List 
        dataArray={this.state.data}
        renderRow={(item) => {
            return (
              <DataItem onPress={this.handleItemDataOnPress} data={item} />
            )
        }} />
    )

    return (
      <Container>  
      <StatusBar style="light" />
      <Text style={{color:"#ef5350",fontSize:45,marginTop:50,marginBottom:10,fontFamily: 'Sacramento',width:'100%',textAlign:'center'}}>GoodNews</Text>
      <Content>
        {view}
      </Content>
      <Modal 
        showModal={this.state.setModalVisible}
        articleData={this.state.modalArticleData}
        onClose={this.handleModalClose}
      />
    </Container>
    );
  }
}