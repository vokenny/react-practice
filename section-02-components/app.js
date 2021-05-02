(function () {
  'use strict';

  // Statleess Functional Components
  const ColorSpectrum = () => {
    return (
      <h1>Red, Orange, Yellow, Green, Blue, Indigo, Violet</h1>
    );
  }

  const Red = () => {
    return (
      <h1>Red</h1>
    );
  }

  const Orange = () => {
    return (
      <h1>Orange</h1>
    );
  }

  const Yellow = () => {
    return (
      <h1>Yellow</h1>
    );
  }

  const Green = () => {
    return (
      <h1>Green</h1>
    );
  }

  const Blue = () => {
    return (
      <h1>Blue</h1>
    );
  }

  const Indigo = () => {
    return (
      <h1>Indigo</h1>
    );
  }

  const Violet = () => {
    return (
      <h1>Violet</h1>
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
      return (
        <h1>Circle</h1>
      );
    }
  }

  class Square extends React.Component {
    render() {
      return (
        <h1>Square</h1>
      );
    }
  }

  class Triangle extends React.Component {
    render() {
      return (
        <h1>Triangle</h1>
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
  // ReactDOM.render(<ColorSpectrum />, destination);
  // ReactDOM.render(<Rainbow />, destination);
  ReactDOM.render(<Shapes />, destination);
}());