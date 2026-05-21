import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import router from './components/router/Router'
import AuthProvider from './components/providers/AuthProvider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create Query Client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)