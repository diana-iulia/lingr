# LINGR: a Language Learning Social Media
[OPEN APP](!!)

## About:
Have you ever found yourself squandering hours or days or years away on social media? Is your social media screen time 8+ hours daily? Lingr is here to help you and your friends can feel good about that number possibly being in the double digits because you’re all practicing your target language(s) ✨together✨!! 

Does duolingo not meet your sky high standards, especially for languages that are not latin-derived? Does that little twisted bird manipulating your feelings make you want to delete the whole app?? Lingr is the solution! Connect with folks from around the world with a peer commentable blog, and (post MVP) view and contribute to the vault of community resources, post voice clips and videos, learn handwriting and cursive, and even stroke order for the chinese, japanese, and korean languages. Perhaps we can also be used as a classroom resource?? idk but the point is that it’s free for everyone always. ad free, money free, uhhh gluten free… free!!! 

## Credits:
made with <3 by [Diana](https://github.com/dianaiuliacalin/lingr), [Erica](https://github.com/Ericabrown17), [Juanita](https://github.com/NKR-28), [Jose](https://github.com/Tero15), [Avalynn](https://github.com/avalynnw)



## DEVELOPER INFORMATION
[React Localization](https://www.npmjs.com/package/react-localization)
INITIAL APP LANGUAGES: en, es, de, fr, it, ro, ru, cn-tn, cn-s, pt-br

ES6 module syntax:

```js 
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 en:{
   navbar: {
       docs: "Documentation",
       contact: "Contact",
       donations: "Donate",
       profile: "Profile"
   },
   profile: {
       aboutMe: "About me:",
       journal: "Journal"
   },
   credentials: {
       username: "Username",
       password: "Password",
       languages: "Languages",
       login: "Log In",
       signup: "Sign Up",
       submit: "Submit",
       forgotPassword: "Forgot Password?"
   },
   posts: {
       title: 
   }
   
 },
 it: {
  navbar: {
       docs: "Documentazione",
       contact: "Contattare",
       donations: "Donare",
       profile: "Profilo"
   },
   profile: {
       aboutMe: "Su di me:",
       journal: "Il Diario"
   },
   credentials: {
       username: "Nome utente",
       password: "Parola d'ordine",
       languages: "Lingue",
       login: "Accesso",
       signup: "Iscriversi",
       submit: "Inviare il modulo",
       forgotPassword: "Ha dimenticato la parola d'ordine?"
   },
   posts: {
       title: 
   }
 }
});
```

## Pseudocode: 
[x] Copy [boilerplate](https://github.com/ac524/work-timeline/tree/boilerplate)

[x] npm install MUI in directory (directions below)

[ ] add components to html
    1. navbar
    2. profile bar
    3. journal (container)
    4. journal (posts + comments)
    5. login
    6. sign up
    7. 
    
[ ] 

---
### notes:
#### features 
USER'S FIRST TIME ON PAGE:
* read about lingr
* sign up:
    * provide name, email, password, and target languages

AFTER LOGIN/SIGNUP:
* user is directed to profile w/journal and prompted to make first post

IN PROFILE: 
* default- journal tab
* can also navigate to "buddies tab
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

