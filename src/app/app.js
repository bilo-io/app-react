import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Sidenav from './components/sidenav';
// Pages
import About from './pages/about';
import Demo from './pages/demo';
import Home from './pages/home';
import Todo from './pages/todo';
import NotFound from './pages/not-found';

require('../app.scss');

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            sidenavOpen: false,
            sidenavItems: [
                {
                    link: '/home',
                    text: 'About'
                }, {
                    link: '/demo',
                    text: 'Demo'
                }, {
                    link: '/todo',
                    text: 'Todo'
                }
            ]
        });
    }
    toggleSidenav() {
        this.setState({
            ...this.state,
            sidenavOpen: !this.state.sidenavOpen
        }, () => console.log(this.state));
    }
    render() {
        return this.state
            ? (
                <div>
                    <Navbar>
                        {/* onClick={this.toggleSidenav.bind(this)} */}
                        <img
                            src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                            onClick={this.toggleSidenav.bind(this)} 
                            width='48' />
                        <Link to="/home">React App</Link>
                    </Navbar>

                    <div className='app-content'>
                        <Sidenav isOpen={this.props.sidenavOpen || this.state.sidenavOpen}>
                            {this.state.sidenavItems.map((item) => {
                                return <Link
                                    key={item.link}
                                    className='sidenav-link'
                                    to={item.link}
                                    onClick={this.toggleSidenav.bind(this)}>{item.text}</Link>
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
            : null;
    }
}