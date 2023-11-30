import React from 'react';
import ReactDOM from 'react-dom';
import Appw from './Appw';

const WidgetDivs = document.querySelectorAll('.hype_widget')

WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <Appw />
    </React.StrictMode>,
    Div
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
