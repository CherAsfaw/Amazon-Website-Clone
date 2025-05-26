import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from './component/DataProvider/DataProvider.jsx';
import {reducer, initialState} from './Utility/reducer.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
