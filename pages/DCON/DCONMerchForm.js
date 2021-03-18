import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONMerchForm extends Component {
    render() {
        return <WebView source={{ uri: 'https://drive.google.com/file/d/1iaaTtr5tOeDWCgzw1f0CAq4_h8ZXbeeq/view?usp=sharing' }} style={{ marginTop: 20 }} />;
    }
}