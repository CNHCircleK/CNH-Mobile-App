import React, { Component } from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, SafeAreaView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Res from '@resources';
import { RECORDING_OPTIONS_PRESET_HIGH_QUALITY } from 'expo-av/build/Audio';

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
            "Vanessa Meza-Perez", 
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
            "Phoebe  Fagoaga", 
            "Lizbeth Fernandez", 
            "Nathan Dang", 
            "Sarah Groff", 
            "Alvin Nguyen", 
            "Hillary Ngo", 
            "Aaron Lee", 
            "Jenny Chau", 
            "Matthew Kim", 
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
            "Nina  Nguyen", 
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
            "Kim Nguyen", 
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
            "Ricardo Aficial", 
            "Tiffany Chen", 
            "Caitleen Navarro", 
            "Logan Neumann", 
            "Soren Kim", 
            "Jane Lee", 
            "Kaitlyn Nieva", 
            "Cristian Torres", 
            "Emily Reale", 
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
            "Mylan Ross", 
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
            "Alicia Sieu", 
            "Brian Liu", 
            "Jessica Itliong", 
            "Joey Duong", 
            "Robert Ponce", 
            "Stephanie Hang", 
            "Alexander Caceros", 
            "Miyu Nakajima"
        ]
    },
    {
        title: 'Home-Movie Makers',
        content: [
            "Derek Baylis", 
            "Henry Nguyen", 
            "Janelle Yang", 
            "Vincent Lee", 
            "Hyun Jin Kim", 
            "Jaslynn Diep", 
            "Anna Le", 
            "Tiffany Nguyen", 
            "Vivian Nguyen", 
            "Tatiana Milanez", 
            "Victor  Cruz Ramos", 
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
            "Darienne Viloria", 
            "Ashley Cabral", 
            "Jessica Gibbons", 
            "Hannah  Romey", 
            "James Cortes", 
            "Brennan Cain", 
            "Marco Diaz", 
            "Simmy Chana", 
            "Ajay Ascano", 
            "Alan Vu", 
            "Justina Voong", 
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
            "Emily Yu", 
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
            "Ana  Espinosa", 
            "Lila Masson", 
            "Lilian Xie", 
            "Pawnit Kaur", 
            "Garrett Moore", 
            "Ami Suzui", 
            "Kyle  San Jose", 
            "Jessica  Estrada", 
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
            "Amy Bryant", 
            "Antonio Sanchez Ortiz", 
            "Sandra Cheng", 
            "Yousif Alfaddagh", 
            "Kit Ma", 
            "Amy Kobayashi", 
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
            "Matthew Ujemov", 
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
            "Reyes", "Betssy", 
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
            "Karina  Hernandez", 
            "Celine Diep", 
            "Kim Hinojos", 
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
            "Jason Liu", 
            "kaitlin calleros", 
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
            "David Su", 
            "Ethan Godfrey", 
            "Alexandria Handaja", 
            "Shirley Chan", 
            "Ricardo Porras", 
            "Miyu Noguchi", 
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
            "Ryan Tan", 
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
            "Brandon Dimapasoc", 
            "Gary Nguyen", 
            "Juan Perez", 
            "Samuel Lee", 
            "Khanh Nguyen", 
            "Chaya Pearl", 
            "Samia Hufane", 
            "Trisha Socito", 
            "Austin Hoang", 
            "MatthewMaldonado", 
            "Tina  Bui", 
            "Rebeca Laguna"
        ]
    },
    {
        title: 'Souvenir-Snaps',
        content: [
            "Heyley Pavon", 
            "Mbugua Munyutu", 
            "Sandra Vang", 
            "Cassie Beckman", 
            "Emily Zomoroudi", 
            "Kimberlee Pham", 
            "Alexis  Bright", 
            "Diane Zheng", 
            "Esmeralda Cruz", 
            "Melina Chamorro", 
            "Kyla Anderson", 
            "Sophia Villarreal", 
            "Pinky Ho", 
            "Jonnie Nguyen"
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
        title: 'Trippi Tripods',
        content: [
            "Vanessa Vidas", 
            "Alyssa Chavez", 
            "Nora Lovell", 
            "Jackie Vallo", 
            "Jennifer Hernandez", 
            "Angelina Moonswami", 
            "Cathy Pham", 
            "Kristi Ryono", 
            "Sergio Barrios", 
            "Jian Ting Tan", 
            "Austen Liao", 
            "Ong", "Steven", 
            "Justin Linder", 
            "Randolph Pham"
        ]
    },
    {
        title: 'Unforgettables',
        content: [
            "Alfred Aung", 
            "Tiffany Poedyasmara", 
            "Shirley Wong", 
            "Jasmin Rodriguez", 
            "Isabelle Barajas", 
            "Caden Tran", 
            "Katherine  Hoang", 
            "Kylie French", 
            "Ryan Chau", 
            "Dennis Lim", 
            "Lenore Fabiyi", 
            "Jonathan Ngo", 
            "Danielle Lee "
        ]
    },
    {
        title: 'Vintage Vixens',
        content: [
            "Chloe O'Connor", 
            "Jarod Mica", 
            "Jimmy Tang", 
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
        search: '',
        searchTeam: '[team name displayed here]'
    };

    onChangeSearch = (nSearch) => {
        this.setState({ search: nSearch });
    };

    findTeam = () => {
        let team = CONTENT.find(element => element.content.includes(this.state.search));
        team ? this.setState({ searchTeam: team.title }) :  this.setState({ searchTeam: 'This name is not found in any team :(' });
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
                <Text style={styles.teamTitle}>{section.title}</Text>
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
                <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
                    <View style={styles.titleShape}>
                        <Image 
                            style={styles.titleImage}
                            source={require('../../resources/ftc2020/images/camera.png')}
                        />
                        <Text style = {styles.titleText}>FTC Teams</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.searchText}>Find your team! Enter your name:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.onChangeSearch}
                            value={this.state.search}
                        />
                        <Text style={styles.searchText}>{this.state.searchTeam}</Text>
                        <TouchableOpacity style={styles.searchButton} onPress={this.findTeam}>
                            <Text style={styles.searchButtonText}>Search</Text>
                        </TouchableOpacity>
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
        backgroundColor: Res.FTCColors.TealBlue
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 100,
        color: Res.FTCColors.MellowApricot,
        left: 60,
    },
    titleShape: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: Res.FTCColors.TealBlue,
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
        marginHorizontal: 20
    },
    searchText: {
        fontFamily: 'Arbutus-Slab',
        color: Res.FTCColors.MellowApricot
    },
    searchButton: {
        backgroundColor: Res.FTCColors.TeaGreen,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: 80
    }, 
    searchButtonText: {
        fontFamily: 'Arbutus-Slab',
        textAlign: 'center'
    },
    textInput: {
        height: 24,
        borderBottomColor: '#E3AEA8',
        borderBottomWidth: 1,
        color: '#E9C99C',
        fontFamily: 'Arbutus-Slab',
        marginBottom: 10
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
        backgroundColor: Res.FTCColors.TealBlue,
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