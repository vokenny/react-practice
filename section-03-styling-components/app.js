(function () {
  'use strict';

  // Statleess Functional Components
  const Red = () => {
    return (
      <h1 class="red">Red</h1>
    );
  }

  const Orange = () => {
    return (
      <h1 class="orange">Orange</h1>
    );
  }

  const Yellow = () => {
    return (
      <h1 class="yellow">Yellow</h1>
    );
  }

  const Green = () => {
    return (
      <h1 class="green">Green</h1>
    );
  }

  const Blue = () => {
    return (
      <h1 class="blue">Blue</h1>
    );
  }

  const Indigo = () => {
    return (
      <h1 class="indigo">Indigo</h1>
    );
  }

  const Violet = () => {
    return (
      <h1 class="violet">Violet</h1>
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