import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

// Can just use a single FAQ page that takes in title and body, since they're all the same
export default class FAQTimePage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.faq.time.title}
          body = {Res.strings.faq.time.body}
          navigation={this.props.navigation}/>
        );
    }
}