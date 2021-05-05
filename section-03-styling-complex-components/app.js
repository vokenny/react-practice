(function () {
  'use strict';

  const baseStyle = {
    height: 50,
    margin: "10px auto",
    paddingLeft: 10
  };

  // Stateless Functional Components
  const Red = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "red"
    }

    return (
      <h1 style={styling}>Red</h1>
    );
  }

  const Orange = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "orange"
    }

    return (
      <h1 style={styling}>Orange</h1>
    );
  }

  const Yellow = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "yellow"
    }

    return (
      <h1 style={styling}>Yellow</h1>
    );
  }

  const Green = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "green"
    }

    return (
      <h1 style={styling}>Green</h1>
    );
  }

  const Blue = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "blue"
    }

    return (
      <h1 style={styling}>Blue</h1>
    );
  }

  const Indigo = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "indigo"
    }

    return (
      <h1 style={styling}>Indigo</h1>
    );
  }

  const Violet = () => {
    let styling = {
      ...baseStyle,
      backgroundColor: "violet"
    }

    return (
      <h1 style={styling}>Violet</h1>
    );
  }

  const Rainbow = () => {
    return (
      <div>
        <Red />
        <Orange />
        <Yellow />
        <Green />
        <Blue />
        <Indigo />
        <Violet />
      </div>
    )
  }

  /* React Class Components */
  class Circle extends React.Component {
    render() {
      let circle = {
        width: 100,
        height: 100,
        background: "red",
        borderRadius: "50%"
      }

      return (
        <h1 style={circle} > Circle</h1>
      );
    }
  }

  class Square extends React.Component {
    render() {
      let square = {
        width: 100,
        height: 100,
        background: "red"
      }

      return (
        <h1 style={square}>Square</h1>
      );
    }
  }

  class Triangle extends React.Component {
    render() {
      let triangle = {
        width: 0,
        height: 0,
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "100px solid red"
      }

      return (
        <h1 style={triangle}>Triangle</h1>
      );
    }
  }

  class Shapes extends React.Component {
    render() {
      return (
        <div>
          <Circle />
          <Square />
          <Triangle />
        </div>
      );
    }
  }

  const destination = document.getElementById('app');

  // Notice the component is passed in as a closing tag
  // ReactDOM.render(<Rainbow />, destination);
  ReactDOM.render(<Shapes />, destination);
}());