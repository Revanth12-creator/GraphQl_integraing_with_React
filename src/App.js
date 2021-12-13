import React, {  Fragment } from 'react';
import HeaderComponent from './Components/HeaderComponet';
import HomeComponent from './Components/HomeComp.jsx';
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom"; 
import CandidateForm from './Components/CandidateFrom';
import {ApolloClient,InMemoryCache, ApolloProvider} from '@apollo/client';
const client=new ApolloClient({
    uri:"http://localhost:3000/graphql",
    cache: new InMemoryCache()
})
function App(){
        return(
            <Fragment>
                <ApolloProvider client={client}>
                <Router>
                <HeaderComponent/>
                    <Switch>
                        <Route  exact path='/' component={HomeComponent}/>
                        <Route  exact path='/candidates' component={CandidateForm}/>
                    </Switch>
                </Router>
                </ApolloProvider>
            </Fragment>
        )
    }
export default App;