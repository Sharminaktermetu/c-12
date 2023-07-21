import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from './Layouts/ThemeContext.jsx'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-lg mx-auto'>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </div>
      </QueryClientProvider>

    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
