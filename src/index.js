import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import Profile from './containers/Profile';
// import Home from './containers/Home';
// import History from './containers/History'
import Ranking from './containers/Ranking'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './containers/Profile.css'
// import './containers/History.css';
import './containers/Ranking.css';
import './index.css';


ReactDOM.render(<Ranking />, document.getElementById('root'));
registerServiceWorker();

// worst