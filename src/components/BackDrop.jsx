import { easing } from "maath";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const BackDrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.3]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.6}
        ambient={0.05}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
