
export const projects = [
    {
        id: '1',
        name: 'Instant Messaging App',
        demo: 'https://react-fire-chat.surge.sh/',
        repo: 'https://github.com/GarrettArhSmith/react-fire-chat',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'Firebase'],
        thumbnail: '/reactfirechat-thumbnail.jpg',
        content: [
            {
                tag: 'p',
                text: `This is an app I made to get an introduction to Firebase. I was working on an experience project after completing the V School curriculum, and we had decided to go with Firebase for the backend. As part of the V School curriculum we learned MongoDB and Express so I wasn't familiar with Firebase. I decided I needed some practice, and voilà! React-Fire-Chat was born.`
            },
            {
                tag: 'p',
                text: `The front-end of this app was (rather quickly) put together in React, and the back-end using Firebase, hence the url. While I love MongoDB and Express and all the freedoms you get with writing your own back-end, I thoroughly enjoyed using Firebase on this project. Everything was just so darn easy to set up, and Google authentication is a delight. I will definitely be revisiting Firebase in my future projects.`
            },
        ],
    },
    {
        id: '2',
        name: 'Student Progress Visualizations',
        demo: 'https://vquad-demo.surge.sh/',
        repo: 'https://github.com/VSchool-Team/vquad/tree/dashboard',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'Airtable API'],
        thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        content: [
            {
                tag: 'h5',
                text: `Some Backstory...`
            },
            {
                tag: 'p',
                text: `The Student Progress Visualizations project is an unfinished and evolving project. It started as an internal tool at V School, the bootcamp I graduated from and worked as a TA for. The project evolved so much, at least as far as planning, it took a while for it to get anywhere. There's still not much to it, but I have plans to build out a full-fledged dashboard. I started the project myself with Material UI and designed it for TAs to better track students' progress through the course and keep standup attendance. Later, I joined with some fellow TAs and students to restart and make a bigger tool to be used for many positions behind the scenes at V School. So I built out the dashboard in Material UI again, and later decided to scratch MUI and design it from scratch. Eventually, it was decided to cut the V School project short to allow TAs to focus more attention on student interactions.`
            },
            {
                tag: 'p',
                text: `The dashboard in it's current state has an app bar, a collapsible side drawer, and the main content area featuring some cards that will likely showcase some data/charts. Some basic JWT authentication is in place, with a separate auth page for sign in and sign up. When the user is logged in, the app bar features the user's initials in a clean little bubble that will open an options dropdown when clicked. It's unclear to me what, if anything, this project will become, but I enjoy working on it.`
            },
        ],
    },
    {
        id: '3',
        name: 'Weather App',
        demo: 'https://gsmithweather.surge.sh/',
        repo: 'https://github.com/GarrettArhSmith/assignments/tree/master/mod4/react/weather',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'Weather API'],
        thumbnail: 'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: '4',
        name: 'Anonymous Forum',
        repo: 'https://github.com/tlovell5/forum_group_project',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'MongoDB', 'Express'],
        thumbnail: '/anonymousforum-thumbnail.jpeg',
    },
    {
        id: '5',
        name: 'Food Ordering App',
        repo: 'https://github.com/GarrettArhSmith/assignments/tree/master/mod6/food-ordering',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'MongoDB', 'Express', "Token Authentication"],
        thumbnail: 'https://images.pexels.com/photos/5920631/pexels-photo-5920631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: '6',
        name: 'Rock the Vote',
        demo: 'https://r-t-v.herokuapp.com/',
        repo: 'https://github.com/GarrettArhSmith/rock-the-vote',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'MongoDB', 'Express', "Token Authentication"],
        thumbnail: 'https://images.pexels.com/photos/6257070/pexels-photo-6257070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }
]