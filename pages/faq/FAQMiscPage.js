import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class FAQMiscPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.faq.misc.title}
          body={Res.strings.faq.misc.body}
          navigation={this.props.navigation}/>
        );
    }
}