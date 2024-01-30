import { Float } from "@react-three/drei";
import React, { useRef, useState, PointerEvent } from "react";
import { Vector3 } from "three";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface IProps {
  rate: number;
  position: Vector3;
  geometry: any; // TODO: fix any
  materials: (THREE.MeshNormalMaterial | THREE.MeshStandardMaterial)[];
}
const Geometry = ({ rate, position, geometry, materials }: IProps) => {
  const meshRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  // TODO: fix any
  function handleClick(e: any) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.5,
      ease: "elastic.out(1,0.3)",
    });
    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useGSAP(
    () => {
      setVisible(true);
      gsap.from(meshRef.current?.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "elastic.out(1,0.3)",
        delay: 1,
      });
    },
    { dependencies: [visible], scope: meshRef }
  );

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * rate} rotationIntensity={6 * rate} floatIntensity={5 * rate}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
};

export default Geometry;
