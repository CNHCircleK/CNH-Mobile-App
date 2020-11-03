import React, { Component } from 'react';
import { View, StyleSheet, SectionList, FlatList, Text, Image, StatusBar, Platform } from 'react-native';

const leadershipData = [
    {
        title: "Executive Board",
        data: [[
            {
                title: "District Governor",
                name: "Katherine Thy Hoang",
                school: "UC Irvine",
                email: "governor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/KatherineThyHoang.jpg')
            },
            {
                title: "District Secretary",
                name: "Ryan Tan",
                school: "CSU Fullerton",
                email: "secretary@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/RyanTan.jpg')
            },
            {
                title: "District Treasurer",
                name: "Brandon Dimapasoc",
                school: "UC Davis",
                email: "treasurer@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/BrandonDimapasoc.jpg')
            }
        ]]
    },
    {
        title: "Lieutenant Governors",
        data: [[
            {
                title: "Capital",
                name: "Darienne Viloria",
                school: "UC Davis",
                email: "capital@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/DarienneViloria.jpg')
            },
            {
                title: "Central Coast",
                name: "Hyun Jin Kim",
                school: "Moorpark College",
                email: "centralcoast@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/HyunJinKim.jpg')
            },
            {
                title: "Citrus",
                name: "Douglas Shimizu",
                school: "CSU Fullerton",
                email: "citrus@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/DouglasShimizu.jpg')
            },
            {
                title: "Desert Oasis",
                name: "Vanessa Meza-Perez",
                school: "UN Las Vegas",
                email: "desertoasis@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/VanessaMezaPerez.jpg')
            },
            {
                title: "Foothill",
                name: "Emily Reale",
                school: "Pasadena City College",
                email: "foothill@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/EmilyReale.jpg')
            },
            {
                title: "Golden Gate",
                name: "Dennis Lim",
                school: "San Francisco ",
                email: "goldengate@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/DennisLim.jpg')
            },
            {
                title: "Metro",
                name: "Matthew Ujemov",
                school: "El Camino College",
                email: "metro@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/MatthewUjemov.jpg')
            },
            {
                title: "Paradise",
                name: "Justina Voong",
                school: "San Diego State University",
                email: "paradise@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/JustinaVoong.jpg')
            },
            {
                title: "Sunset",
                name: "Jonnie Nguyen",
                school: "UC Santa Cruz",
                email: "sunset@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/JonnieNguyen.jpg')
            }
        ]]
    },
    {
        title: "District Chairs",
        data: [[
            {
                title: "Administration and Operations Chair",
                name: "Erica Wei",
                school: "Orange Coast College",
                email: "cbr@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/EricaWei.jpg')
            },
            {
                title: "Club Building & Revitalization",
                name: "Nicolas Wright",
                school: "Cal Poly SLO",
                email: "cbr@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/NicolasWright.jpg')
            },
            {
                title: "Communications & Marketing",
                name: "Joshua Ranario",
                school: "University of the Pacific",
                email: "cm@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/JoshuaRanario.jpg')
            },
            {
                title: "District Convention",
                name: "Kyle San Jose",
                school: "UC Irvine",
                email: "dcon@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/KyleSanJose.jpg')
            },
            {
                title: "Fall Training Conference",
                name: "Aaron Lee",
                school: "Pasadena City College",
                email: "ftc@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/AaronLee.jpg')
            },
            {
                title: "Kiwanis Family & Foundation",
                name: "Miyu Nakajima",
                school: "UC San Diego",
                email: "kfamily@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/MiyuNakajima.jpg')
            },
            {
                title: "Member Recognition",
                name: "David Su",
                school: "UC Irvine",
                email: "mr@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/DavidSu.jpg')
            },
            {
                title: "Membership Development & Education",
                name: "Amy Bryant",
                school: "UN Reno",
                email: "mde@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/AmyBryant.jpg')
            },
            {
                title: "Service",
                name: "Kim Hinojos",
                school: "Orange Coast College",
                email: "service@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/KimHinojos.jpg')
            },
            {
                title: "Technology",
                name: "Matthew Kim",
                school: "CSU Long Beach",
                email: "technology@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/MatthewKim.jpg')
            },
            {
                title: "President's Retreat",
                name: "Henry Pham",
                school: "CSU Fullerton",
                email: "pr@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/HenryPham.jpg')
            }
        ]]
    },
    {
        title: "Kiwanis Committee & Regional Advisors",
        data: [[
            {
                title: "District Administrator",
                name: "Armando Velazquez",
                email: "administrator@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/ArmandoVelazquez.jpg')
            },
            {
                title: "Director of Service Leadership Programs",
                name: "Bruce Hennings",
                email: "bruce@cnhkiwanis.org",
                uri: require('../resources/images/districtleadership/BruceHennings.jpg')
            },
            {
                title: "Southern Assistant District Administrator and MD&E Advisor",
                name: "Peter Yu",
                email: "s-asstadmin@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/PeterYu.jpg')
            },
            {
                title: "Northern Assistant District Administrator and Kiwanis Family & Foundation Advisor",
                name: "Hebron Viray",
                email: "n-asstadmin@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/HebronViray.jpg')
            },
            {
                title: "Special Events Advisor",
                name: "Robert Chirk",
                email: "se-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/RobertChirk.jpg')
            },
            {
                title: "Technology Advisor",
                name: "Terrence James Diaz",
                email: "technology-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/TerrenceJamesDiaz.jpg')
            },
            {
                title: "District Convention Advisor",
                name: "Camille Goulet",
                email: "dcon-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/CamilleGoulet.jpg')
            },
            {
                title: "Fall Training Conference Advisor",
                name: "Chris Tung",
                email: "ftc-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/ChrisTung.jpg')
            },
            {
                title: "Capital Regional Advisor",
                name: "Dan Germain",
                email: "capital-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/DanGermain.jpg')
            },
            {
                title: "Assistant Capital Regional Advisor",
                name: "Tom Leahy",
                email: "capital-asstadvisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/TomLeahy.jpg')
            },
            {
                title: "Central Coast Regional Advisor",
                name: "Patrick Ballecer",
                email: "centralcoast-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/PatrickBallecer.jpg')
            },
            {
                title: "Desert Oasis Regional Advisor",
                name: "Linda Marx",
                email: "desertoasis-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/LindaMarx.jpg')
            },
            {
                title: "Assistant Desert Oasis Regional Advisor and Assistant District Convention Advisor",
                name: "Ron Liu",
                email: "desertoasis-asstadvisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/RonLiu.jpg')
            },
            {
                title: "Foothill Regional Advisor",
                name: "Grace Chi",
                email: "foothill-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/GraceChi.jpg')
            },
            {
                title: "Golden Gate Regional Advisor",
                name: "Joe Lee",
                email: "goldengate-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/JoeLee.jpg')
            },
            {
                title: "Citrus Regional Advisor and District Secretary Advisor",
                name: "Scott Smith",
                email: "citrus-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/ScottSmith.jpg')
            },
            {
                title: "Assistant Citrus Regional Advisor",
                name: "Yaret Casillas Smith",
                email: "citrus-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/YaretCasillasSmith.jpg')
            },
            {
                title: "Metro Regional Advisor",
                name: "Maria Garcia-Barajas",
                email: "metro-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/MariaGarciaBarajas.jpg')
            },
            {
                title: "Assistant Metro Regional Advisor, Member Recognition Advisor, and District Treasurer Advisor",
                name: "Garvey Su",
                email: "metro-asstadvisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/GarveySu.jpg')
            },
            {
                title: "Paradise Regional Advisor and Communications & Marketing Advisor",
                name: "Patricia Ryder",
                email: "paradise-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/PatriciaRyder.jpg')
            },
            {
                title: "Sunset Regional Advisor",
                name: "Derek Lubich",
                email: "sunset-advisor@cnhcirclek.org",
                uri: require('../resources/images/districtleadership/DerekLubich.jpg')
            },
            {
                title: "General Kiwanis Committee Member",
                name: "Don Hull",
                email: "dhull754@earthlink.net",
                uri: require('../resources/images/districtleadership/DonHull.jpg')
            }
        ]]
    }
]

