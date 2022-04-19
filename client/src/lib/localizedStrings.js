// This file is what makes switching between languages possible
// 
import LocalizedStrings from 'react-localization';

export const translations = new LocalizedStrings({
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
            title: 'title'
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
            title: "Titulo",
        }
    }
});
