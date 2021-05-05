(function () {
  'use strict';

  const Color = function (props) {
    let colorBandStyling = {
      height: 50,
      margin: "10px auto",
      paddingLeft: 10,
      backgroundColor: props.color
    }

    return (
      <h1 style={colorBandStyling} >{props.color}</h1>
    );
  }

  const destination = document.getElementById('app');

  ReactDOM.render(
    <div>
      <Color color="Red" />
      <Color color="Orange" />
      <Color color="Yellow" />
      <Color color="Green" />
      <Color color="Blue" />
      <Color color="Indigo" />
      <Color color="Violet" />
    </div>,
    destination
  );
}());