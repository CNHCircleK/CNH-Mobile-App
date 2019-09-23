import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

// Can just use a single FAQ page that takes in title and body, since they're all the same
export default class FAQNavigationPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.faq.navigation.title}
          body = {
            <>
            <Text>{Res.strings.faq.navigation.body}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.drivingDirections)}>{Res.strings.faq.navigation.clickHereDirections}</Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>
        );
    }
}
