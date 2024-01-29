import { Float } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Vector3 } from "three";
import { gsap } from "gsap";

interface IProps {
  rate: number;
  position: Vector3;
  geometry: THREE.IcosahedronGeometry;
  materials: THREE.MeshNormalMaterial[];
}
const Geometry = ({ rate, position, geometry, materials }: IProps) => {
  const meshRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e: any) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * rate} rotationIntensity={6 * rate} floatIntensity={5 * rate}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial as any}
        />
      </Float>
    </group>
  );
};

export default Geometry;
