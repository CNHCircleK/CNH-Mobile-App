import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Button } from 'react-native';
import { Font, AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoParagraph from './InfoParagraph';
import InfoHeader from './InfoHeader';
import InfoTitle from './InfoTitle';
import Res from '@resources';
import { HeaderBackButton } from 'react-navigation';

export default class TemplateInfoPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: props.title,  //Res.strings.templateinfo.title,
        header: props.header,  //Res.strings.templateinfo.header,
        image:  props.image, //require('../resources/images/HomePage/FTC2019_LOGO.png'),
        body :props.body,  //Res.strings.templateinfo.body
      };
    }

    render() {        
        const navigation = this.props.navigation;

        return (
            <ScrollView style={styles.height}>
              <HeaderBackButton onPress={() => navigation.goBack(null)} />
              <View style={styles.container}>
                {this.state.title !== undefined &&
                  <InfoTitle>
                  {this.state.title}{'\n'}
                  </InfoTitle>
                }
                {this.state.image !== undefined &&
                <Image style={{width: 200, height: 200}}
                resizeMode="contain"
                source={this.state.image}/>
                }
                {this.state.header !== undefined &&
                <InfoHeader>{'\n'}{this.state.header}{'\n'}</InfoHeader>
                }
                {this.state.body !== undefined &&
                <InfoParagraph >
                {this.state.body}
                </InfoParagraph>
                }
              </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    height: {
      flex: 1,
      backgroundColor: "#1a1d32",
    },
    header: {
      
    }

});
