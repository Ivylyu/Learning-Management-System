import React from 'react';
import Footer from './FooterComponent/Footer';
import LoginForm from './LoginFormComponent/components/LoginForm';
import Header from './HeaderComponent/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => (
    <div>
        <Header />
        <LoginForm />
        <Footer /> 
    </div>
);
export default Home;
