import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import MyModel from './MyModel';
import MyModel2 from './MyModel2';
import MyModel3 from './MyModel3';

const ARScene = () => {
  return (
    <Canvas shadowMap>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <MyModel position={[0, 5, 0]} scale={[0.5, 0.5, 0.5]} />
        <MyModel2 position={[2, 3, -1]} scale={[0.3, 0.3, 0.3]} />
        <MyModel3 position={[-2, 2, 1]} scale={[0.8, 0.8, 0.8]} />
      </Physics>
    </Canvas>
  );
};

export default ARScene;