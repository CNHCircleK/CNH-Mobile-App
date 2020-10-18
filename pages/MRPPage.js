import React, { Component } from 'react';
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Rows, Col, TableWrapper } from 'react-native-table-component';

export default class MRPPage extends Component {

    mrpTableTitle = [
        'MRP Level', 'Service Hours', 'Dues Paid', 'Additional Requirements',
        'Socials (SE)', 'MD&E Events (MD)', 'Fundraisers (FR)', 'Alumni (AL)',
        'Kiwanis Family (KF)', 'Interclub (IN)', 'Divisional Events (DV)', 'District Events',
        'International Events (INT)', 'Articles Submitted', 'Webinars Attended (WB)', 'Chaired Events', 
        'Host Workshop or Webinar', 'Committee Member'
    ];
    mrpTableData = [
        ['Bronze', 'Silver', 'Gold', 'Platinum'],
        ['50', '80', '130', '200'],
        ['Yes', 'Yes', 'Yes', 'Yes'],
        ['5', '6', '8', '11'],
        ['3', '4', '6', '9'],
        ['2', '3', '4', '5'],
        ['1', '2', '3', '4'],
        ['1', '1', '2', '2'],
        ['2', '3', '4', '5'],
        ['1', '2', '3', '4'],
        ['2', '3', '4', '5'],
        ['1', '2', '2', '3'],
        ['1', '1', '1', '1'],
        ['1', '2', '3', '4'],
        ['4', '5', '6', '7'],
        ['1', '2', '3', '4'],
        ['Yes', 'Yes', 'Yes', 'Yes'],
        ['Yes', 'Yes', 'Yes', 'Yes']
    ];

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollView}
                >
                    <Text>
                        The Membership Recognition Program (MRP) is the largest way we recognize members from all 
                        over the California-Nevada-Hawai’i district. It recognizes members who have shown dedication 
                        in our three tenets: service, leadership, and fellowship. Members are recognized at the 
                        district level during Fall Training Conference and District Convention. In order to achieve an 
                        MRP ranking, you need to be dues-paid, reach a specific number of service hours, and complete 
                        a specific number of tags.
                    </Text>
                    <Table style={{flexDirection: 'row'}}>
                        <Col data={this.mrpTableTitle} textBreakStrategy={'simple'} heightArr={[60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]} style={{flex: 1.7}} textStyle={{fontWeight: 'bold'}}/>
                        <Rows data={this.mrpTableData} flexArr={[1, 1, 1, 1]} style={{height: 60}}/>
                    </Table>
                    <Text style={styles.tagTitle}>Tag Definitions</Text>
                    <View>
                        <Text>1. Dues-Paid – Full dues paid to both the California-Nevada-Hawai’i District and International. See your club treasurer for more details.</Text>
                        <Text>2. Service Hours – All community service hours completed by dues-paid members between March 1, 2017, to February 28, 2018.</Text>
                        <Text>3. Socials (SE) – Any type of event that fosters fellowship within your club or with other members from the Kiwanis Family. Examples include club dinners, recreational activities, etc.</Text>
                        <Text>4. MD{"&"}E (MD) – Any event that help in the recruitment, retention, development, and education of new and old members. Examples include tabling, workshops, etc.</Text>
                        <Text>5. Fundraisers – An event that raises money for either your club or for a charitable organization. If 100% of the proceeds are being donated to a charitable entity, individuals that help plan the event may receive service hours for the planning done. Members may not receive service hours for simply attending a fundraiser for a charitable entity. If the proceeds go to the club’s administrative fund, planning done can only be considered as administrative hours.</Text>
                        <Text>6. Alumni (AL) – An event in which two members from a Circle K club and at least two alumni are present. An alumus/alumna is someone who was in Circle K and graduated from a college or university.</Text>
                        <Text>7. Kiwanis Family (KF) – A Kiwanis Family event with at least two members present from your Circle K club and at least two members present from another non-Circle K Kiwanis Family club (ex. Key Club, Kiwanis). Examples include Kiwanis meetings, Key to College.</Text>
                        <Text>8. Interclub (IN) – An interclub is any event hosted by another Kiwanis Family club, including Circle K. The following table will illustrate on how to achieve this tag:</Text>
                    </View>

                    <Text>
                        The host club may mark the interclub (IN) tag if the hosted event is a community service project. 
                        Interclub events cannot be Club Hosted (HE), with the exception of Service Events.
                    </Text>
                    <View>
                        <Text>1. Divisional Event (DV) – An in-person event hosted for your home Division, which is usually hosted by the respective Lieutenant Governor (and Divisional Board).</Text>
                        <Text>2. District Event (DE) – An event hosted by and for the District.</Text>
                        <Text>3. International Event (INT) – An event held throughout all of Circle K International. Events that can fulfill this tag are CKIx and Leadership Academy.</Text>
                        <Text>4. Article and Video Submissions – An article or video submitted at the club, divisional, district, or international level. Example include articles or videos submitted to the Communication and Marketing Committee for district publications (Sunny TV and the Sunburst), and club and divisional newsletters. Whether or not your submission is utilized, you will still receive credit.</Text>
                        <Text>5. Webinar – A workshop that is broadcasted online on the Club, Division, District, or International level.</Text>
                        <Text>6. Chair of An Event – The chair, or contact person, for a particular event. An event chair’s duties vary by club, but they are generally in charge of verifying the event is planned thoroughly and that everything is prepare. During the event, the chair acts as the contact person for the members and makes sure that the project runs smoothly.</Text>
                        <Text>7. Host A Workshop/Webinar – The host, or co-host, of a workshop or webinar at a district, divisional, or club-hosted workshop. District workshops include those that occur at Spring Training Conference North and South, President’s Retreat, Fall Training Conference, District Convention, or any other district event. Workshops on the divisional level can occur at Divisional Council Meetings. Club-hosted workshops include ones given at general meetings, Key to College, or CKI 101.</Text>
                        <Text>8. Committee Member – Involvement in any committee within the club, division, district, or international level. The chair of the committee is also considered a member of said committee. Subcommittees do qualify.</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    scrollView: {
        padding: 15
    },
    tagTitle: {
        textAlign: 'center'
    }
});