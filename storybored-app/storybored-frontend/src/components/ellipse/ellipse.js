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
      id={properties.id}
    />
  );
};

export default Ellipse;
