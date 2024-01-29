"use client";
import { Suspense } from "react";
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Geometries from "../components/Geometries";

const Shapes = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
    {/* <div className="row-span-1 row-start-1 -mt-9 aspect-video md:col-span-1 md:col-start-2 md:mt-0"> */}
      {/* <div className=""> */}
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

// function Geometries() {
//   const geometries = [
//     {
//       // position: [0, 0, 0],
//       position: new THREE.Vector3(0, 0, 0),
//       rate: 0.3,
//       geometry: new THREE.IcosahedronGeometry(3), // Gem
//     },
//   ];

//   const materials = [new THREE.MeshNormalMaterial()];

//   return geometries.map(({ position, rate, geometry }) => (
//     <Geometry
//       key={JSON.stringify(position)}
//       position={position.multiplyScalar(2)}
//       geometry={geometry}
//       materials={materials}
//       rate={rate}
//     />
//   ));
// }

// interface IGeometry {
//   rate: number;
//   position: Vector3;
//   geometry: THREE.IcosahedronGeometry;
//   materials: THREE.MeshNormalMaterial[];
// }

// function Geometry({ rate, position, geometry, materials }: IGeometry) {
//   const meshRef = useRef(null);
//   const [visible, setVisible] = useState(true);

//   const startingMaterial = getRandomMaterial();

//   function getRandomMaterial() {
//     return gsap.utils.random(materials);
//   }

//   function handleClick(e: any) {
//     const mesh = e.object;

//     gsap.to(mesh.rotation, {
//       x: `+=${gsap.utils.random(0, 2)}`,
//       y: `+=${gsap.utils.random(0, 2)}`,
//       z: `+=${gsap.utils.random(0, 2)}`,
//       duration: 1.3,
//       ease: "elastic.out(1,0.3)",
//       // yoyo: true,
//     });
//     mesh.material = getRandomMaterial();
//   }

//   const handlePointerOver = () => {
//     document.body.style.cursor = "pointer";
//   };

//   const handlePointerOut = () => {
//     document.body.style.cursor = "default";
//   };

//   return (
//     <group position={position} ref={meshRef}>
//       <Float speed={5 * rate} rotationIntensity={6 * rate} floatIntensity={5 * rate}>
//         <mesh
//           geometry={geometry}
//           onClick={handleClick}
//           onPointerOver={handlePointerOver}
//           onPointerOut={handlePointerOut}
//           visible={visible}
//           material={startingMaterial as any}
//         />
//       </Float>
//     </group>
//   );
// }

export default Shapes;
