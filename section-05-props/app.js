(function () {
  'use strict';

  /*
  Must use 'props' exactly.
  Properties are one-way data binding (uni-directional) from parent to child component
  */
  function Person(props) {
    return (
      <h1>Hi, {props.name}</h1>
    );
  }

  class PersonGreeting extends React.Component {
    render() {
      let personGreetingStyle = {
        height: 400,
        width: 600,
        backgroundColor: this.props.color
      }
      return (
        <div style={personGreetingStyle}>Hi {this.props.name}</div>
      );
    }
  }

  const destination = document.getElementById('app');

  // ReactDOM.render(<Person name="Kenny" />, destination);
  ReactDOM.render(<PersonGreeting color="aquamarine" name="Kenny" />, destination);
}());