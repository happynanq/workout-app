import { useParams } from 'react-router-dom'
import { useExerciseLog } from './useExerciseLog'
import exerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useExerciseLogQuery = () => {
	const { id } = useParams()
	const exerciseLogHooks = useExerciseLog()

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],

		queryFn: async () => {
			return await exerciseLogService.getById(id)
		},
		select: ({ data }) => {
			// console.log('data select, ', data.times)
			return data
		}
	})

	useEffect(() => {
		if (isSuccess && exerciseLog?.times?.length) {
      exerciseLogHooks.setTimes(exerciseLog.times)

		}
	}, [exerciseLog])

	// useEffect(() => {
	//   console.log("SUCCESS123", isSuccess, " 123 ", exerciseLog)

	// 	if (isSuccess && exerciseLog?.times?.length) {
	//     console.log("SUCCESS", exerciseLog)
	// 		exerciseLogHooks.setTimes(exerciseLog)
	// 	}
	// }, [isSuccess, exerciseLog])

	return { ...exerciseLogHooks, exerciseLog, isSuccess, isLoading }
}
