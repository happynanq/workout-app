import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../../hooks/use.auth'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/Hamburger'
import { PiPersonArmsSpreadThin } from 'react-icons/pi'
import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{isAuth ? (
				<>
					{pathname === '/' && isAuth ? (
						<button
						aria-label='Go to profile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<PiPersonArmsSpreadThin color='white' fill='#fff' fontSize={29} />
						</button>
					) : (
						<button
						aria-label='Go back'
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack color='white' fill='#fff' fontSize={29} />
						</button>
					)}

					<Hamburger />
				</>
			) : (
				''
			)}
		</header>
	)
}
export default Header
