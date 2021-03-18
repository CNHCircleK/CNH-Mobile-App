import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONPurchaseForm extends Component {
    render() {
    	return <WebView source={{ uri: 'https://dcon.cnhcirclek.org/shop.html' }} style={{ marginTop: 20 }} />;
    }
}