import React from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom';
import {  router } from './Routes';
import * as themeConfig from '../themeConfig.json';
import { ConfigProvider, theme } from 'antd';


const App: React.FC = () => {

  return (
    <ConfigProvider theme={{ ...themeConfig}}>
    <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
