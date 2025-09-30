import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/use.auth'
import {
	BrowserRouter,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Routes
} from 'react-router-dom'
import { routes } from './routes.data'

// ! 1th way to do router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}

			<Route element={<NotFound />} path='*' />
		</Route>
	)
)

// 2nd way to do routes

const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route =>{
          if(!isAuth && route.isAuth){
            return false;
          }

          return(
            <Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
          )
        }
					
				)}

				<Route element={<NotFound />} path='*' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
