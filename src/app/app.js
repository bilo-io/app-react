import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Sidenav from './components/sidenav';
// Pages
import Demo from './pages/demo';
import Home from './pages/home';
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
                    link: '/someurl',
                    text: 'Not Found'
                }
            ]
        });
    }
    toggleSidenav() {
        this.setState({
            ...this.state,
            sidenavOpen: !this.state.sidenavOpen
        });
    }
    render() {
        return this.state
            ? (
                <div>
                    <Navbar>
                        <img
                            src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                            onClick={this
                            .toggleSidenav
                            .bind(this)}
                            width='48'/>
                        <label>React App</label>
                    </Navbar>

                    <div className='app-content'>
                        <Sidenav isOpen={this.state.sidenavOpen}>
                            {this.state.sidenavItems.map((item) => {
                                return <Link
                                        key={item.link}
                                        className='sidenav-link'
                                        to={item.link}
                                        onClick={this.toggleSidenav.bind(this)}>{item.text}</Link>
                                })}
                        </Sidenav>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/demo" component={Demo}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            )
            : null;
    }
}