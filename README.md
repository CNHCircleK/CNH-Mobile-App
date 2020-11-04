# CNH-Mobile-App

## The official CNH Circle K Mobile App

### Code Structure
- App.js
  - Sets up the navigation bar and its pages (home page, schedule page, map page)
  - Maps out the app info pages and navigation order/layout
  - Sets up all resources used in the app
  - Contains function to cache image, video, font resources
  - First caches splash page image, then displays splash page once image is cached
  - When splash image is cached, the app checks if there is a newer update of the app in the background
    - If so, the app downloads and caches the update in the background
      -When the home page is displayed, a modal will appear and ask the user if they would like to reload the app to use the updated app. They can accept or deny this request
    - If not, nothing happens
  - While the splash page is displayed, the app will cache the necessary images, fonts, other resources in the background
  - Once the necessary resources are cached, the app will display the homepage and the update modal if a newer update is found

- components
  - InfoHeader.js
    - A styled header component for topics in a page
  - InfoParagraph.js
    - A styled text paragraph component
  - InfoTitle.js
    - A styled title component for pages
  - PlainButton.js
    - A styled button
  - PlainText.js
    - A styled text line
  - TemplateInfoPage.js
    - Template page for information pages

- pages
    - faq 
      - FAQActivitiesPage.js
        - Displays activities in the event
      - FAQFinancePage.js
        - Displays financial info for the event
      - FAQMiscPage.js
        - Displays miscellaneous info for the event
      - FAQNavigationPage.js
        - Displays navigation instructions for the event
      - FAQRegistrationPage.js
        - Displays registration info for the event
      - FAQSAAPage.js
        - Displays Sergeant at Arms info for the event 
      - FAQTimePage.js
        - Displays date and time info for the event
  - leadership
      - CampfireSkitsPage.js
        - Displays skit info for the event
      - DjPage.js
        - Displays DJ/music info for the event
      - MediaPage.js  
        - Displays media team info for the event
      - SAAPage.js
        - Displays more Sergeant at Arms info for the event
      - TeamCaptainPage.js
        - Displays team captain info for the event
      - TechPage.js
        - Displays a tech team easter egg
      - WorkshopsPage.js
        - Displays workshop info for the event
  - news
      - ContactsPage.js
        - Displays event team contact info
      - OfficeHoursPage.js
        - Displays office hour times
      - ComingSoonPage.js
        - A page that shows “coming soon”
      - HomePage.js
        - Main navigation page that shows pages for “FAQ”, “Leadership Opportunities”, and “Find out more”. Links to event website, shows preview video of event, and title/logo of event
      - InfoPage.js (NOT CURRENTLY IN USE)
        - Displays general need-to-know information on event
      - MapPage.js
          - Displays map of event venue
      - OnboardingPage.js (NOT CURRENTLY IN USE)
          - Asks what type of member user is. Homepage layout changes based on user type
      - ScheduleDetailPage.js
          - Displays detailed info of a particular event
      - SchedulePage.js
        - Displays schedule of events for each day of the event

- app.json
  - Contains name of app, expo version, expo app name, app version, iOS/Android versions, app description

- package.json
  - Contains expo scripts, code dependencies, and developer dependencies
