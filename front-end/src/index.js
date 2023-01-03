import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import {reducer} from './store/reducer'

// import "bootstrap/dist/css/bootstrap.min.css" 
import { BrowserRouter as Router} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
  <Provider store={store}>
    <Router>
       <App />
    </Router>
  </Provider>
);

