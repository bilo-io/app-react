import React from 'react';
import store from './store';
import { Route, Switch, Link } from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Sidenav from './containers/sidenav';
import { toggleSidenav } from './containers/sidenav/actions'
// Pages
import About from './pages/about';
import Demo from './pages/demo';
import Home from './pages/home';
import Todo from './pages/todo';
import NotFound from './pages/not-found';

require('../app.scss');

export const App = (props) => {
    let sidenav = {
        isOpen: false,
        items: [
            {
                link: '/about',
                text: 'About'
            }, {
                link: '/home',
                text: 'Home'
            }, {
                link: '/demo',
                text: 'Demo'
            }, {
                link: '/todo',
                text: 'Todo'
            }
        ]
    };

    return (
            <div>
                <Navbar>
                    <img
                        src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                        onClick={() => { store.dispatch(toggleSidenav) }}
                        width='48' />
                    <Link to="/home">React App</Link>
                </Navbar>
                <div className='app-content'>
                    <Sidenav isOpen={sidenav.isOpen}>
                        {sidenav.items.map((item) => {
                            return <Link
                                key={item.link}
                                className='sidenav-link'
                                to={item.link}
                                onClick={() => {store.dispatch(toggleSidenav)}}>{item.text}</Link>
                        })}
                    </Sidenav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/demo" component={Demo} />
                        <Route exact path="/todo" component={Todo} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div>
        )
}

export default App;