import React, { useEffect, useRef, useState, createRef } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import { ThreeProvider } from "./providers";
import Box from "./components/Box";

export default function Home() {
  const scrollArea = useRef();

  const state = {
    sections: 3,
    pages: 3,
    zoom: 75,
  };

  const [top, setTop] = useState(0);

  const onScroll = (e) => {
    setTop(e.target.scrollTop);
  };

  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <ThreeProvider state={{ ...state, top }}>
      <CanvasWrapper>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </CanvasWrapper>

      <ScrollArea ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </ScrollArea>
    </ThreeProvider>
  );
}

const CanvasWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;
