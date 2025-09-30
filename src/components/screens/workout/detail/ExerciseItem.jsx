import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './Workout.module.scss'
import { getPath } from '../../../../utils/getPath'

const ExerciseItem = ({ exerciseLog }) => {
	const navigation = useNavigate()
	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigation(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={getPath(exerciseLog.exercise.iconPath)}
					height='34'
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
