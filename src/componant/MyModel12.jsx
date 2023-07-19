import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const MyModel2 = (props) => {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/myModel2.glb'); // Replace 'myModel2.glb' with the path to your second model file

  return (
    <group ref={modelRef}>
      {/* Replace 'mesh_0' with the name of the mesh inside your second model file */}
      <mesh ref={nodes.mesh_0} material={materials['Material_0']} {...props} />
    </group>
  );
};

export default MyModel2;