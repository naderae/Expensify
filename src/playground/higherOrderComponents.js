



//// higher order component (HOC) - a component(HOC)that renders another component
///// the goal of the hoc is to reuse code,
////render hijacking
//// prop manipulation
/// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is: {props.info}</p>
  </div>
);


// this function will return a higher order component
const withAdminsWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>this is private info, please don't share</p>}
      <WrappedComponent { ...props }/>
    </div>
  )

};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>please log in to view the info brotha</p>}
    </div>
  )
};


// AdminInfo is the higher order component.
// const AdminInfo = withAdminsWarning(Info)
const AuthInfo = requireureAuthentication (Info)


/// you pass in the props that the returned components use right there inside the HOC render call.
// ReactDOM.render(<AdminInfo isAdmin= { true } info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated= { true } info="these are the details" />, document.getElementById('app'));
