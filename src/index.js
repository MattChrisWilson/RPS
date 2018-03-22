import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './css/style.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Game from './containers/game';
import gameReducer from './reducers/gameReducer';
import configReducer from './reducers/configReducer';

const reducers = combineReducers({
	game: gameReducer,
	config: configReducer,
})

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
