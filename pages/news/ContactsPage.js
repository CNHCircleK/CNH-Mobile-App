import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class ContactsPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.contact.title}
          body = {Res.strings.contact.body}
          navigation={this.props.navigation}/>
        );
    }
}
