import React from "react";
import { HashRouter } from 'react-router-dom'
import Footer from "../common/template/footer";
import Header from "../common/template/header";
import Sidebar from "../common/template/Sidebar";
import Routes from "./Routes";
import Messages from "../common/msg/Messages";
import Routes from "./Routes";

export default props => (
    <HashRouter>
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
        
           <Routes/>
        
        <Footer/>
        <Messages/>
    </div>
    </HashRouter>
)