import React from "react";
import '../common/template/Dependecies'
import Footer from "../common/template/footer";
import Header from "../common/template/header";
import Sidebar from "../common/template/Sidebar";
import Routes from "./Routes";

export default props => (
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
        <div className="constent-wrapper">
           <h1>Conteudo</h1> 
           <Routes/>
        </div>
        <Footer/>
    </div>
)