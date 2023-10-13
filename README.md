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
