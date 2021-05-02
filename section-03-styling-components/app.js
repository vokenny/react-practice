(function () {
  'use strict';

  const baseStyle = {
    height: 50,
    margin: "10px auto",
    paddingLeft: 10
  };

  // Statleess Functional Components
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

  const destination = document.getElementById('app');

  // Notice the component is passed in as a closing tag
  ReactDOM.render(<Rainbow />, destination);
}());