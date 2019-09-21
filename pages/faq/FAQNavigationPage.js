import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

// Can just use a single FAQ page that takes in title and body, since they're all the same
export default class FAQNavigationPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.faq.navigation.title}
          body = {Res.strings.faq.navigation.body}
          navigation={this.props.navigation}/>
        );
    }
}