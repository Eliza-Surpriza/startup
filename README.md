# focus timer

## specifications

### elevator pitch

My project is a timer you can use to keep track of how long you spend on homework, piano practice, or anything you want.

### design

![drawing of what the webpage will look like](https://github.com/Eliza-Surpriza/startup/assets/144268636/79b1f58f-661b-40d7-b795-5f39a665efd1)

### key features

- login
- timer
- data storage

### technologies

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for voting. Hyperlinks to choice artifact.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, timer, displaying users' hours.
- **Service** - Backend service with endpoints for:
  - login
  - saving time to weekly hours
- **DB** - Store users and hours in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't store hours unless authenticated.
- **WebSocket** - Users' weekly hours are displayed to other users
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML pages: home (login), focus (select project and run timer), hours (view project hours and others hours), and about.
- **Links** - The login page automatically links to the focus page.
- **Text** - Text labels of each project and a description of the website on the about page
- **Images** - I didn't see the need for images so I didn't include any
- **Login** - Input boxes and submit button for login.
- **Input** - input buttons to add a project, a drop down menu to select a project, and buttons to control the timer.
- **Database** - The user's projects and hours represent data pulled from the database.
- **WebSocket** - The recent community hours represent websocket data

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body** - I added background colors that fit my color scheme
- **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
- **Responsive to window resizing** - My website resizes effectively to fit different devices
- **Application elements** - Used good contrast and whitespace, buttons, forms, and tables properly styled
- **Application text content** - Consistent fonts

## Javascript deliverable

For this deliverable I implemented Javascript so the website works for a single user and time.

- **login** The login button automatically takes the user to the focus page
- **timer** The timer keeps track of time and presents it in an hours/minutes/seconds format
- **projects** The website keeps track of a list of projects the user inputs and their associated times and displays them in a table
- **websocket** user to user interaction will be supported on the hours page, where the most recent community hours and projects are displayed
