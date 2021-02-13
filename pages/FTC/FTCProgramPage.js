import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image, SafeAreaView, Dimensions, StatusBar, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import ImageZoom from 'react-native-image-pan-zoom';
import Res from '@resources';

const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').height;

export default class FTCProgramPage extends Component {
    state = {}

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style = {styles.titleText}>FTC Resources</Text>
                <View>
                    <HeaderBackButton tintColor= {Res.FTCColors.BlueLightsBackground} onPress={() => this.props.navigation.goBack(null)} />
                    <FlatList
                    data={[
                        require("resources/ftc2020/images/1.jpg"),
                        require("resources/ftc2020/images/2.jpg"),
                        require("resources/ftc2020/images/3.jpg"),
                        require("resources/ftc2020/images/4.jpg"),
                        require("resources/ftc2020/images/5.jpg"),
                        require("resources/ftc2020/images/6.jpg"),
                        require("resources/ftc2020/images/7.jpg"),
                        require("resources/ftc2020/images/8.jpg"),
                        require("resources/ftc2020/images/9.jpg"),
                        require("resources/ftc2020/images/10.jpg"),
                        require("resources/ftc2020/images/11.jpg"),
                        require("resources/ftc2020/images/12.jpg"),
                        require("resources/ftc2020/images/13.jpg"),
                        require("resources/ftc2020/images/14.jpg"),
                        require("resources/ftc2020/images/15.jpg"),
                        require("resources/ftc2020/images/16.jpg"),
                        require("resources/ftc2020/images/17.jpg"),
                        require("resources/ftc2020/images/18.jpg"),
                        require("resources/ftc2020/images/19.jpg"),
                        require("resources/ftc2020/images/20.jpg"),
                        require("resources/ftc2020/images/21.jpg"),
                        require("resources/ftc2020/images/22.jpg"),
                        require("resources/ftc2020/images/23.jpg"),
                        require("resources/ftc2020/images/24.jpg"),
                        require("resources/ftc2020/images/25.jpg"),
                        require("resources/ftc2020/images/26.jpg"),
                        require("resources/ftc2020/images/27.jpg"),
                        require("resources/ftc2020/images/28.jpg"),
                        require("resources/ftc2020/images/29.jpg"),
                        require("resources/ftc2020/images/30.jpg"),
                        require("resources/ftc2020/images/31.jpg"),
                        require("resources/ftc2020/images/32.jpg"),
                        require("resources/ftc2020/images/33.jpg"),
                        require("resources/ftc2020/images/34.jpg"),
                        require("resources/ftc2020/images/35.jpg"),
                        require("resources/ftc2020/images/36.jpg"),
                        require("resources/ftc2020/images/37.jpg"),
                        require("resources/ftc2020/images/38.jpg"),
                    ]}
                    renderItem={({item}) => {
                        return (
                        <View 
                            marginBottom = {-300}>
                            <ImageZoom 
                            cropWidth={ITEM_WIDTH}
                            cropHeight={ITEM_HEIGHT}
                            imageWidth={ITEM_WIDTH}
                            imageHeight={ITEM_HEIGHT}>
                            <Image
                            resizeMode={'contain'}
                            style={{width:400, height:600}}
                            source={item}/>
                            </ImageZoom>
                        </View>
                        )
                    }}
                    keyExtractor={
                        (index) => {return index}
                    }
                    />
                </View>
            </SafeAreaView>
        );
    }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    titleText: {
        marginTop: 40,
        fontFamily: "Gilberto",
        fontSize: 95,
        color: Res.FTCColors.MellowApricot,
    },
  });