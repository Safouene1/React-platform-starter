import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ConfigProvider } from 'antd';
import * as  themeConfig from '../themeConfig.json'


const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {


    root.render(
        <App />
    )

} else {
  root.render(

  <App/>


  )
}
