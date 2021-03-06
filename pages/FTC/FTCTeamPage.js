import React, { Component } from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, SafeAreaView, TextInput, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { HeaderBackButton } from '@react-navigation/stack';
import Res from '@resources';

const CONTENT = [
    {
        title: 'Amazing Anecdotes',
        content: [
            "Brandon Kincaid",
            "Michelle Chan",
            "Julianna Langinger",
            "Philipp Penalber",
            "Julian Perez",
            "Sydney Lytton",
            "Ngoc Nguyen",
            "Shania Relucio",
            "Ping Tram",
            "Sharon Hu",
            "Pearl Netrayana",
            "Joleen Chiu",
            "Sean Mendoza"
        ]
    },
    {
        title: 'Blurry Beauties',
        content: [
            "Kristina Matsumoto",
            "Allela Ortin",
            "Jose Torres",
            "Phoebe Fagoaga",
            "Lizbeth Fernandez",
            "Sarah Groff",
            "Alvin Nguyen",
            "Hillary Ngo",
            "Jenny Chau",
            "Briana Rodriguez",
            "Edlynne Harrell-Sanchez"
        ]
    },
    {
        title: 'Collage Creators',
        content: [
            "Aviel Geronimo",
            "Callie Kay",
            "Alex Tellez",
            "Melanya Tiratsuyan",
            "Chelsea Linares",
            "John Nguyen",
            "Vincent Tran",
            "Kevin Wong",
            "Hannah Rodriguez",
            "Lucas O'Neil",
            "Frances Eusebio",
            "Guy Suankaew",
            "Alex Liang",
            "Anoop George"
        ]
    },
    {
        title: 'Commemorative Captures',
        content: [
            "Audrey Halim",
            "Carolina Paztena",
            "Samantha Wang",
            "Ramika Govergezy Badelboo",
            "Zoe Adriel Amba",
            "Sonny Tan",
            "Brian Duong",
            "Xavier De Anda",
            "Maysa Barakat",
            "Alexis Lares",
            "Cesar Cornejo",
            "Michelle De Dios",
            "Justin Fong",
            "Andre Yu"
        ]
    },
    {
        title: 'Crafty Cameras',
        content: [
            "Daniela Mena",
            "Jynl Faustorilla",
            "Harshita Rao",
            "Joshua Ranario",
            "Sophia Kim",
            "Mystie Ng",
            "Angelina Takada",
            "Coby Saykouman",
            "Jesse Eyster",
            "Josie V Rocha",
            "Nina Nguyen",
            "Makena Pollon",
            "Quynh Nguyen",
            "Stanley Truong"
        ]
    },
    {
        title: 'Flashback Frenzies',
        content: [
            "Joshua De Leon",
            "Chris Ke",
            "Riya Thomas",
            "Nathan Lin",
            "Wasay Noor",
            "Richie Vu",
            "Shelly Ye",
            "Sopheak Suy",
            "Kellie Stone",
            "Rebecca Quach",
            "Tommy Thach",
            "Kristin Nguyen",
            "Luis Gonzalez Herrera"
        ]
    },
    {
        title: 'Forever Filmers',
        content: [
            "Jamie Ly",
            "Tiffany Chen",
            "Caitleen Navarro",
            "Logan Neumann",
            "Soren Kim",
            "Jane Lee",
            "Kaitlyn Nieva",
            "Cristian Torres",
            "Sarah Guo",
            "Hannah Macaranas",
            "Celeste Vides",
            "Brian Ng"
        ]
    },
    {
        title: 'Forget-Me-Nots',
        content: [
            "Kathleen Panganiban",
            "Victoria Chau",
            "Wendy Xiu Ting Lee",
            "Aaron Piña",
            "Andrew Fukui",
            "Trevor McBrayer",
            "Juan Vilchis Palacios",
            "Khadija Rashidally",
            "Joanne Cabanlit",
            "Rachel Lam",
            "Diane Nguyen",
            "Sean Do",
            "Evelyn Perez"
        ]
    },
    {
        title: 'Freeze Frames',
        content: [
            "Audrey Abbott",
            "Pablo Servin",
            "Germaine Acacio",
            "Maira Rojas",
            "Karch Cabalo",
            "Brian Liu",
            "Jessica Itliong",
            "Robert Ponce",
            "Simmy, Chana",
            "Stephanie Hang",
            "Alexander Caceros",
            "Angela Batoon"
        ]
    },
    {
        title: 'Home-Movie Makers',
        content: [
            "Derek Baylis",
            "Henry Nguyen",
            "Janelle Yang",
            "Vincent Lee",
            "Jaslynn Diep",
            "Anna Le",
            "Vivian Nguyen",
            "Tatiana Milanez",
            "Victor Cruz Ramos",
            "Jovany Leon",
            "John-John Estanislao",
            "Alexis Matias"
        ]
    },
    {
        title: 'Loyal Legacies',
        content: [
            "Jonathan Guan",
            "Kevin Ngo",
            "Ashley Cabral",
            "Jessica Gibbons",
            "Hannah Romey",
            "James Cortes",
            "Brennan Cain",
            "Marco Diaz",
            "Ajay Ascano",
            "Alan Vu",
            "Jonash Poyaoan"
        ]
    },
    {
        title: 'Magnificent Memoirs',
        content: [
            "Olivia Chang",
            "Elijah Camtugan",
            "Dallas Daynard",
            "Darren Ngor",
            "Jessica Olivas",
            "Ivy Lee",
            "Ranny Naing",
            "Ana Palo",
            "Ethan Hill",
            "Ivana Madeline Samson",
            "Valerie Haines",
            "Yazid Makoon",
            "Tabitha Anctil",
            "Matthew Holt"
        ]
    },
    {
        title: 'Nostalgics',
        content: [
            "Johnny Le",
            "Chanelle Pineda",
            "Zoe Wilf",
            "Alexander Lat",
            "Elizabeth Barajas",
            "Brandon Tran",
            "Hayley Hoang",
            "Terra Duron",
            "Anjolie Betancourt",
            "Royce Lee",
            "Nathan Cortez",
            "Steve Lopez",
            "Hanna Lam"
        ]
    },
    {
        title: 'Passionate Photographers',
        content: [
            "Aerrow Cruz",
            "Marcel Rodriguez",
            "Andrea Lee",
            "Ashley Beltran",
            "Sabrina Zavala",
            "Janice Lee",
            "Roma Ghanekar",
            "Charlize Dizon",
            "Diemmy Nguyen",
            "Shelbi Felter",
            "Angela Peralta",
            "Justin Luc"
        ]
    },
    {
        title: 'Past Polaroids',
        content: [
            "Nicolas Wright",
            "Ana Espinosa",
            "Lila Masson",
            "Lilian Xie",
            "Pawnit Kaur",
            "Ami Suzui",
            "Jessica Estrada",
            "Chuc Nguyen",
            "Bidane Martinez Huerta",
            "Anthony Phan",
            "Phillip Nguyen",
            "Kien Truong"
        ]
    },
    {
        title: 'Peace Signers',
        content: [
            "Joyce Wu",
            "Vivian Ha",
            "Karishma Sira",
            "Alexis Jones",
            "Alvin Lim",
            "Jason Nguyen",
            "Christine Tran",
            "Celina Tiqui",
            "Jessica Lam",
            "Zoe Kirkland",
            "Trisha Dang",
            "Juliana Reeves",
            "Stephanie Ramirez",
            "Dylan Burger"
        ]
    },
    {
        title: 'Photobombers',
        content: [
            "Chio Saeyang",
            "Brandon Chavez Garcia",
            "Akash Singh",
            "Antonio Sanchez Ortiz",
            "Sandra Cheng",
            "Yousif Alfaddagh",
            "Kit Ma",
            "Anahi Gomez",
            "Vijya Raj",
            "Jonathan Ichino",
            "Naomi Olpindo",
            "Steven Ong"
        ]
    },
    {
        title: 'Rapid Blinkers',
        content: [
            "Jenny Savin",
            "Kimly Lewis",
            "Ricky Sparrow",
            "Vittoria Di Palma",
            "Luke Barrella",
            "Eric Chiu",
            "Devon Burton",
            "Hema Merugumala",
            "Kaixin Liu",
            "Jenny Kim",
            "Kristina Sevcik",
            "Janette Juarez",
            "Kylie Tran"
        ]
    },
    {
        title: 'Recollections',
        content: [
            "Josephine Pham",
            "Vanessa Lee",
            "Ulysses Tu",
            "Brian Nito",
            "Betssy Reyes",
            "Loren Padolina",
            "Erica Wei",
            "Andre Yee",
            "Alex Trinh",
            "Michael Visuthicho",
            "Brandon Ramirez",
            "Elena Thai",
            "Daniel Freeman",
            "Athena Kwan"
        ]
    },
    {
        title: 'Red Eyes',
        content: [
            "Adolfo Alan Garduno",
            "Luke Thomas",
            "Johnathon Tran",
            "Qingjun Hu",
            "Karina Hernandez",
            "Celine Diep",
            "Kathy Nguyen",
            "Rachel Nguyen",
            "Jolie Liu",
            "Kaitlyn Chieh",
            "Renz Lane",
            "Katie Ross",
            "Alana Kahawai"
        ]
    },
    {
        title: 'Scrapbookers',
        content: [
            "Anne Le",
            "Lauren Acosta",
            "Ryan Yee",
            "Kaitlin Calleros",
            "Ben Distor",
            "Anne Le",
            "Valerie Nguyen",
            "Ahtziri Rodriguez",
            "Tommy Phang",
            "Victor Gonzalez",
            "Betty Luengas",
            "Stefanie Peddijanto",
            "Kayla Lee"
        ]
    },
    {
        title: 'Selfie Stars',
        content: [
            "Sophia Herrera",
            "Ralph Gamboa",
            "Mia Kirsten Santos",
            "Millennia Gamez",
            "Ethan Kwong",
            "Minh Nghiem",
            "Brian Tran",
            "Ethan Godfrey",
            "Alexandria Handaja",
            "Shirley Chan",
            "Ricardo Porras",
            "Jeevan Bhullar"
        ]
    },
    {
        title: 'Shimmering Smiles',
        content: [
            "Elizabeth Mazuca",
            "My-Thy Nguyen",
            "Qianyi Wang",
            "Sarah Dueltgen",
            "Allie Sondak",
            "Kate Darios",
            "Albert Dang",
            "Christine Nguyen",
            "Chloe Jacobs",
            "Adora Mae Bosano",
            "Elaine Vuong",
            "Ramtin Azarbad",
            "Justin Tran"
        ]
    },
    {
        title: 'Simpy Storytellers',
        content: [
            "Jack Chen",
            "Brandon Capulong",
            "Gary Nguyen",
            "Juan Perez",
            "Samuel Lee",
            "Khanh Nguyen",
            "Chaya Pearl",
            "Samia Hufane",
            "Trisha Socito",
            "Austin Hoang",
            "Matthew Maldonado",
            "Tina Bui",
            "Rebeca Laguna"
        ]
    },
    {
        title: 'Souvenir-Snapshots',
        content: [
            "Heyley Pavon",
            "Mbugua Munyutu",
            "Cassie Beckman",
            "Emily Zomoroudi",
            "Kimberlee Pham",
            "Alexis Bright",
            "Diane Zheng",
            "Esmeralda Cruz",
            "Melina Chamorro",
            "Kyla Anderson",
            "Sophia Villarreal",
            "Pinky Ho"
        ]
    },
    {
        title: 'Throwback Thursdays',
        content: [
            "Douglas Shimizu",
            "Matthew Leung",
            "Danny Valdez",
            "Noah Tyler Ratley",
            "Jennifer Shimizu",
            "Amy Pham",
            "Victoria Yib",
            "Andrew Yu",
            "Celene Yang",
            "Daniel Xiang",
            "Rachel Ahn",
            "Varot Musigdilok",
            "Emmy Francis",
            "Ivanna Mendez"
        ]
    },
    {
        title: 'Trippy Tripods',
        content: [
            "Vanessa Vidas",
            "Alyssa Chavez",
            "Nora Lovell",
            "Jennifer Hernandez",
            "Angelina Moonswami",
            "Cathy Pham",
            "Kristi Ryono",
            "Jian Ting Tan",
            "Austen Liao",
            "Lillian On",
            "Justin Linder",
            "Randolph Pham"
        ]
    },
    {
        title: 'Unforgettables',
        content: [
            "Alfred Aung",
            "Tiffany Poedyasmara",
            "Jasmin Rodriguez",
            "Isabelle Barajas",
            "Tiffany Nguyen",
            "Kylie French",
            "Ryan Chau",
            "Joey Duong",
            "Lenore Fabiyi",
            "Jonathan Ngo",
            "Danielle Lee",
            "Daniel Min",
            "Maria Landron"
        ]
    },
    {
        title: 'Vintage Vixens',
        content: [
            "Chloe O'Connor",
            "Jarod Mica",
            "Marcus Dugenia",
            "Daeton Dennert",
            "Britney Chow",
            "Allyza Cadiz ",
            "Kimhuy Ngo",
            "Maggie Ly ",
            "Benecia Kwan",
            "Caitlin Aladham",
            "Jonathan Kim",
            "Keeyana Martinelli",
            "Braelyn Joy Travis"
        ]
    }
];

