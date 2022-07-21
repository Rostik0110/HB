import React, { Component } from 'react';
import Home from './Components/Home/Home.js';
import { BrowserRouter,Route} from 'react-router-dom';

const App = () => {

    return(         
        <BrowserRouter>
            <Route path='/' exact={true} component={Home} />
            <Route path="/Home" component={Home}/>
        </BrowserRouter>  
    )
}

export default App;