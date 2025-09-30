import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/use.auth'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import authServices from '../../../services/auth.services'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const { mutate, isLoading } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => {
			return authServices.main(email, password, type)
		},
		onSuccess: data => {
			setIsAuth(true)
			alert('Success')
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(() => ({
		setType,
		register,
		handleSubmit,
		errors,
		isLoading,
		onSubmit
	}), [errors, isLoading])
}
