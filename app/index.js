import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

const AppWrapper = () => {
  return <App/>
};

ReactDOM.render(<AppWrapper />, document.getElementById('react-root'));
