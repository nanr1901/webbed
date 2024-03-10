import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <Home/>
  </MantineProvider>
)
