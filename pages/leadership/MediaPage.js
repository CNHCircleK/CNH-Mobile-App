import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class MediaPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.media.title}
          image={Res.strings.media.image}
          header={Res.strings.media.header}
          body = {
            <>
            <Text>{Res.strings.media.body}{'\n'}{'\n'}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.mediaForm)}>{Res.strings.media.clickHereApplication}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
