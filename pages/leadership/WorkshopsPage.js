import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class WorkshopsPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.workshops.title}
          image={Res.strings.workshops.image}
          header={Res.strings.workshops.header}
          body = {
            <>
            <Text>{Res.strings.workshops.body}{'\n'}{'\n'}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.workshopsForm)}>{Res.strings.workshops.clickHereApplication}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
