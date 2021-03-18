import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image, SafeAreaView, Dimensions, StatusBar, Text } from 'react-native';
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
                <View>
                    <HeaderBackButton tintColor= {Res.FTCColors.BlueLightsBackground} onPress={() => this.props.navigation.goBack(null)} />
                    <FlatList
                    data={[
                        require("resources/dcon2020/images/cc1.jpg"),
                        require("resources/dcon2020/images/cc2.jpg"),
                    ]}
                    renderItem={({item}) => {
                        return (
                        <View
                            marginBottom = {-100}>
                            <ImageZoom 
                            cropWidth={ITEM_WIDTH}
                            cropHeight={ITEM_HEIGHT}
                            imageWidth={ITEM_WIDTH}
                            imageHeight={ITEM_HEIGHT}>
                            <Image
                            resizeMode={'contain'}
                            style={{width:ITEM_WIDTH, height:ITEM_HEIGHT}}
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
        backgroundColor: Res.FTCColors.BlueLightsBackground,
    },
    titleText: {
        marginTop: 40,
        fontFamily: "Gilberto",
        fontSize: 95,
        color: Res.FTCColors.MellowApricot,
    },
  });