import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'

import { useExerciseLog } from './hooks/useExerciseLog'

import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'
import { useEffect } from 'react'
import { useCompleteLog } from './hooks/useCompleteLog'
import { useUpdateLogTime } from './hooks/useUpdateLogTime'
import ExerciseError from './ExerciseError'
import { useExerciseLogQuery } from './hooks/useExerciseLogQuery'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		error,
		onChangeState,
		toggleTime,
		getTimeValue,
		getState
	} = useExerciseLogQuery()
	// const { errorChange, updateTime } = useUpdateLogTime()
	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item, index) => (
							<TableRow
								getState={getState}
								toggleTime={toggleTime}
								getTimeValue={getTimeValue}
								onChangeState={onChangeState}
								onChange={() => onChangeTime(item)}
								value={getTimeValue(item.id)}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
