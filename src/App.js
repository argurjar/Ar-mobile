// import React from 'react';
// import ARComponent from './componant/ARComponent ';

// const App = () => {
//   const handleLinkClick = () => {
    
//   };

//   return (
//     <div>
//       <button onClick={handleLinkClick}>
//        click here
//       </button>
//       <ARComponent />
//     </div>
//   );
// };

// export default App;import React, { useRef, useState, useEffect } from 'react';




import React from 'react';
import ARScene from './ARScene';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ARScene />
    </div>
  );
}

export default App;

