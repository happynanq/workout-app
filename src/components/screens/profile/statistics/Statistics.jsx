import { useProfile } from '../useProfile'
import styles from './Statistics.module.scss'

const Statistics = () => {
	const { data } = useProfile()
	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map((stats, idx) => {
				return (
					<div key ={idx} className={styles.count}>
						<div className={styles.heading}>{stats.label}</div>
						<div className={styles.number}>{stats.value}</div>
					</div>
				)
			})}
		</div>
	)
}

export default Statistics
