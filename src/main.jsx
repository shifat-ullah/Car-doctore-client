import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routers.jsx';
import Authproviders from './providers/Authproviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-[90%] mx-auto'>
    <React.StrictMode>
      <Authproviders>
        <RouterProvider router={router} />
      </Authproviders>
    </React.StrictMode>
  </div>
)
