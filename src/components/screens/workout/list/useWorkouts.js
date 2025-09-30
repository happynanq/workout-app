import { useMutation, useQueries, useQuery } from '@tanstack/react-query'
import workoutService from '../../../../services/workout/workout.service'
import workoutLogService from '../../../../services/workout/workout-log.service'
import { useNavigate } from 'react-router-dom'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery({
		queryKey: ['get workouts'],
		queryFn: async (workoutId) => {
			const res = await workoutService.getAll()
			return res
		},
		refetchOnWindowFocus: false,
		select: ({ data }) => data
	})

	const navigate = useNavigate()
	const {
		isLoading,
		mutate,
		error,
		isSuccess: isSuccessMutate
	} = useMutation({
		mutationKey: ['create new workout log'],
		mutationFn: (id) => {
			return workoutLogService.create(id)
		},
		onSuccess: ({data}) => {
			navigate(`/workout/${data.id}`)
		}
	})
	return {
		data,
		isSuccess,
		isLoading,
		mutate,
		error,
		isSuccessMutate
	}
}
