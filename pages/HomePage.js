import React, { Component } from 'react';
import { View, StyleSheet, SectionList, FlatList } from 'react-native';
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
        },
        {
            title: "leadership opportunities",
            data: [["workshops", "campfire skits", "team leaders"]]
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
                renderItem={({item}) => <PlainButton style={styles.navButton} key={item}>{item}</PlainButton>}
            />
        );
    }

    getSectionTitleRender(title) {
        return (
            <PlainText>{title}</PlainText>
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
                <PlainButton style={styles.trailer}>teaser trailer / call to ftc trailer</PlainButton>
                <SectionList
                    style={styles.navList}
                    renderItem={({ item, index, section }) => this.getItemRender(item, index)}
                    renderSectionHeader={({ section: {title} }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <PlainButton style={styles.siteButton}>view ftc website</PlainButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    trailer: {
        height: 150,
        width: "100%"
    },
    navList: {
        paddingTop: 10,
        paddingLeft: 16
    },
    navRow: {
        marginTop: 5,
        marginBottom: 10
    },
    navButton: {
        marginRight: 10
    },
    siteButton: {
        marginBottom: 15,
        paddingTop: 0,
        paddingLeft: 0,
        height: 50,
        width: 150,
        alignItems: "center",
        justifyContent: "center"
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