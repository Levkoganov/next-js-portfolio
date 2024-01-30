import React from "react";
import * as THREE from "three";
import Geometry from "./Geometry";

const Geometries = () => {
  const geometries = [
    {
      position: new THREE.Vector3(0, 0, 0),
      rate: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), // Gem
    },
    {
      position: new THREE.Vector3(1, -0.75, 4),
      rate: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 32), // Pill
    },
    {
      position: new THREE.Vector3(-1.4, 2, -4),
      rate: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), // Ball
    },
    {
      position: new THREE.Vector3(-0.8, -0.75, 5),
      rate: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
    },
    {
      position: new THREE.Vector3(1.6, 1.6, -4),
      rate: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5), // Diamond
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0xd674ba, roughness: 0.3, metalness: 0.5 }), // pink
    new THREE.MeshStandardMaterial({ color: 0x417efd, roughness: 0.3, metalness: 0.5 }), // blue
    new THREE.MeshStandardMaterial({ color: 0x2bc8c8, roughness: 0.1, metalness: 0.5 }), // paleblue
    new THREE.MeshStandardMaterial({ color: 0x8ee787, roughness: 0.3, metalness: 0.5 }), // green
  ];

  const soundEffects = [new Audio("/sounds/knock1.ogg"), new Audio("/sounds/knock2.ogg")];

  return geometries.map(({ position, rate, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.multiplyScalar(2)}
      soundEffects={soundEffects}
      geometry={geometry}
      materials={materials}
      rate={rate}
    />
  ));
};

export default Geometries;
