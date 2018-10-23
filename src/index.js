import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/' component={Home} />
				<Route exact path='/happy' component={Happy} />
				<Route exact path='/sleepy' component={Sleepy} />
        <Route exact path='/guilty' component={Guilty} />
			</div>
		</BrowserRouter>
	)
}

class Home extends Component{
  render(){
    return(
      <Menu>
        <Menu.Item
          name='Home'
          onClick={() => this.props.history.push('/')}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='Happy'
          onClick={() => this.props.history.push('/happy')}
        >
          Happy
        </Menu.Item>

        <Menu.Item
          name='Sleepy'
          onClick={() => this.props.history.push('/sleepy')}
        >
          Sleepy
        </Menu.Item>

        <Menu.Item
          name='Guilty'
          onClick={() => this.props.history.push('/guilty')}
        >
          Guilty
        </Menu.Item>
        </Menu>
    )
  }
}

ReactDOM.render( <Root />, document.getElementById('root') );
