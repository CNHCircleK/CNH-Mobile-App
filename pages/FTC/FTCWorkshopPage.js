import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Platform, StatusBar } from 'react-native';
import { sendPushNotification } from '../../utils/Notifications'
import { sendData, getData } from '../../utils/Firebase';
import { ScrollView } from 'react-native-gesture-handler';

const scheduleIdToWorkshop = new Map([
    [6, 0],
    [8, 1],
    [10, 2],
    [14, 3],
    [16, 4]
])

const workshopInfo = [
    {
        title: "Workshops Session I (Friday)",
        workshops: [
            {
                title: "DSI: Serving the Environment",
                hosts: "Karishma Sira & Kristin Nguyen",
                description: "Come join your fellow CNH Circle K members in Learning about this year's District Service Initiative: Serving the Environment! The District Service Committee will be providing you all the info you need to learn about the DSI and how you can partake in it this year."
            },
            {
                title: "Adjusting Your Mindset; Getting That Job",
                hosts: "Chris Tung",
                description: "Entering the job market and pursuing new endeavors can often be discouraging at times. Learn about how to modify your frame of mind to put yourself in the best state to tackle the challenges ahead."
            },
            {
                title: "Chemistry Outside the Classroom",
                hosts: "Garrett Moore & Sandra Vang",
                description: "Having trouble with your STEM courses? Too bad! Let's dive into the chemistry we don't hear about in class! Feeling \"chemistry\" will explore the connections you make on an everyday basis and what makes some relationships worth fighting for and others not so much. Do you feel the chemistry??"
            },
            {
                title: "Bullet Journaling 101",
                hosts: "Shirley Wong",
                description: "Interested in bullet journaling, but don’t know where to start? Bullet Journaling 101 will teach you the basics from supplies you’ll need, how to set up your journal, and more! Let’s get planning together!"
            }
        ]
    },
    {
        title: "Workshops Session II (Friday)",
        workshops: [
            {
                title: "Learn About C.H.A.D (Club Hosted Administrative Decisions)",
                hosts: "Nora Lovell & Ryan Tan",
                description: "What'sss Up BroooOo?! Do you wanna join Chi Ka ppa Iota?? DuUUude it's a super DOPE club with DOPE people. Anywayyysss, come Learn about C.H.A.D, aka Club Hosted Administrative Decisions, aka Club Elections! Whether you're a new member or a returning member come learn how to host effective and DOPE elections while having a breakdown of some SWAGGY leadership opportunities. Come out and RUSH to our DOPE SWAG webinar! :-)"
            },
            {
                title: "Overcoming Imposter Syndrome",
                hosts: "Chio Saeyang",
                description: "Emergency Meeting!! You're the imposter! Head to the Cafeteria where the details of \"Imposter Syndrome\" are revealed and how everyone in this lobby is secretly The Imposter! There will be personal assessments on the type of imposter you are and simulations and advice on how to overcome imposter syndrome."
            },
            {
                title: "Hawaii 101",
                hosts: "Alana Kahawai",
                description: "Ever wonder what it's like living in the middle of the ocean? Well this is just the place to learn about it. Aloha and welcome to everything you should know about Hawaii, from history to food to the cultures found here. As much as we are \"paradise\", we are so much more than that."
            },
            {
                title: "Possible Future Life and Work in Times of Pandemic",
                hosts: "Peter Yu",
                description: "With the ever-changing times of this pandemic, people in industry have started to discuss and forecast how various industries will change in the future and how work and life will change. The purpose of this workshop is to get attendees to think about how their potential industry will change over the next 3-5 years due to the pandemic, how work types and roles will be blended, and how work from home will affect society."
            }
        ]
    },
    {
        title: "Workshops Session III (Friday)",
        workshops: [
            {
                title: "DFI Education",
                hosts: "Derek Baylis and Joyce Wu",
                description: "Ever feel like you could do more for charities? Make some memories while planning and participating in fundraising projects. Oftentimes we fundraise for many charitable organizations. Learn about the District Fundraising Initiatives Project and why we raise funds for these charitable causes!"
            },
            {
                title: "What's your Myers Briggs Type?",
                hosts: "Jackie Vallo & Jimmy Tang",
                description: "You may know yourself, but do you REALLY know yourself? Your Myers Briggs Type is indicated by your psychological preferences in how you perceive the world and make decisions. Are you more extroverted or introverted? Do you rely more on your intuition or senses? Do you think more with your head or heart? Come to our workshop to take an assessment, see what types you're compatible with, and find out a little more about yourself and how YOU perceive the world!"
            },
            {
                title: "Planning your Financial Future",
                hosts: "Andrea Lee",
                description: "Step right up, step right up!!! You're the next contestant on the Price is Right!! On today's episode, our theme is *drumroll please* . . . YOUR future!! Together, let's plan just how you can save up for a shiny new Lamborghini or put aside some extra money to make some more MEMORIES!!!"
            },
            {
                title: "Exec?",
                hosts: "Kat Hoang?",
                description: "?"
            }
        ]
    },
    {
        title: "Workshops Session I (Saturday)",
        workshops: [
            {
                title: "Recruitment and Outreach Strategies",
                hosts: "Amy Bryant & Xavier De Anda",
                description: "Now more than ever we need a strong and effective force behind member recruitment. It's likely that potential and even current members will lose interest in the club. Our workshop is aimed to provide innovative and proactive ways to keep clubs alive during the pandemic. We'll do this by encouraging members and officers to not only take advantage of the plethora of online resources but also to be proactive in keeping recruitment consistent throughout the year and not confined to traditional recruitment time periods."
            },
            {
                title: "Real Talks",
                hosts: "Alicia Sieu & Caden Tran",
                description: "Do you ever feel simpy or just want to talk? In addition to Service, Leadership and Fellowship, Real Talks provides a safe environment for everyone to share their life experiences. This open forum allows you to reflect on your past and embrace the diversity that is Circle K."
            },
            {
                title: "Resume?",
                hosts: "Erica?",
                description: "?"
            }
        ]
    },
    {
        title: "Workshops Session II (Saturday)",
        workshops: [
            {
                title: "Circle K in the International Level",
                hosts: "Steve Lopez",
                description: "Circle K International. That's the club we're in! But what exactly is \"international\" here? From service and fundraising projects and partners to the governing board and even an International Convention, this workshop will teach you all the wonderful International Level!"
            },
            {
                title: "Self-Care and Feeling Good",
                hosts: "Audrey Abbott & Alfred Aung",
                description: "Have you been taking care of yourself? Reflect on your recent self-care strategies, learn some new tips, talk about online fatigue, and engage in some heartfelt activities!"
            },
            {
                title: "Kiwanis Family during Quarantine",
                hosts: "Miyu Nakajima",
                description: "Time to get on this K-Fam Train and learn more about how the Kiwanis Family is reacting to the current Quarantine. Learn about the different Kiwanis Family groups and how you can get more involved with K-Kids, Builders Club, Aktion Club, Key CLub, KIWIN'S, and Kiwanis. Learn why these relationships are important."
            }
        ]
    },
]

const defaultInfo = {
    title: "Not Found",
    workshops: []
}

export default class FTCWorkshopPage extends Component {

    render() {
        const { route, navigation } = this.props;
        const info = workshopInfo[scheduleIdToWorkshop.get(route.params.id)] || defaultInfo

        return (
            <View style={styles.container}>
                <View style={styles.title}>
                        <Text style={styles.titleText}>{info.title}</Text>
                </View>
                <ScrollView 
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >   
                    { info.workshops.map(workshop => (
                        <View style={styles.workshop}>
                            <Text style={styles.workshopTitle}>{workshop.title}</Text>
                            <Text style={styles.workshopHost}>{workshop.hosts}</Text>
                            <Text style={styles.workshopDescription}>{workshop.description}</Text>
                        </View>
                    ))}

                    <TouchableOpacity style={styles.button} onPress={ () => navigation.goBack() }>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#757D84'
    },
    scrollView: {
        padding: 16
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#704346"
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#E9C99C'
    },
    workshopTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    workshopHost: {
        fontStyle: 'italic'
    },
    workshopDescription: {
        marginBottom: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3AEA8',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#704346'
    },
});