import React from 'react';
import store from './store';
import { Route, Switch, Link } from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Sidenav from './components/sidenav';
import { toggleSidenav } from './components/sidenav/actions'
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
        });
    }
    componentDidMount() {
        
    }
    toggleSidenav() {
        this.setState({
            ...this.state,
            sidenavOpen: !this.state.sidenavOpen
        }, () => console.log(this.state));
    }
    render() {
        let dispatch = store.dispatch;

        return this.state
            ? (
                <div>
                    <Navbar>
                        {/* onClick={this.toggleSidenav.bind(this)} */}
                        <img
                            src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                            onClick={ () => {store.dispatch(toggleSidenav)}} 
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