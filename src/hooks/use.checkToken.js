import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { TOKEN } from '../app.constants'
import { useAuth } from './use.auth'
import { useEffect } from 'react'
export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}
