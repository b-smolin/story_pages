import React from "react";
import { Text } from "react-konva";

const Words = (props) => {
  const { properties } = props;
  return (
    <Text
      key={properties.key}
      id={properties.id}
      fontSize={properties.fontSize}
      rotation={properties.rotation}
      x={properties.x}
      y={properties.y}
      text={properties.text}
    />
  );
};

export default Words;
