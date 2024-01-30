"use client";
import { Suspense } from "react";
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Geometries from "../components/Geometries";
import { Vector3 } from "three";

const Shapes = () => {
  return (
    <div className="row-span-1 row-start-2 md:row-start-1 -mt-9 aspect-square md:col-span-1">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: new Vector3(0, 0, 25), fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={new Vector3(0, -3.3, 0)}
            opacity={0.65}
            scale={30}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Shapes;
