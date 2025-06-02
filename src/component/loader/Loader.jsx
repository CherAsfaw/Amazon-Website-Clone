import React from 'react'
import { HashLoader } from 'react-spinners';
function Loader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh'
    }}>
      <HashLoader color="#3ae2c1" />
    </div>
  );
}
// 
export default Loader