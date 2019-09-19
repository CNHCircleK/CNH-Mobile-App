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
      title: Res.strings.templateinfo.title,
      header: Res.strings.templateinfo.header,
      image: require('../resources/images/HomePage/FTC2019_LOGO.png'),
      body: Res.strings.templateinfo.body
    };
  }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                <InfoTitle>
                {this.state.title}{'\n'}
                </InfoTitle>
                <Image style={{width: 250, height: 250}}

                source={this.state.image}/>

                <InfoHeader>{this.state.header}{'\n'}</InfoHeader>
                <InfoParagraph >
                {this.state.body}
                </InfoParagraph>
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
