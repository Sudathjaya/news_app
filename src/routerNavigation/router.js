import HomeScreen from '../component/home/HomeScreen';
import LoginScreen from '../component/login/LoginScreen';
import SingleNewsScreen from '../component/newsProfile/news';
import RegistrationScreen from '../component/registration/RegistrationScreen';

export const homeScreen = 'homeScreen'
export const loginScreen = 'loginScreen'
export const registrationScreen = 'registrationScreen'
export const newsScreen = 'newsScreen'

export const initialScreen = [
    {
        name: homeScreen,
        title: 'Home',
        component: HomeScreen,
        options: {}
    },
    {
        name: loginScreen,
        title: 'Login',
        component: LoginScreen,
        options: {}
    },
    {
        name: registrationScreen,
        title: 'Register',
        component: RegistrationScreen,
        options: {}
    },
    {
        name: newsScreen,
        title: 'Register',
        component: SingleNewsScreen,
        options: {}
    }
]