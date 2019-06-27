import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Clock } from './timer';
import Welcome from "./welcome";
import { Toggle } from "./toggle";
import List from "./list";
import {Calculator} from "./Calculator"

interface User {
  firstName: string,
  lastName: string
}

const formatName = (user: User) => user.firstName + ' ' + user.lastName;

const getGreeting = (user: User) => {
  if (user) {
    return <span>{formatName(user)}!</span>;
  }
  return <span>Stranger.</span>;
}

const me = {
  firstName: 'Shinya',
  lastName: 'Torimoto'
};

const element = (
  <div>
    <Welcome name="shinya" />
    <Clock />
    <Toggle />
    <h1>Hello, {getGreeting(me)}</h1>
    <h2>Good to see you here.</h2>
    <List />
    <hr />
    <h1>Temperature Calculator</h1>
    <Calculator />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

