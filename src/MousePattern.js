import React, { useState } from "react";
import styled from "styled-components";

const FollowPattern = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #ff6347;
  border-radius: 50%;
`;

const MousePattern = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ position: "relative" }}>
      <FollowPattern
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      />
    </div>
  );
};

export default MousePattern;
