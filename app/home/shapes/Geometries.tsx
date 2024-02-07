import React from "react";
import * as THREE from "three";
import Geometry from "./Geometry";

const Geometries = () => {
  const geometries = [
    {
      position: new THREE.Vector3(0, 0.1, 0),
      rate: 0.4,
      geometry: new THREE.IcosahedronGeometry(3), // Gem
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
