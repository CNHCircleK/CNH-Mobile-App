import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, SectionList, FlatList } from 'react-native';
import PlainButton from '../components/PlainButton';
import PlainText from '../components/PlainText';

export default class HomePage extends Component {
    homeData = [
        {
            title: "news",
            data: [["teaser trailer", "committee", "office hours"]]
        }, 
        {
            title: "know before you go",
            data: [["packing list", "code of conduct", "faq"]]
        }
    ]

    getItemRender(item, index) {
        return (
            <FlatList 
                style={styles.navRow}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={index}
                data={item}
                renderItem={({item}) => 
                <ImageBackground source={require("../resources/homepage/hintpapers.png")}
                style={styles.navButton}>
                    <View style={styles.navButtonTextContainer}>
                    <Text style={styles.navButtonText}>
                        {item}
                    </Text>
                    </View>
        
                    
                    
                </ImageBackground>}
            />
        );
    }

    getSectionTitleRender(title) {
        return (
            <PlainText style={styles.navTitle}>{title}</PlainText>
        );
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            // <View style={styles.container}>
            //     <ImageBackground source={require("../resources/homepage/stc.jpg")} style={styles.background}>
            //         <View style={styles.header}>
            //             <Text style={styles.headerText}>CNH Circle K!</Text>
            //         </View>
            //         <View style={styles.nav}>
            //             <View style={styles.navRow}>
            //                 <TouchableOpacity style={styles.navButton} onPress={() => navigate("Map")}>
            //                     <Text style={styles.navText}>Venue Map</Text>
            //                 </TouchableOpacity>
            //                 <TouchableOpacity style={styles.navButton} onPress={() => navigate("Schedule")}>
            //                     <Text style={styles.navText}>Schedule</Text>
            //                 </TouchableOpacity>
            //                 <TouchableOpacity style={styles.navButton} onPress={() => navigate("Welcomes")}>
            //                     <Text style={styles.navText}>Welcomes</Text>
            //                 </TouchableOpacity>
            //             </View>
            //             <View style={styles.navRow}>
            //                 <TouchableOpacity style={styles.navButton} onPress={() => navigate("Info")}>
            //                     <Text style={styles.navText}>General Info</Text>
            //                 </TouchableOpacity>
            //                 <TouchableOpacity style={styles.navButton} onPress={() => navigate("Documents")}>
            //                     <Text style={styles.navText}>Documents</Text>
            //                 </TouchableOpacity>
            //                 <TouchableOpacity style={styles.navButton} onPress={() => navigate("People")}>
            //                     <Text style={styles.navText}>CNH People</Text>
            //                 </TouchableOpacity>
            //             </View>
            //         </View>
            //     </ImageBackground>
            // </View>
            <View style={styles.container}>
                {/* <PlainButton style={styles.trailer}>teaser trailer / call to ftc trailer</PlainButton> */}
                <Image source={require("../resources/homepage/LOGO1222.png")} 
                style={styles.logo}
                /> 
                <Image source={require("../resources/homepage/stc.jpg")} 
                style={styles.trailer}
                /> 
                <SectionList
                    style={styles.navList}
                    renderItem={({ item, index, section }) => this.getItemRender(item, index)}
                    renderSectionHeader={({ section: {title} }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <Text style={styles.siteButton}>view ftc website</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#14314D"
    },
    logo: {
        position: "absolute",
        width: 150,
        height: 150,
        top: 30,
        zIndex: 10,
        marginTop: 10


    },
    trailer: {
        marginTop: 150,
        height: 150,
        width: "100%"
    },
    navList: {
        paddingTop: 30,
    },
    navRow: {
        marginTop: 25,
        marginBottom: 30
    },
    navTitle: {
        marginLeft: 25,
        color: "#FFFFFF"
    },
    navButton: {
        marginLeft: 10,
        width: 150,
        height: 150
    },
    navButtonTextContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    navButtonText: {
        fontSize: 13,
        color: "#FFFFFF",
    },
    siteButton: {
        marginBottom: 100,
        color: "#FFFFFF"
    }
    // background: {
    //     width: "100%",
    //     height: "100%"
    // },
    // header: {
    //     marginTop: 60,
    //     padding: 20,
    //     backgroundColor: "rgba(0, 0, 0, 0.5)",
    //     borderColor: "rgba(255, 30, 30, 0.1)",
    //     borderTopWidth: 2,
    //     borderBottomWidth: 2,
    // },
    // headerText: {
    //     fontSize: 40,
    //     fontWeight: "bold",
    //     color: "white",
    //     textShadowRadius: 100,
    //     textAlign: "center"
    // },
    // nav: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // navRow: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center"
    // },  
    // navButton: {
    //     height: 100,
    //     width: 100,
    //     margin: 5,
    //     backgroundColor: "rgba(0, 0, 0, 0.8)",
    //     borderRadius: 50,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // navText: {
    //     fontSize: 14,
    //     fontWeight: "bold",
    //     color: "white"
    // }
}); 