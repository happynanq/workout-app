import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/use.onClickOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu'
const Hamburger = () => {
	// const [isShow, setIsShow] = useState(false)
	const { isShow, ref, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<button
			aria-label='Open menu'
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				{isShow ? <IoClose  /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
