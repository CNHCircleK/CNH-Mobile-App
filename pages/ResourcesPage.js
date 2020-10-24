import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Linking, TouchableWithoutFeedback } from 'react-native';
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
                name: 'ERF Manual',
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
    }, 
    {
        title: 'Divisional Resources',
        links: [
            {
                name: 'Capital',
                links: [
                    {
                        name: 'Calendar of Events',
                        url: 'http://www.cnhcirclek.org/download/calendar-of-events/'
                    },
                    {
                        name: 'General Meeting & Parking Information',
                        url: 'http://www.cnhcirclek.org/download/general-meeting-parking-information/'
                    },
                    {
                        name: 'Weekly Subscription Emails',
                        url: 'http://www.cnhcirclek.org/download/weekly-subscription-emails/'
                    },
                    {
                        name: 'Interclub Buddy Challenges',
                        url: 'http://www.cnhcirclek.org/download/interclub-buddy-challenges/'
                    },
                    {
                        name: 'Icebreakers Master List',
                        url: 'http://www.cnhcirclek.org/download/icebreakers-master-list/'
                    },
                    {
                        name: 'Youtube Channel',
                        url: 'http://www.cnhcirclek.org/download/youtube-channel/'
                    },
                    {
                        name: 'Cheers Masterlist',
                        url: 'http://www.cnhcirclek.org/download/cheers-master-list/'
                    },
                    {
                        name: 'Leadership Team Contact List',
                        url: 'http://www.cnhcirclek.org/download/leadership-team-contact-list/'
                    }
                ]
            },
            {
                name: 'Central Coast',
                links: [
                    {
                        name: 'Website',
                        url: 'http://www.cnhcirclek.org/download/website/'
                    },
                    {
                        name: 'Key to Presidency',
                        url: 'http://www.cnhcirclek.org/download/key-to-presidency/'
                    },
                    {
                        name: 'Elections Manual',
                        url: 'http://www.cnhcirclek.org/download/elections-manual/'
                    }
                ]
            },
            {
                name: 'Citrus',
                links: [
                    {
                        name: 'Calendar of Events',
                        url: 'http://www.cnhcirclek.org/download/calendar-of-events-2/'
                    },
                    {
                        name: 'Club General Meeting Times, Locations & Parking Info',
                        url: 'http://www.cnhcirclek.org/download/club-general-meeting-time-locations-parking-information/'
                    },
                    {
                        name: 'Wakanda Webinars: Divisional Webinar Interest Form',
                        url: 'http://www.cnhcirclek.org/download/wakanda-webinars-divisional-webinar-interest-form/'
                    },
                    {
                        name: 'March DCM Signup',
                        url: 'http://www.cnhcirclek.org/download/march-dcm-sign-up/'
                    },
                    {
                        name: 'Magic Kingdom Merch Order Form',
                        url: 'http://www.cnhcirclek.org/download/magic-kingdom-merch-order-form/'
                    },
                    {
                        name: 'Magic Kingdom Kiwanis Family Unity Day',
                        url: 'http://www.cnhcirclek.org/download/magic-kingdom-kiwanis-family-unity-day/'
                    }
                ]
            },
            {
                name: 'Foothill',
                links: [
                    {
                        name: 'Foothill Cheers',
                        url: 'http://www.cnhcirclek.org/download/foothill-cheers/'
                    },
                    {
                        name: 'Foothill Cheer Tutorial',
                        url: 'http://www.cnhcirclek.org/download/foothill-cheer-tutorial/'
                    }
                ]
            },
            {
                name: 'Golden Gate',
                links: [
                    {
                        name: 'Officer Handbook',
                        url: 'http://www.cnhcirclek.org/download/officer-handbook/'
                    }
                ]
            },
            {
                name: 'Sunset',
                links: [
                    {
                        name: 'Sunset Cheers',
                        url: 'http://www.cnhcirclek.org/download/sunset-cheers/'
                    },
                    {
                        name: 'Sunset Cheers Videos',
                        url: 'http://www.cnhcirclek.org/download/sunset-division-cheers-videos/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Workshops',
        links: [
            {
                name: 'Fall Training Conference 2019',
                url: 'http://www.cnhcirclek.org/download/fall-training-conference-2019/'
            },
            {
                name: 'Spring Training Conference 2019',
                url: 'http://www.cnhcirclek.org/download/spring-training-conference-2019/'
            },
            {
                name: 'District Convention 2019',
                url: 'http://www.cnhcirclek.org/download/district-convention-2019/'
            },
            {
                name: 'Fall Training Conference 2018',
                url: 'http://www.cnhcirclek.org/download/fall-training-conference-2018/'
            },
            {
                name: 'Spring Training Conference 2018',
                url: 'http://www.cnhcirclek.org/download/spring-training-conference-2018/'
            },
            {
                name: 'District Convention 2018',
                url: 'http://www.cnhcirclek.org/download/district-convention-2018/'
            }
        ]
    },
    {
        title: 'Communications & Marketing',
        links: [
            {
                name: 'CNH District Style Guide',
                url: 'http://www.cnhcirclek.org/download/style-guide/'
            },
            {
                name: 'Graphic Standard Assets',
                url: 'http://www.cnhcirclek.org/download/graphic-standard-assets/'
            },
            {
                name: 'Graphic Request Form',
                url: 'http://www.cnhcirclek.org/download/grphic-request-form/'
            },
            {
                name: 'Public Relations',
                links: [
                    {
                        name: 'External Media Database',
                        url: 'http://www.cnhcirclek.org/download/external-media-database/'
                    },
                    {
                        name: 'Press Release Manual',
                        url: 'http://www.cnhcirclek.org/download/press-release-manual/'
                    },
                    {
                        name: 'Finding Media Outlets',
                        url: 'http://www.cnhcirclek.org/download/finding-media-outlets/'
                    }
                ]
            },
            {
                name: 'Social Media',
                links: [
                    {
                        name: 'Social Media References',
                        url: 'http://www.cnhcirclek.org/download/social-media-references/'
                    },
                    {
                        name: 'Twitter Confessions',
                        url: 'http://www.cnhcirclek.org/download/twitter-confessions/'
                    }
                ]
            },
            {
                name: 'Tabling Manual',
                url: 'http://www.cnhcirclek.org/download/tabling-manual'
            }
        ]
    },
    {
        title: 'Treasurers & Fundraising',
        links: [
            {
                name: 'Treasurer/Fundraising Manual',
                url: 'http://www.cnhcirclek.org/download/treasurer-fundraising-manual/'
            },
            {
                name: 'Fundraising Master Sheet',
                url: 'http://www.cnhcirclek.org/download/fundraising-master-sheet/'
            },
            {
                name: 'Fundraising Database',
                url: 'http://www.cnhcirclek.org/download/fundraising-database/'
            },
            {
                name: 'Master Budget Sheet',
                links: [
                    {
                        name: '(Google Sheets)',
                        url: 'http://www.cnhcirclek.org/download/master-budget-sheets-google-sheets/'
                    },
                    {
                        name: '(Excel)',
                        url: 'http://www.cnhcirclek.org/download/master-budget-sheets-excel/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Kiwanis Family',
        links: [
            {
                name: 'Kiwanis Family Starter Kit',
                url: 'http://www.cnhcirclek.org/download/kiwanis-family-starter-kit/'
            },
            {
                name: 'ERF Supplemental Documents',
                links: [
                    {
                        name: 'Event Proposal Document',
                        url: 'http://www.cnhcirclek.org/download/event-proposal-document/'
                    },
                    {
                        name: 'Waiver and Medical Consent Treatment',
                        url: 'http://www.cnhcirclek.org/download/waiver-and-medical-consent-treatment/'
                    }
                ]
            },
            {
                name: 'Growing the Kiwanis Family Branches',
                links: [
                    {
                        name: 'Co-Sponsoring a K-Kids or Builders Club Manual',
                        url: 'http://www.cnhcirclek.org/download/co-sponsoring-a-k-kids-or-builders-club-manual/'
                    },
                    {
                        name: 'Building Kiwanis Family Relations Manual',
                        url: 'http://www.cnhcirclek.org/download/building-kiwanis-family-relations-manual/'
                    },
                    {
                        name: 'Connecting the K\'s Manual',
                        url: 'http://www.cnhcirclek.org/download/connecting-the-ks-manual/'
                    }
                ]
            },
            {
                name: 'Kiwanis Family Events',
                links: [
                    {
                        name: 'Key to College Manual',
                        url: 'http://www.cnhcirclek.org/download/key-to-college-manual-2/'
                    },
                    {
                        name: 'Key to Life Manual',
                        url: 'http://www.cnhcirclek.org/download/key-to-life-manual/'
                    },
                    {
                        name: 'Hosting a Kiwanis Takeover Manual',
                        url: 'http://www.cnhcirclek.org/download/hosting-a-kiwanis-takeover-manual/'
                    },
                    {
                        name: 'Kiwanis Family Events Manual',
                        url: 'http://www.cnhcirclek.org/download/kiwanis-family-events-manual/'
                    }
                ]
            },
            {
                name: 'Transitioning from Key Club and KIWIN\'S to Circle K Manual',
                url: 'http://www.cnhcirclek.org/download/transitioning-from-key-club-and-kiwins-to-circle-k-manual/'
            }
        ]
    },
    {
        title: 'Member Recognition',
        links: [
            {
                name: 'Master Record Sheet Files',
                links: [
                    {
                        name: '2020-2021 Master Records Sheet (MRS)',
                        url: 'http://resources.cnhcirclek.org/Documents/MR/MRS/2020-2021%20MRS_School%20Name.xlsm'
                    },
                    {
                        name: 'MRS Example',
                        url: 'http://resources.cnhcirclek.org/Documents/MR/MRS/2020-2021%20MRS_School%20Name_Example.xlsm'
                    },
                    {
                        name: 'MRS User Guide',
                        url: 'http://resources.cnhcirclek.org/Documents/MR/MRS/2020-2021%20MRS%20User%20Guide.pdf'
                    }
                ]
            },
            {
                name: 'District Convention 2021 Awards',
                links: []
            },
            {
                name: 'Fall Training Conference 2020 Awards',
                links: [
                    {
                        name: 'Outstanding Club T-Shirt Award',
                        url: 'https://kiwaniscnhfoundation.formstack.com/forms/20202021_outstanding_club_tshirt_award'
                    },
                    {
                        name: 'Outstanding Club Video Award',
                        url: 'https://kiwaniscnhfoundation.formstack.com/forms/20202021_outstanding_club_video_award'
                    },
                    {
                        name: 'Outstanding Club Website Award',
                        url: 'https://kiwaniscnhfoundation.formstack.com/forms/20202021_outstanding_club_website_award'
                    }
                ]
            },
            {
                name: '2019-2020 Awards',
                links: [
                    {
                        name: '(DCON) 2019-2020 Distinguished Appointed Board Officer Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-appointed-board-officer/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished Club Improvement Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-club-improvement-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished Divisional Excellence Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-divisional-excellence-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished Kiwanis Club Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-kiwanis-club-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished President Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-president-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished Vice President Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-vice-president-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished Secretary Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-secretary-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Distinguished Treasurer Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-distinguished-treasurer-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Don Hull Distinguished Kiwanis Family Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-don-hull-distinguished-kiwanis-family-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Endorsements Sheet',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-endorsements-sheet/'
                    },
                    {
                        name: '(DCON) 2019-2020 Faculty Advisor of the Year Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-faculty-advisor-of-the-year-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Hall of Fame Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-hall-of-fame-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 John Nichelson Kiwanian of the Year Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-john-nichelson-kiwanian-of-the-year-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 John Woodall Distinguished Membership Development and Education Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-john-woodall-distinguished-membership-development-and-education-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Mei Po Wong Overall Service Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-mei-po-wong-overall-service-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Returning General Member of the Year Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-returning-general-member-of-the-year-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 New Member of the Year Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-new-member-of-the-year-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding Interclubbing Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-interclubbing-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding Club Media Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-club-media-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding District Committee Member Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-district-committee-member-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding Non-Traditional Scrapbook Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-non-traditional-scrapbook-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding Single Service Project Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-single-service-project-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding Total Achievement Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-total-achievement-award/'
                    },
                    {
                        name: '(DCON) 2019-2020 Outstanding Traditional Scrapbook Award',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-outstanding-traditional-scrapbook-award/'
                    },
                    {
                        name: '(FTC) Outstanding Club T-Shirt Award',
                        url: 'http://www.cnhcirclek.org/download/outstanding-club-t-shirt-award/'
                    },
                    {
                        name: '(FTC) Outstanding Club Video Award',
                        url: 'http://www.cnhcirclek.org/download/outstanding-club-video-award/'
                    },
                    {
                        name: '(FTC) Outstanding Club Website Award',
                        url: 'http://www.cnhcirclek.org/download/outstanding-club-t-shirt-award/'
                    }
                ]
            },
            {
                name: '2018-2019 Awards',
                links: []
            },
            {
                name: 'General Recognition Manual',
                url: 'http://www.cnhcirclek.org/download/general-recognition-manual/'
            },
            {
                name: 'Membership Recognition Program',
                url: 'http://www.cnhcirclek.org/download/membership-recognition-program'
            }
        ]
    },
    {
        title: 'Membership Development & Education',
        links: [
            {
                name: 'Small and Large-Scale Event Planning',
                url: 'http://www.cnhcirclek.org/download/small-and-large-scale-event-planning/'
            },
            {
                name: 'Icebreaker Manual',
                url: 'http://www.cnhcirclek.org/download/icebreakers-manual/'
            },
            {
                name: 'Tabling Manual',
                url: 'http://www.cnhcirclek.org/download/tabling-manual/'
            },
            {
                name: 'Member Recruitment and Retentional Manual',
                url: 'http://www.cnhcirclek.org/download/member-retruitment-and-retention-manual/'
            },
            {
                name: 'General Member Handbook',
                url: 'http://www.cnhcirclek.org/download/general-member-handbook/'
            }
        ]
    },
    {
        title: 'Secretary',
        links: [
            {
                name: '2020-2021 Club Event Report Form (CERF)',
                links: [
                    {
                        name: 'Blank CERF 2020-2021',
                        url: 'http://www.cnhcirclek.org/download/blank-cerf-2020-2021/'
                    },
                    {
                        name: 'CERF Manual',
                        url: 'http://www.cnhcirclek.org/download/cerf-manual/'
                    }
                ]
            },
            {
                name: '2020-2021 Monthly Report Form (MRF)',
                links: [
                    {
                        name: 'Blank MRF 2020-2021',
                        url: 'http://www.cnhcirclek.org/download/blank-mrf-2020-2021/'
                    },
                    {
                        name: 'MRF Manual',
                        url: 'http://www.cnhcirclek.org/download/mrf-manual/'
                    }
                ]
            },
            {
                name: 'Master Record Sheet Files',
                links: [
                    {
                        name: '2019-2020 Master Record Sheet (MRS)',
                        url: 'http://www.cnhcirclek.org/download/2019-2020-master-records-sheet/'
                    },
                    {
                        name: 'MRS Example',
                        url: 'http://www.cnhcirclek.org/download/mrs-example-2/'
                    },
                    {
                        name: 'MRS User Guide',
                        url: 'http://www.cnhcirclek.org/download/mrs-user-guide-2/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Service',
        links: [
            {
                name: 'Service Resource Database',
                url: 'http://www.cnhcirclek.org/download/service-resource-database/'
            }
        ]
    },
    {
        title: 'Technology',
        links: [
            {
                name: 'Website Resources',
                links: [
                    {
                        name: 'Website Manual',
                        url: 'http://www.cnhcirclek.org/download/website-manual/'
                    },
                    {
                        name: 'CNH Style Guide (Websites)',
                        url: 'http://www.cnhcirclek.org/download/cnh-style-guide-websites/'
                    },
                    {
                        name: 'Club Website Screenshots',
                        url: 'http://www.cnhcirclek.org/download/club-website-screenshots/'
                    }
                ]
            },
            {
                name: 'How to Set Up a Livestream',
                url: 'http://www.cnhcirclek.org/download/how-to-set-up-a-livestream/'
            }
        ]
    },
    {
        title: 'International Resources',
        links: [
            {
                name: 'Circle K Resources',
                url: 'http://circlek.org/resources'
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

    renderContent(section) {
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
        marginVertical: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16
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