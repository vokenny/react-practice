(function () {
  'use strict';

  /*
  JSX only accepts one parent element
  but can have as many child elements as you want
  */
  const hello = (
    <div>
      <h1>Hello World</h1>
      <h2>I hope you have a good day</h2>
    </div>
  );
  const destination = document.getElementById('app');

  ReactDOM.render(hello, destination);
}());