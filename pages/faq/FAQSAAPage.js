import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

// Can just use a single FAQ page that takes in title and body, since they're all the same
export default class FAQSAAPage extends Component {

    render() {
        return (
          <>
          <TemplateInfoPage
          title={Res.strings.faq.saa.title}
          body = {
            <>
            <Text>{Res.strings.faq.saa.body}
            <Text style={{color: '#107896'}} onPress={() => Linking.openURL(Res.links.saaForm)}> {Res.strings.faq.saa.clickHereApplication} </Text>
            </Text>
            </>
          }
          navigation={this.props.navigation}/>

          </>
        );
    }

}
