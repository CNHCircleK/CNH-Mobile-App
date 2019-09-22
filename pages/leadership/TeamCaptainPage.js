import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class TeamCaptainPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.teamCaptain.title}
          image={Res.strings.teamCaptain.image}
          header={Res.strings.teamCaptain.header}
          body = {
            <>
            <Text>{Res.strings.teamCaptain.body}{'\n'}{'\n'}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.teamCaptainForm)}>{Res.strings.teamCaptain.clickHereApplication}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
