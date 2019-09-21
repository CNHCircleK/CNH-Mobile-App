import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class ContactsPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.dj.title}
          image={Res.strings.dj.image}
          header={Res.strings.dj.header}
          body = {Res.strings.dj.body}/>
        );
    }
}
