import React from "react";
import { Ellipse as KonvaEllipse } from "react-konva";

const Ellipse = (props) => {
  const { properties } = props;
  return (
    <KonvaEllipse
      x={properties.x}
      y={properties.y}
      key={properties.key}
      radius={properties.radius}
      fill={properties.fill}
      stroke={properties.stroke}
      strokeWidth={properties.strokeWidth}
      listening={properties.listening}
      draggable={properties.draggable}
      // key={properties.key}
      // id={properties.id}
      // x={properties.x}
      // y={properties.y}
      // radiusX={properties.radiusX}
      // radiusY={properties.radiusY}
      // fill={properties.fillColor}
      // stroke={properties.strokeColor}
      // strokeWidth={properties.strokeWidth}
      // draggable={properties.draggable}
      // listening={properties.listening}
    />
  );
};

export default Ellipse;
