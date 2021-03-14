import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONMerchForm extends Component {
    render() {
        return <WebView source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSd4cTg8TF_7QlRizrA2UMd2syQ5L8ti40ICDH7y6vwVAWnReQ/viewform' }} style={{ marginTop: 20 }} />;
      }
}