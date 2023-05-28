import React from 'react';
import enUS from 'antd/lib/locale/en_US';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import * as themeConfig from '../themeConfig.json';
import { ConfigProvider } from 'antd';
import { store } from './store/store';
import { Provider } from 'react-redux';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ ...themeConfig }} locale={enUS}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
