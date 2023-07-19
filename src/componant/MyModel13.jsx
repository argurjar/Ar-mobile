import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const MyModel3 = (props) => {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/myModel3.glb'); // Replace 'myModel3.glb' with the path to your third model file

  return (
    <group ref={modelRef}>
      {/* Replace 'mesh_0' with the name of the mesh inside your third model file */}
      <mesh ref={nodes.mesh_0} material={materials['Material_0']} {...props} />
    </group>
  );
};

export default MyModel3;