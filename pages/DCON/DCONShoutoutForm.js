import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONShoutoutForm extends Component {
    render() {
        return <WebView source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScM8RkKl4T_hB2QWBejv1EJMXkABdamFCZ_PGH1Mbiw8_WgKw/viewform' }} style={{ marginTop: 20 }} />;
      }
}