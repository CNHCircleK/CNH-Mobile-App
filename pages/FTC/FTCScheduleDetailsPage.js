import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Platform, StatusBar, SafeAreaView } from 'react-native';
import Res from '@resources';

const workshopData = [
    {
        title: 'Workshop Session I [Friday]',
        workshops: [
            {
                name: 'Circle K in the International Level',
                host: 'Steve Lopez',
                desc: 'Circle K International. That\'s the club we\'re in! But what exactly is "international" here? From service and fundraising projects and partners to the governing board and even an International Convention, this workshop will teach you all the wonderful International Level!'
            },
            {
                name: 'Adjusting Your Mindset; Getting That Job',
                host: 'Chris Tung',
                desc: 'Entering the job market and pursuing new endeavors can often be discouraging at times. Learn about how to modify your frame of mind to put yourself in the best state to tackle the challenges ahead.'
            },
            {
                name: 'DSI: Serving the Environment',
                host: 'Karishma Sira & Kristin Nguyen',
                desc: 'Come join your fellow CNH Circle K members in Learning about this year\'s District Service Initiative: Serving the Environment! The District Service Committee will be providing you all the info you need to learn about the DSI and how you can partake in it this year.'
            },
            {
                name: 'Bullet Journaling 101',
                host: 'Shirley Wong',
                desc: 'Interested in bullet journaling, but don’t know where to start? Bullet Journaling 101 will teach you the basics from supplies you’ll need, how to set up your journal, and more! Let’s get planning together!'
            }
        ]
    },
    {
        title: 'Workshop Session II [Friday]',
        workshops: [
            {
                name: 'Learn About C.H.A.D (Club Hosted Administrative Decisions)',
                host: 'Nora Lovell & Ryan Tan',
                desc: 'What\'sss Up BroooOo?! Do you wanna join Chi Ka ppa Iota?? DuUUude it\'s a super DOPE club with DOPE people. Anywayyysss, come Learn about C.H.A.D, aka Club Hosted Administrative Decisions, aka Club Elections! Whether you\'re a new member or a returning member come learn how to host effective and DOPE elections while having a breakdown of some SWAGGY leadership opportunities. Come out and RUSH to our DOPE SWAG webinar! :-)'
            },
            {
                name: 'Chemistry Outside the Classroom',
                host: 'Garrett Moore & Sandra Vang',
                desc: 'Having trouble with your STEM courses? Too bad! Let\'s dive into the chemistry we don\'t hear about in class! Feeling "chemistry" will explore the connections you make on an everyday basis and what makes some relationships worth fighting for and others not so much. Do you feel the chemistry??'
            },
            {
                name: 'Planning your Financial Future',
                host: 'Andrea Lee',
                desc: 'Step right up, step right up!!! You\'re the next contestant on the Price is Right!! On today\'s episode, our theme is *drumroll please* . . . YOUR future!! Together, let\'s plan just how you can save up for a shiny new Lamborghini or put aside some extra money to make some more MEMORIES!!!'
            },
            {
                name: 'Possible Future Life and Work in Times of Pandemic',
                host: 'Peter Yu',
                desc: 'With the ever-changing times of this pandemic, people in industry have started to discuss and forecast how various industries will change in the future and how work and life will change. The purpose of this workshop is to get attendees to think about how their potential industry will change over the next 3-5 years due to the pandemic, how work types and roles will be blended, and how work from home will affect society.'
            }
        ]
    },
    {
        title: 'Workshop Session III [Friday]',
        workshops: [
            {
                name: 'DFI Education',
                host: 'Derek Baylis and Joyce Wu',
                desc: 'Ever feel like you could do more for charities? Make some memories while planning and participating in fundraising projects. Oftentimes we fundraise for many charitable organizations. Learn about the District Fundraising Initiatives Project and why we raise funds for these charitable causes!'
            },
            {
                name: 'Real Talks',
                host: 'Alicia Sieu & Caden Tran',
                desc: 'Do you ever feel simpy or just want to talk? In addition to Service, Leadership and Fellowship, Real Talks provides a safe environment for everyone to share their life experiences. This open forum allows you to reflect on your past and embrace the diversity that is Circle K.'
            },
            {
                name: 'Overcoming Imposter Syndrome',
                host: 'Chio Saeyang',
                desc: 'Emergency Meeting!! You\'re the imposter! Head to the Cafeteria where the details of "Imposter Syndrome" are revealed and how everyone in this lobby is secretly The Imposter! There will be personal assessments on the type of imposter you are and simulations and advice on how to overcome imposter syndrome.'
            }
        ]
    },
    {
        title: 'Workshop Session I [Saturday]',
        workshops: [
            {
                name: 'Recruitment and Outreach Strategies',
                host: 'Amy Bryant & Xavier De Anda',
                desc: 'Now more than ever we need a strong and effective force behind member recruitment. It\'s likely that potential and even current members will lose interest in the club. Our workshop is aimed to provide innovative and proactive ways to keep clubs alive during the pandemic. We\'ll do this by encouraging members and officers to not only take advantage of the plethora of online resources but also to be proactive in keeping recruitment consistent throughout the year and not confined to traditional recruitment time periods.'
            },
            {
                name: 'What\'s your Myers Briggs Type?',
                host: 'Jackie Vallo & Jimmy Tang',
                desc: 'You may know yourself, but do you REALLY know yourself? Your Myers Briggs Type is indicated by your psychological preferences in how you perceive the world and make decisions. Are you more extroverted or introverted? Do you rely more on your intuition or senses? Do you think more with your head or heart? Come to our workshop to take an assessment, see what types you\'re compatible with, and find out a little more about yourself and how YOU perceive the world!'
            },
            {
                name: 'Hawaii 101',
                host: 'Alana Kahawai',
                desc: 'Ever wonder what it\'s like living in the middle of the ocean? Well this is just the place to learn about it. Aloha and welcome to everything you should know about Hawaii, from history to food to the cultures found here. As much as we are "paradise", we are so much more than that.'
            }
        ]
    },
    {
        title: 'Workshop Session II [Saturday]',
        workshops: [
            {
                name: 'Kiwanis Family During Quarantine',
                host: 'Miyu Nakajima',
                desc: 'Time to get on this K-Fam Train and learn more about how the Kiwanis Family is reacting to the current Quarantine. Learn about the different Kiwanis Family groups and how you can get more involved with K-Kids, Builders Club, Aktion Club, Key CLub, KIWIN\'S, and Kiwanis. Learn why these relationships are important.'
            },
            {
                name: 'Self-Care and Feeling Good',
                host: 'Audrey Abbott & Alfred Aung',
                desc: 'Have you been taking care of yourself? Reflect on your recent self-care strategies, learn some new tips, talk about online fatigue, and engage in some heartfelt activities!'
            },
            {
                name: 'Executive Board 101',
                host: 'Katherine Hoang',
                desc: 'You\'ve got mail, Executive Board Officers! 💌\n\nJoin us for a chance to meet your fellow counterparts from all across the CNH District. Together, we will simp on the highs, lows, and everything in between. Catch you there!\n\nXOXO, District Board 💋'
            } 
        ]
    }
];

export default class FTCScheduleDetailsPage extends Component {
    state = {
        data: workshopData[this.props.route.params.session]
    };

    renderItem = ({item}) => {
        return(
            <View style={styles.workshopContainer}>
                <Text style={styles.workshopName}>{item.name}</Text>
                <Text style={styles.workshopHost}>{item.host}</Text>
                <Text style={styles.workshopDesc}>{item.desc}</Text>
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{this.state.data.title}</Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.scrollView}
                    data={this.state.data.workshops}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={ (item, index) => index.toString() }
                />
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
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 100,
        textAlign: 'center',
        color: Res.FTCColors.MellowApricot
    },
    scrollView: {
        paddingBottom: 10
    },
    workshopContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    workshopName: {
        fontFamily: 'French-Press',
        fontSize: 30,
        color: 'white'
    },
    workshopHost: {
        fontFamily: 'Arbutus-Slab',
        fontSize: 12,
        opacity: 0.6,
        marginBottom: 6
    },
    workshopDesc: {
        fontFamily: 'Arbutus-Slab',
        fontSize: 14,
        color: Res.FTCColors.TeaGreen
    }
});