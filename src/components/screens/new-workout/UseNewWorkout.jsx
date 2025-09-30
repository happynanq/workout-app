import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import workoutService from '../../../services/workout/workout.service'

const UseNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => {
			return workoutService.create(body)
		},
		onSuccess: () => reset({
			name:'', 
			exerciseIds:[]
		})
	})

	const onSubmit = data => {
		mutate({
			name:data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}
	return useMemo(() => {
		return {
			register,
			handleSubmit,
			errors,
			reset,
			control,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}
	}, [errors, isSuccess, error, isLoading])
}

export default UseNewWorkout
