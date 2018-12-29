import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTE QUE DEFINE A ROTAS
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//APLICACAO WEB
import App from './App';
import Teste from './teste';

ReactDOM.render(
<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/teste" component={Teste} />
        </Switch>
    </ BrowserRouter>
   , document.getElementById('root'));
