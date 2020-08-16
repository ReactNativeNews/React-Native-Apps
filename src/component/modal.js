//import libraries
import React, { Component } from 'react';
import { Dimensions, Modal, Share, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button, Text} from 'native-base';
import { WebView } from 'react-native-webview';
import { Feather } from '@expo/vector-icons';
let customFonts = {
    'Sacramento': require('../../assets/fonts/Sacramento-Regular.ttf'),
    'Lato': require('../../assets/fonts/Lato-LightItalic.ttf'),
    'Balu': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
  };
const webViewHeight = Dimensions.get('window').height ;

// create a component
class ModalComponent extends Component {
    state = {
        fontsLoaded: false,
      };
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }
    componentDidMount() {
        this._loadFontsAsync();
      }
    handleShare = () => {
        const {url, title} = this.props.articleData;
        const message = `${title}\n\n${url}\n\nDownload the GoodNews App: https://drive.google.com/drive/folders/1hi-SVArjC2eyl1v9d3wYqfSKiqc5pRvl?usp=sharing`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
          <View style={{flex:1}}>  
            <StatusBar style="dark" />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={this.handleClose}
                fullScreen={true}
                
                
            >
               
                <Container transparent>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Button onPress={this.handleClose} transparent>
                            <Feather name="arrow-left-circle" size={28} color='#212121' style={{marginLeft:20}}/>
                        </Button>
                        <Right>
                        <Button onPress={this.handleShare} transparent>
                            <Feather name="share" size={28} color='#212121' style={{marginRight:20}}/>
                        </Button>
                    </Right>
                    </View>
                <View style={{alignItems:'center',padding:20}}>
                    <Text style={{fontFamily:'Balu',fontSize:20}}>{articleData.title}</Text>
                </View>
                    
                        
                   
                    
                    <Content contentContainerStyle={{height: '100%'}}>
                        <WebView source={{uri:url}}
                        onError={this.handleClose} 
                        startInLoadingState
                        
                        />
                    </Content>
                  
                </Container>
            </Modal>
          </View>
        );
        } else {
            return null;
        }
    }
}

export default ModalComponent;