export default class FTCTeamPage extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
        search: ''
    };

    onChangeSearch = (nSearch) => {
        this.setState({ search: nSearch });
    };

    findTeam = () => {
        console.log("hi");
        let team = CONTENT.find(element => element.content.map(s => s.toLowerCase()).includes(this.state.search.toLowerCase()));
        if(team) {
            Alert.alert(
                "Found!",
                team.title,
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
            Alert.alert(
                "Not Found!",
                'This name is not found in any team :(',
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={400}
                style={[styles.teamSection, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Text style={styles.teamTitle}> {section.title} </Text>
            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        function renderList ({item, index}) {
            if (index == 0) {
                return(
                    <TouchableOpacity style={styles.capItem}>
                        <Text style={styles.capText}>{item}</Text>
                    </TouchableOpacity>
                );
            }
            return (
                <TouchableOpacity style={styles.teamItem}>
                    <Text style={styles.teammateText}>{item}</Text>
                </TouchableOpacity>
            );
        };
        return (
            <Animatable.View
                duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <FlatList
                    data={section.content}
                    renderItem={renderList}
                    keyExtractor={ (item, index) => index.toString() }
                />
            </Animatable.View>
        );
    };

    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <HeaderBackButton tintColor= 'white' onPress={() => this.props.navigation.goBack(null)} />
                <View style={styles.titleShape}>
                        <Image
                            style={styles.titleImage}
                            source={require('../../resources/ftc2020/images/camera.png')}
                        />
                        <Text style = {styles.titleText}>FTC Teams</Text>
                    </View>
                <ScrollView keyboardShouldPersistTaps='always'
                    contentContainerStyle={styles.scrollView}>
                    <View style={styles.searchContainer}>
                        <View style={{ justifyContent: 'center' , alignItems: 'center'}}>
                            <Text style={styles.searchText}>Find your team! Enter your name:</Text>
                        </View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.onChangeSearch}
                            value={this.state.search}
                        />
                        <View style={{ justifyContent: 'center' , alignItems: 'center', paddingTop: 10}}>
                            <TouchableOpacity style={styles.searchButton} onPress={this.findTeam}>
                                <Text style={styles.searchButtonText}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Accordion
                        activeSections={activeSections}
                        sections={CONTENT}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        duration={400}
                        onChange={this.setSections}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    scrollView:{
      paddingTop: 10,
      padding: 10
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 100,
        color: Res.FTCColors.MellowApricot,
        left: 50,
    },
    titleShape: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    titleImage: {
        height: 150,
        width: 150,
        justifyContent: "flex-end",
        position: "absolute",
        left: 0,
        bottom: 5,
    },
    searchContainer: {
        marginHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 30,
    },
    searchText: {
        fontFamily: 'Arbutus-Slab',
        color: Res.FTCColors.ScheduleText,
        fontSize: 16
    },
    searchButton: {
        backgroundColor: Res.FTCColors.TeaGreen,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: 80,
    },
    searchButtonText: {
        fontFamily: 'Arbutus-Slab',
        textAlign: 'center',
    },
    textInput: {
        fontSize: 16,
        height: 24,
        borderBottomColor: '#E3AEA8',
        borderBottomWidth: 1,
        color: '#E9C99C',
        fontFamily: 'Arbutus-Slab',
        marginTop: 20
    },
    teamSection: {
        padding: 0,
        opacity: 0.9,
        borderRadius: 10,
        marginVertical: 7,
        marginHorizontal: 10,
    },
    teamTitle: {
        fontFamily:"French-Press",
        fontSize: 40,
        color: "white",
        marginHorizontal: 10,
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: Res.FTCColors.BlueLightsBackground,
    },
    inactive: {
        backgroundColor: Res.FTCColors.SpanishPink,
    },
    teammateText: {
        fontFamily: "Arbutus-Slab",
        fontSize: 17,
        color: 'black',
        opacity: 0.7
    },
    capText: {
        fontFamily: "Arbutus-Slab",
        fontSize: 17,
        color: 'black',
        opacity: 0.7
    },
    teamItem: {
        backgroundColor: Res.FTCColors.TeaGreen,
        padding: 7,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 5
    },
    capItem: {
        backgroundColor: Res.FTCColors.MellowApricot,
        padding: 7,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 5
    }
});
