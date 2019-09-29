import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class DjPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.dj.title}
          image={Res.strings.dj.image}
          header={Res.strings.dj.header}
          body = {
            <>
            <Text>{Res.strings.dj.body}{'\n'}{'\n'}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.djForm)}>{Res.strings.dj.clickHereApplication}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
