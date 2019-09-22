import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class FAQActivitiesPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.faq.activities.title}
          body = {Res.strings.faq.activities.body}
          navigation={this.props.navigation}/>
        );
    }
}