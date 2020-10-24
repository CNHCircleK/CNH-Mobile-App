import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Linking } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Collapsible from 'react-native-collapsible';

const resourcesData = [
    {
        title: 'District Files',
        links: [
            {
                name: 'District Bylaws',
                url: 'http://resources.cnhcirclek.org/Documents/District/CNH%20Circle%20K%20District%20Bylaws%20Updated%2005.02.2019.pdf'
            },
            {
                name: 'District Operating Procedures',
                url: 'http://resources.cnhcirclek.org/Documents/District/CNH%20Circle%20K%20District%20Operating%20Procedures%20Updated-05.02.19.pdf'
            },
            {
                name: 'Club Bylaws Amendment Guide',
                url: 'http://www.cnhcirclek.org/download/club-bylaws-amendment-guide/'
            },
            {
                name: 'Event Request From (ERF)',
                url: 'http://www.cnhcirclek.org/download/event-request-form-erf/'
            },
            {
                name: 'ERF Manuel',
                url: 'http://www.cnhcirclek.org/download/erf-manual'
            },
            {
                name: 'District Board Meeting Packets',
                links: [
                    {
                        name: 'March 2020 District Board Meeting Packet',
                        url: 'https://resources.cnhcirclek.org/Documents/District/Packets/March-2020-District-Board-Meeting-Packet.pdf'
                    },
                    {
                        name: 'January 2020 District Board Meeting Packet',
                        url: 'https://resources.cnhcirclek.org/Documents/District/Packets/January-2020-District-Board-Meeting-Packet.pdf'
                    },
                    {
                        name: 'December 2019 Special District Board Meeting Packet',
                        url: 'https://resources.cnhcirclek.org/Documents/District/Packets/December-2019-Special-District-Board-Meeting-Packet.pdf'
                    },
                    {
                        name: 'November 2019 District Board Meeting Packet',
                        url: 'https://resources.cnhcirclek.org/Documents/District/Packets/November-2019-District-Board-Meeting-Packet.pdf'
                    },
                    {
                        name: 'July 2019 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/july-2019-district-board-meeting-packet/'
                    },
                    {
                        name: 'April 2019 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/april-2019-district-board-meeting-packet/'
                    },
                    {
                        name: 'January 2019 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/january-2019-district-board-packet/'
                    },
                    {
                        name: 'November 2018 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/november-2018-district-board-packet/'
                    },
                    {
                        name: 'July 2018 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/july-2018-district-board-meeting-packet/'
                    },
                    {
                        name: 'April 2018 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/april-2018-district-board-meeting-packet/'
                    },
                    {
                        name: 'March 2018 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/march-2018-district-board-meeting-packet-2/'
                    },
                    {
                        name: 'January 2018 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/january-2018-district-board-meeting-packet-2/'
                    },
                    {
                        name: 'December 2017 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/december-2017-district-board-meeting-packet/'
                    },
                    {
                        name: 'November 2017 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/november-2017-district-board-meeting-packet/'
                    },
                    {
                        name: 'July 2017 District Board Meeting Packet',
                        url: 'http://www.cnhcirclek.org/download/july-2017-district-board-meeting-packet/'
                    }
                ]
            },
            {
                name: 'District Board Meeting Minutes',
                links: [
                    {
                        name: 'December 2019 Special District Board Meeting Minutes',
                        url: 'https://www.cnhcirclek.org/download/december-2019-special-district-board-meeting-minutes.pdf'
                    },
                    {
                        name: 'November 2019 District Board Meeting Minutes',
                        url: 'https://www.cnhcirclek.org/download/november-2019-district-board-meeting-minutes.pdf'
                    },
                    {
                        name: 'July 2019 District Board Meeting Minutes',
                        url: 'https://www.cnhcirclek.org/download/july-2019-district-board-meeting-minutes.pdf'
                    },
                    {
                        name: 'April 2019 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/april-2019-district-board-meeting-minutes/'
                    },
                    {
                        name: 'January 2019 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/january-2019-district-board-meeting-minutes/'
                    },
                    {
                        name: 'July 2018 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/july-2018-district-board-meeting-minutes/'
                    },
                    {
                        name: 'April 2018 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/april-2018-district-board-meeting-minutes/'
                    },
                    {
                        name: 'March 2018 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/march-2018-district-board-meeting-minutes/'
                    },
                    {
                        name: 'January 2018 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/march-2018-special-meeting-minutes//'
                    },
                    {
                        name: 'December 2017 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/december-2017-special-meeting-minutes/'
                    },
                    {
                        name: 'November 2017 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/november-2017-district-board-meeting-minutes-2/'
                    },
                    {
                        name: 'July 2017 District Board Meeting Minutes',
                        url: 'http://www.cnhcirclek.org/download/july-2017-district-board-meeting-minutes-2/'
                    }
                ]
            },
            {
                name: 'Candidacy Forms',
                links: [
                    {
                        name: 'Candidacy Application Form',
                        url: 'http://www.cnhcirclek.org/download/candidacy-application-form'
                    },
                    {
                        name: 'Caucasing Rules',
                        url: 'http://www.cnhcirclek.org/download/caucasing-rules'
                    },
                    {
                        name: 'Code of Ethics',
                        url: 'http://www.cnhcirclek.org/download/code-of-ethics-2/'
                    },
                    {
                        name: 'Instructions for Candidates',
                        url: 'http://www.cnhcirclek.org/download/instructions-for-candidates'
                    },
                    {
                        name: 'Governor Service Agreement',
                        url: 'http://www.cnhcirclek.org/download/governor-service-agreement'
                    },
                    {
                        name: 'Lieutenant Governor Service Agreement',
                        url: 'http://www.cnhcirclek.org/download/lieutenant-governor-service-agreement'
                    },
                    {
                        name: 'Secretary Service Agreement',
                        url: 'http://www.cnhcirclek.org/download/secretary-service-agreement'
                    },
                    {
                        name: 'Treasurer Service Agreement',
                        url: 'http://www.cnhcirclek.org/download/treasurer-service-agreement'
                    }
                ]
            },
            {
                name: 'Delegate Certification 2020',
                url: 'http://www.cnhcirclek.org/download/delegate-certification-2020'
            }
        ]
    }
];

