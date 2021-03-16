import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image, SafeAreaView, Dimensions, StatusBar, Text, ScrollView } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import ImageZoom from 'react-native-image-pan-zoom';
import Res from '@resources';

const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').height;

export default class DCONConductPage extends Component {
    state = {}

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style = {styles.titleText}>DCON Code of Conduct</Text>
                    <HeaderBackButton tintColor= {Res.FTCColors.BlueLightsBackground} onPress={() => this.props.navigation.goBack(null)} />
                    <ScrollView style = {styles.pageView}>
                            <ImageZoom 
                            cropWidth={ITEM_WIDTH}
                            cropHeight={ITEM_HEIGHT}
                            imageWidth={ITEM_WIDTH}
                            imageHeight={ITEM_HEIGHT}>
                            <Image source={require("resources/dcon2020/images/cc.jpg")}
                            resizeMode={'stretch'}
                            style={{width:ITEM_WIDTH, height:ITEM_HEIGHT}}/>
                            </ImageZoom>
                        </ScrollView>
                    {/* <FlatList
                    data={[
                        require("resources/dcon2020/images/cc.jpg"),
                    ]}
                    renderItem={({item}) => {
                        return (
                        <View style = {styles.pageView}>
                            <ImageZoom 
                            cropWidth={ITEM_WIDTH}
                            cropHeight={ITEM_HEIGHT}
                            imageWidth={ITEM_WIDTH}
                            imageHeight={ITEM_HEIGHT}>
                            <Image
                            resizeMode={'stretch'}
                            style={{width:ITEM_WIDTH, height:ITEM_HEIGHT}}
                            source={item}/>
                            </ImageZoom>
                        </View>
                        )
                    }}
                    keyExtractor={
                        (index) => {return index}
                    }
                    /> */}
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
        backgroundColor: Res.FTCColors.BlueLightsBackground,
    },
    titleText: {
        marginTop: 40,
        fontFamily: "Gilberto",
        fontSize: 95,
        color: Res.FTCColors.MellowApricot,
    },
    pageView: {
        marginBottom: 0,
    },
  });