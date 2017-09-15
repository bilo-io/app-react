import React from 'react';
import store from './store';
import {Route, Switch, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// Components
import Navbar from './components/navbar';
// Containers
import Sidenav from './containers/sidenav';
import {toggleSidenav} from './containers/sidenav/actions'
// Pages
import About from './pages/about';
import Demo from './pages/demo';
import Home from './pages/home';
import Elastic from './pages/elastic';
import Places from './pages/places';
import NotFound from './pages/not-found';

require('../app.scss');

export class App extends React.Component {
    componentWillMount() {}
    render() {
        let items = [
            {
                link: '/about',
                name: 'About'
            }, {
                link: '/home',
                name: 'Home'
            }, {
                link: '/demo',
                name: 'Demo'
            }, {
                link: '/elastic',
                name: 'Elastic'
            }, {
                link: '/places',
                name: 'Places'
            }
        ];
        return (
            <Router>
                <div>
                    <Navbar>
                        <img
                            src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                            onClick={() => {
                            store.dispatch(toggleSidenav())
                        }}
                            width='48'/>
                        <Link to="/home">React App</Link>
                    </Navbar>
                    <div className='app-content'>
                        <Sidenav>
                            {items.map((page) => {
                                return <Link
                                    key={page.link}
                                    className='sidenav-link'
                                    to={page.link}
                                    onClick={() => store.dispatch(toggleSidenav)}>
                                    {page.name}
                                </Link>
                            })}
                        </Sidenav>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/demo" component={Demo}/>
                            <Route exact path="/elastic" component={Elastic}/>
                            <Route exact path="/places" component={Places}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;