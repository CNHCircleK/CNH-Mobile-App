import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Font, AppLoading } from 'expo';
import InfoParagraph from '../components/InfoParagraph'
import InfoHeader from '../components/InfoHeader'
import InfoTitle from '../components/InfoTitle'
import Res from '../resources/res'

export default class TemplateInfoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,  //Res.strings.templateinfo.title,
      header: props.header,  //Res.strings.templateinfo.header,
      image:  props.image, //require('../resources/images/HomePage/FTC2019_LOGO.png'),
      body :props.body  //Res.strings.templateinfo.body
    };
  }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                {this.state.title !== undefined &&
                  <InfoTitle>
                  {this.state.title}{'\n'}
                  </InfoTitle>
                }
                {this.state.image !== undefined &&
                <Image style={{width: 250, height: 250}}
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
        backgroundColor: "#14314D",
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
