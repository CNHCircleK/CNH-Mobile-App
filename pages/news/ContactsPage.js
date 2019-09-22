import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class ContactsPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.contact.title}
          image={Res.strings.contact.image}
          body = {Res.strings.contact.body}/>
        );
    }
}