export default class DistrictLeadershipPage extends Component {
    getSectionTitleRender = (title) => {
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        ); 
    };

    getItemRender = (item) => {
        return (
            <FlatList
                horizontal={false}
                numColumns={2}
                data={item}
                renderItem={
                    ({item}) =>
                        <View style={styles.item}>
                            <Image source={item.uri} style={styles.itemImage} />
                            <Text style={{...styles.itemText, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text style={styles.itemText}>{item.name}</Text>
                            {'school' in item ? <Text style={styles.itemText}>{item.school}</Text> : null}
                            <Text style={styles.itemText}>{item.email}</Text>
                        </View>
                }
                keyExtractor={ (item, index) => index.toString() }
                columnWrapperStyle={styles.itemList}
            />
        );
    };
    
    render() {
       return (
            <View style={styles.container}>
                <SectionList
                    contentContainerStyle={styles.scrollView}
                    stickySectionHeadersEnabled={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({item}) => this.getItemRender(item) }
                    renderSectionHeader={({section: {title}}) => this.getSectionTitleRender(title)}
                    sections={leadershipData}
                    keyExtractor={ (item, index) => index.toString() }
                />            
            </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 30
    },
    itemList: {
        flex: 1,
        justifyContent: 'space-around'
    },
    item: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImage: {
        width: 80,
        height: 80,
        marginBottom: 5,
        borderRadius: 40,
        resizeMode: 'cover'
    },
    itemText: {
        textAlign: 'center',
        width: 160,
        fontSize: 12,
        flexWrap: 'wrap'
    }
});


