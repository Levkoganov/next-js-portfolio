import React from "react";
import * as THREE from "three";
import Geometry from "./Geometry";

const Geometries = () => {
  const geometries = [
    {
      // position: [0, 0, 0],
      position: new THREE.Vector3(0, 0, 0),
      rate: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), // Gem
    },
  ];

  const materials = [new THREE.MeshNormalMaterial()];

  return geometries.map(({ position, rate, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.multiplyScalar(2)}
      geometry={geometry}
      materials={materials}
      rate={rate}
    />
  ));
};

export default Geometries;
