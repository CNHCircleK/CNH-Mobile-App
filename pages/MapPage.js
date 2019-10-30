import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, ImageBackground, Text, SectionList, FlatList, TouchableOpacity, TouchableWithoutFeedback, Linking, Modal } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import ImageZoom from 'react-native-image-pan-zoom';
import Res from '@resources';

export default class MapPage extends Component {
    render() {
        return (
            <ScrollView style={{height: 1200}}>
    <ScrollView horizontal style={{width: 1850}}>
    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={1800}
                       imageHeight={1350}
                       enableCenterFocus = {false}
                       minScale = {.25}>
    <Image 
            style={{width: 1700, height: 1300}}
            source={require('../resources/images/HomePage/map.png')} />
            </ImageZoom>
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


