import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const MyModel = (props) => {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/myModel.glb'); // Replace 'myModel.glb' with the path to your model file

  return (
    <group ref={modelRef}>
      {/* Replace 'mesh_0' with the name of the mesh inside your model file */}
      <mesh ref={nodes.mesh_0} material={materials['Material_0']} {...props} />
    </group>
  );
};

export default MyModel;