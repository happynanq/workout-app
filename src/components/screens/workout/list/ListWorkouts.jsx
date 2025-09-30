import styles from '../detail/Workout.module.scss'
import Layout from '../../../layout/Layout'
import Alert from '../../../ui/alert/Alert'
import { useWorkouts } from './useWorkouts'
import Loader from '../../../ui/Loader'
import WorkoutItem from './WorkoutItem'
const ListWorkouts = () => {
	const { mutate, data, error, isLoading, isSuccess, isSuccessMutate } =
		useWorkouts()
	return (
		<>
			<Layout bgImage='images/workout-bg.jpg' heading='Workout list' />
			<div
				className={'wrapper-inner-page'}
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map((workout, idx) => {
							return <WorkoutItem key={idx} workout={workout} mutate={mutate} />
						})}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
