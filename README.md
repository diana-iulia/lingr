# lingr
Do you find yourself squandering precious time on social media? Lingr is here to help you connect with your friends while also learning your target language(s)!



## DEVELOPER INFORMATION
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
   }
   profile: {
       aboutMe: "About Me:",
       journal: "Journal"
   }
   credentials: {
       username: "Username",
       password: "Password",
       languages: "Languages",
       login: "Log In",
       signup: "Sign Up",
       submit: "Submit",
       forgotPassword: "Forgot Password?"
   }
   posts: {
       title: 
   }
   
 },
 it: {
   how:"Come vuoi il tuo uovo oggi?",
   boiledEgg:"Uovo sodo",
   softBoiledEgg:"Uovo alla coque",
   choice:"Come scegliere l'uovo"
 }
});
```

## Pseudocode: 
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


DREAMS: 
* friend requests (best buddies)
* edit post and comment contents