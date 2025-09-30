import styles from './Hamburger.module.scss'
import cn from 'clsx'
import { menu } from './menu.data'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/use.auth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../app.constants'
const Menu = ({ isShow, setIsShow }) => {
	const {setIsAuth} = useAuth()
	const navigate = useNavigate()
	const handleLogout = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
		navigate('/auth')
		
	}
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, idx) => (
					<li key={idx}>
						{/* {item.title} */}
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
export default Menu
