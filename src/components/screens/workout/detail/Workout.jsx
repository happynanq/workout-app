import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import Header from '../../../layout/header/Header'
import HeaderWorkout from './HeaderWorkout'
import Loader from '../../../ui/Loader'
import ExerciseItem from './ExerciseItem'
import { Fragment } from 'react'
import styles from "./Workout.module.scss"
import Button from '../../../ui/button/Button'
import workoutLogService from '../../../../services/workout/workout-log.service'
const Workout = () => {
	const { id } = useParams()
  
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout', id],
		queryFn: () => {
			return WorkoutLogService.getById(id)
		},
		select: ({ data }) => {
			return data
		}
	})

	const navigate = useNavigate()

	const {mutate} = useMutation({
		mutationKey:["complete workout"], 
		mutationFn : ()=>{
			console.log("complete workout");
			
			return workoutLogService.complete(id)
		}, 
		onSuccess:()=>{
			navigate('/workouts')
		}
	})

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog}  />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? <Loader/> : 
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, idx)=>{
							return(
								<Fragment key={idx}>
									<ExerciseItem exerciseLog={exerciseLog}/>

									{idx%2 !== 0 && idx !== workoutLog.exerciseLogs.length -1 &&(
										<div className={styles.line}></div>
									)}
								</Fragment>
							)
						})}
					</div>
				}
			<Button clickHandler={()=>{mutate()}}>Complete workout</Button>

			</div>
		</>
	)
}

export default Workout
