import React from 'react';
import store from './store';
import {Route, Switch, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Sidenav from './containers/sidenav/component';
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
    componentWillMount() {
        this.toggleSidenav = this.toggleSidenav.bind(this);
        
        this.setState({
            sidenav: {
                isOpen: false,
                pages: [
                    {
                        link: '/async',
                        name: 'Async'
                    }, {
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
                ]
            }
        }, () => console.log('App.state:', this.state))
    }
    render() {
        let sidenav = this.state.sidenav;
        let isOpen = this.state.sidenav.isOpen;
        let items = this.state.sidenav.items;
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
                                {(this.state.sidenav.pages).map((page) => {
                                    return <Link
                                        key={page.link}
                                        className='sidenav-link'
                                        to={page.link}
                                        onClick={() => this.toggleSidenav()}>
                                        {page.name}
                                    </Link>
                                })}
                            </Sidenav>
                            <Switch>
                                <Route exact path="/" component={Home}/>                                
                                <Route exact path="/about" component={About} />
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/demo" component={Demo}/>
                                <Route exact path="/elastic" component={Elastic} />
                                <Route exact path="/places" component={Places}/>
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
    }
}

export default App;