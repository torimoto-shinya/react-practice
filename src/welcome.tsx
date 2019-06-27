import * as React from 'react';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
interface Props {
  name: string,
}
export default class Welcome extends React.Component<Props> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}