import React, { useContext, useEffect } from 'react';
import Routing from './Route';
import { type } from './Utility/action.type';
import { DataContext } from './component/DataProvider/DataProvider';
import { auth } from './Utility/firebase';



function App() {
  const [{ user }, dispatch] = useContext(DataContext)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: type.SET_USER,
          user: authUser,
        })
      } else {
        dispatch({
          type: type.SET_USER,
          user: null,
        });
      }
    })
  }, [])
  return (
    <>
      <Routing/>
    </>
  )
}

export default App