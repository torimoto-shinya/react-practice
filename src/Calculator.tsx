import * as React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

interface Props {

}

export class Calculator extends React.Component<Props> {
  render() {
    return (
      <div>
        <TemperatureInput scale="Celsius" />
        <TemperatureInput scale="Fahrenheit" />
      </div>
    );
  }
}