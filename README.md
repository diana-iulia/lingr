# LINGR: a Language Learning Social Media
[OPEN APP](https://ling-r.herokuapp.com/)

## About:
Have you ever found yourself squandering your life on social media? Is your screen time slowly creeping up, almost mocking you? Lingr is here to help you and your friends can feel good about that number possibly being in the double digits because you’re all practicing your target language(s) ✨together✨!! 

Does duolingo not meet your sky high standards, especially for languages that are not latin-derived? Does that little twisted bird manipulating your feelings make you want to delete the whole app?? Lingr is the solution! Connect with folks from around the world with a peer commentable blog, and (post MVP) view and contribute to the vault of community resources, post voice clips and videos, learn handwriting and cursive, and even stroke order for the chinese, japanese, and korean languages. Perhaps we can also be used as a classroom resource?? idk but the point is that it’s free for everyone always. ad free, money free, uhhh gluten free… free!!! 

## Credits:
made with <3 by [Diana](https://github.com/dianaiuliacalin/lingr), [Erica](https://github.com/Ericabrown17), [Juanita](https://github.com/NKR-28), [Jose](https://github.com/Tero15), [Avalynn](https://github.com/avalynnw)



## DEVELOPER INFORMATION
[Coolors color scheme](https://coolors.co/ffb703-7209b7-3a0ca3-4361ee-4cc9f0)
<br>
[React Localization](https://www.npmjs.com/package/react-localization)
<br>
[Instructor react app boilerplate](https://github.com/ac524/work-timeline/tree/boilerplate)
<br>
[Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)


CURRENT APP LANGUAGES: de, en-us, es, fr, it, por, ro...
<br>
WE STILL NEED HELP WITH THESE LANGUAGES: af, sq, am, ar, hy, be, bg, my... lots... 
<br>

```js 
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({

    // TEMPLATE TO ADD ANOTHER LANGUAGE 👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽
        // just replace language code (here it's US english "en-us")
         en-us:{
          docs: "",
          contact: "",
          donations: "",

          profile: "",
          aboutMe: "",
          journal: "",

          username: "",
          password: "",
          language: "",
          languages: "",
          login: "",
          signup: "",
          submit: "",
          forgotPassword: "",

          title: "",
          comment: "",
          comments: "",
         }
    // TEMPLATE TO ADD ANOTHER LANGUAGE 👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽

);
```

---
### notes:
USER'S FIRST TIME ON PAGE:
* read about lingr
* sign up:
    * provide name, email, password, and target languages

AFTER LOGIN/SIGNUP:
* user is directed to profile w/journal and prompted to make first post

IN PROFILE: 
* default- journal tab
* can also navigate to buddies tab (POST MVP)
* EDIT PROFILE/SETTINGS (languages)
* 

IN JOURNAL TAB, USERS CAN: 
* create new post
* view all posts 
* delete post(s)

IN BUDDIES TAB, USERS CAN:
* view list of users they follow
* remove buddy/unfollow 

IN POSTS, USERS:
* Create:
    1. Choose language (click on flag?) 
    2. Fill out post's title and content
    3. Repeat steps 1-2 as desired for any (supported) language
    4. Prompt to allow comments y/n
    5. Submit post (date automatic) 

* Comment:
    * if other's comments are not allowed, only OP can comment 
    * delete content

how can people add/search for other users? by username, email? 
* MVP: follow other users (buddies)
    * navigate to friends list from profile
    * follow button on profile of every user (except your own profile)

#### MUI
[Install MUI](https://mui.com/material-ui/getting-started/installation/) 
* **DEVS ARE RESPONSIBLE FOR LOADING ANY FONTS USED IN APP - NO FONT IS AUTOMATICALLY LOADED BY MUI**
* Install roboto font with npm:
    1. `npm install @fontsource/roboto`
    2. import it in your entry-point
        ```js
        import '@fontsource/roboto/300.css';
        import '@fontsource/roboto/400.css';
        import '@fontsource/roboto/500.css';
        import '@fontsource/roboto/700.css';
        ```
* [Fontsource](https://github.com/fontsource/fontsource) can be used to load sp. subsets, weights, and styles. Note: MUI default typography configuration only relies on 300, 400, 500, and 700 font weights.

* possible components 
    1. [snackbar](https://mui.com/material-ui/react-snackbar/)
    2. [skeleton](https://mui.com/material-ui/react-skeleton/)
    3. [dialog](https://mui.com/material-ui/react-dialog/)
    4. [backdrop](https://mui.com/material-ui/react-backdrop/)
    5. [textarea autosize](https://mui.com/material-ui/react-textarea-autosize/)
    6. [tabs](https://mui.com/material-ui/react-tabs/)
    7. [bottom navigation](https://mui.com/material-ui/react-bottom-navigation/)
* how to [customize them:](https://mui.com/material-ui/customization/how-to-customize/)

#### Emotion 
[Emotion docs](https://emotion.sh/docs/introduction)


---
## DREAMS (POST MVP): 
* follow vs friend requests (buddies vs best buddies)
* edit post and comment contents

