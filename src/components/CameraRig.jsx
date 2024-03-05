import { useRef } from "react";
import { useSnapshot } from "valtio";
import { useGLTF } from "@react-three/drei";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import state from "@/store/index";
import { AlphaFormat } from "three";
const CameraRig = ({ children }) => {
  const snap = useSnapshot(state);
  const group = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.rotation.y / 10, -state.rotation.x / 5, 0],
      0.25,
      AlphaFormatmode,
      decodeURI // estimate disable
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
