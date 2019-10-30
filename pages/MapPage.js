import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, ImageBackground, Text, SectionList, FlatList, TouchableOpacity, TouchableWithoutFeedback, Linking, Modal } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import ImageZoom from 'react-native-image-pan-zoom';
import Res from '@resources';

export default class MapPage extends Component {
    render() {
        return (
            <ScrollView minimumZoomScale={1} maximumZoomScale={5} contentContainerStyle={{height: 1000}}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5} horizontal contentContainerStyle={{width: 1000}}>
    <Image 
            style={{width: 1000, height: 800}}
            source={require('../resources/images/HomePage/map.png')} />
    </ScrollView>
</ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 5,
        height: 5,
        resizeMode: 'contain' }
});


