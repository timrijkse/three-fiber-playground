import { createContext, useContext, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";

const offsetContext = createContext(0);

const useBlock = () => {
  const { viewport } = useThree();
  const offset = useContext(offsetContext);

  const canvasWidth = viewport.width / zoom;
  const canvasHeight = viewport.height / zoom;

  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));

  return { offset, canvasWidth, canvasHeight, sectionHeight };
};

const ScrollContent = ({ children, offset, factor, ...props }) => {
  const ref = useRef();

  const { offset: parentOffset, sectionHeight } = useBlock();
  offset = offset !== undefined ? offset : parentOffset;

  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current;
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
  });

  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
};

export default ScrollContent;
