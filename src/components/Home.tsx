import React, { JSX } from 'react';
import { VariablesUtils } from '../utils/global';
import Header from './Header';
import Navbar from './Navbar';


export default function Home() : JSX.Element{
    return(
        <div className="App Header">
           <Header/>
           <Navbar/>
        </div>
    )
}