function filterCollapsibles() {
    let collapsibles = {};

    for(let i = 0; i < resourcesData.length; i++) {
        let collapsibleNames = resourcesData[i].links.filter(link => link.links).map(collapsible => collapsible.name);
        Object.assign(collapsibles, collapsibleNames.reduce((acc, cur) => ({ ...acc, [cur]: true }), {}));
    }

    return collapsibles;
}

export default class ResourcesPage extends Component {
    state = {
        activeSections: [],
        collapsed: filterCollapsibles()
    };

    setSections = (sections) => {
        for(const name in this.state.collapsed) {
            this.state.collapsed[name] = true;
        }
        this.setState({ activeSections: sections });
    };

    renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    renderContent(section, index) {
        return (
            <View>
                {section.links.map(function(link) { 
                    return (link.links ? 
                        <View key={link.name}>
                            <TouchableOpacity 
                                style={styles.headerLink} 
                                onPress={ () => this.setState(prevState => {
                                    return { collapsed: { ...prevState.collapsed, [link.name]: !prevState.collapsed[link.name] } }
                                }) }
                            >
                                <Text style={styles.linksText}>{link.name}</Text>
                            </TouchableOpacity>
                            <Collapsible collapsed={this.state.collapsed[link.name]} align="bottom">
                                <View>
                                    {link.links.map(link => (
                                        <TouchableOpacity 
                                            style={styles.smallLinks} 
                                            key={link.name}
                                            onPress={ () => Linking.openURL(link.url) }
                                        >
                                            <Text style={styles.linksText}>{link.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </Collapsible>
                        </View>
                        :
                        <TouchableOpacity 
                            style={styles.links} 
                            key={link.name}
                            onPress={ () => Linking.openURL(link.url) }
                        >
                            <Text style={styles.linksText}>{link.name}</Text>
                        </TouchableOpacity>
                    );
                }, this)}              
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollView}
                >
                    <Accordion
                        activeSections={this.state.activeSections}
                        sections={resourcesData}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={false}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent.bind(this)}
                        duration={600}
                        easing='easeInOutCubic'
                        onChange={this.setSections}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#aab3b5',
        paddingVertical: 30,
        marginBottom: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold'
    },
    links: {
        backgroundColor: '#d3dadb',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 30,
        marginVertical: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linksText: {
        textAlign: 'center'
    },
    headerLink: {
        backgroundColor: '#aab3b5',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 30,
        marginVertical: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallLinks: {
        backgroundColor: '#d3dadb',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 60,
        marginVertical: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});