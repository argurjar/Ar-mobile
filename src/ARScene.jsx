
import React from 'react';
import { Canvas, fog } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Box } from '@react-three/drei';

const ARScene = () => {
  return (
    <Canvas>
      <fog attach="fog" args={['white', 10, 100]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Box args={[2, 2, 2]} position={[0, 5, 0]} castShadow receiveShadow>
          <meshNormalMaterial />
        </Box>
      </Physics>
    </Canvas>
  );
};

export default ARScene;
