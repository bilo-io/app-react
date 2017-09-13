import React from 'react';
import store from './store';
import {Route, Switch, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Sidenav from './containers/sidenav/component';
import {toggleSidenav} from './containers/sidenav/actions'
// Pages
import Async from './pages/async';
import About from './pages/about';
import Demo from './pages/demo';
import Home from './pages/home';
import Todo from './pages/todo';
import NotFound from './pages/not-found';

require('../app.scss');

export class App extends React.Component {
    componentWillMount() {
        this.toggleSidenav = this.toggleSidenav.bind(this);
        
        this.setState({
            sidenav: {
                isOpen: false,
                items: [
                    {
                        link: '/async',
                        text: 'Async'
                    },
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
            }
        }, () => console.log('App:', this.state))
    }
    render() {
        let sidenav = this.state.sidenav;
        let isOpen = this.state.sidenav.isOpen;
        let items = this.state.sidenav.items;
        console.log({ sidenav });
        console.log({ items });
        console.log({ isOpen });
        return this.state
            ? (
                <Router>
                    <div>
                        <Navbar>
                            <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => {
                                this.toggleSidenav()
                            }}
                                width='48'/>
                            <Link to="/home">React App</Link>
                        </Navbar>
                        <div className='app-content'>
                            <Sidenav
                                isOpen={this.state.sidenav.isOpen}
                                items={this.state.sidenav.items}
                                toggleSidenav={this.toggleSidenav.bind(this)}>
                                {(this.state.sidenav.items).map((item) => {
                                    return <Link
                                        key={item.link}
                                        className='sidenav-link'
                                        to={item.link}
                                        onClick={() => this.toggleSidenav()}>
                                        {item.text}
                                    </Link>
                                })}
                            </Sidenav>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/async" component={Async}/>
                                <Route exact path="/about" component={About} />
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/demo" component={Demo}/>
                                <Route exact path="/todo" component={Todo}/>
                                <Route path="*" component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            )
            : null;
    }
    toggleSidenav() {
        this.setState({
            ...this.state,
            sidenav: {
                ...this.state.sidenav,
                isOpen: !this.state.sidenav.isOpen
            }
        })
        // }, console.log(this.state.sidenav));
    }
}

export default App;