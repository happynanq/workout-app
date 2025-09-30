import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import exerciseService from '../../../services/exercise/exercise.service'

const UseNewExercise = () => {
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
		mutationKey: ['create exercise'],
		mutationFn: body => exerciseService.create(body),
		onSuccess: () => reset()
	})

	const onSubmit = data => {
		mutate(data)
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
	})
}

export default UseNewExercise
