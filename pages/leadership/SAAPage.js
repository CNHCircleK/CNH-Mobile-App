import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class SAAPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.saa.title}
          image={Res.strings.saa.image}
          header={Res.strings.saa.header}
          body = {
            <>
            <Text>{Res.strings.saa.body}{'\n'}{'\n'}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.saaForm)}>{Res.strings.saa.clickHereApplication}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
