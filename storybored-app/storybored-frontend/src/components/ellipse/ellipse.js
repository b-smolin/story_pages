import React from "react"
import { Ellipse as KonvaEllipse } from "react-konva"


const Ellipse = (props) => {
    const { properties } = props;
    return (<KonvaEllipse
        key={properties.key}
        id={properties.id}
        x={properties.x}
        y={properties.y}
        radiusX={properties.radiusX}
        radiusY={properties.radiusY}
        fill={properties.fillColor}
        stroke={properties.strokeColor}
        strokeWidth={properties.strokeWidth}
        draggable={properties.draggable}
        listening={properties.listening}
    />);
};

export default Ellipse;