import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import App from './components/screens/home/Home'
import Router from './routes/Routes'

import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

/*
TODO: Настроить сортировку импортов https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports
*/
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
				{/* <RouterProvider router={router}/> */}
				{/* <App /> */}
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>
)
