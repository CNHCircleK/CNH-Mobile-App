import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class CampfireSkitsPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.campfireSkits.title}
          image={Res.strings.campfireSkits.image}
          header={Res.strings.campfireSkits.header}
          body = {
            <>
            <Text>{Res.strings.campfireSkits.body}{'\n'}{'\n'}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.campfireSkitsForm)}>{Res.strings.campfireSkits.clickHereCampfireApplication}{'\n'}{'\n'}</Text>
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.talentForm)}>{Res.strings.campfireSkits.clickHereTalentApplication}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
