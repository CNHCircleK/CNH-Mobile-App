import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
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
      body: Res.strings.templateinfo.body
    };
  }
    render() {
        return (
            <View style={styles.container}>
                <InfoTitle>
                {this.state.title}{'\n'}
                </InfoTitle>
                <InfoHeader>{this.state.header}</InfoHeader>
                <InfoParagraph >
                {this.state.body}
                </InfoParagraph>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#14314D",
        padding: 20
    }

});
